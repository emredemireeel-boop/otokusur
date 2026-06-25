/**
 * Parse autoevolution data and generate year/generation-aware data files
 * 
 * New structure:
 *   carmodels.json    → { "Renault": { "Clio": ["2019-Present", "2016-2019", ...], ... } }
 *   carmodels-with-engines.json → { "Renault": { "Clio": { "2019-Present": [{n,f,t},...], ... } } }
 */
const fs = require('fs');
const path = require('path');

// Türkiye pazarında yaygın markalar
const TR_BRANDS = new Set([
  'ALFA ROMEO', 'AUDI', 'BMW', 'CITROEN', 'CUPRA', 'DACIA', 'DS',
  'FIAT', 'FORD', 'HONDA', 'HYUNDAI', 'KIA', 'MAZDA', 'MERCEDES-BENZ',
  'MINI', 'MITSUBISHI', 'NISSAN', 'OPEL', 'PEUGEOT', 'RENAULT', 'SEAT',
  'SKODA', 'SUBARU', 'SUZUKI', 'TESLA', 'TOYOTA', 'VOLKSWAGEN', 'VOLVO',
  'JEEP', 'LAND ROVER', 'LEXUS', 'PORSCHE', 'SSANGYONG', 'MG',
  'BYD', 'CHEVROLET', 'CHRYSLER', 'DODGE', 'FERRARI', 'LAMBORGHINI',
  'MASERATI', 'ASTON MARTIN', 'BENTLEY', 'JAGUAR', 'GENESIS',
]);

function normalizeBrand(name) {
  const map = {
    'MERCEDES-BENZ': 'Mercedes-Benz',
    'ALFA ROMEO': 'Alfa Romeo',
    'ASTON MARTIN': 'Aston Martin',
    'LAND ROVER': 'Land Rover',
    'ROLLS-ROYCE': 'Rolls-Royce',
    'DS': 'DS Automobiles',
    'SSANGYONG': 'SsangYong',
  };
  if (map[name]) return map[name];
  return name.split(/[\s-]+/).map(w =>
    w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  ).join(' ');
}

/**
 * Extract base model name and year range from the full autoevolution name.
 * 
 * Example inputs:
 *   "RENAULT  Clio 5 Doors 2019-Present Photos, engines & full specs"
 *   "HYUNDAI  i20 3 Doors 2014-2018 Photos, engines & full specs"
 *   "BMW  3 Series Sedan (G20) 2019-2022 Photos, engines & full specs"
 */
function parseModelNameAndYear(fullName, brandName) {
  // Remove "Photos, engines & full specs" suffix
  let name = fullName.replace(/\s*Photos,?\s*engines?\s*(?:&amp;|&)?\s*full\s*specs?\s*/gi, '').trim();

  // Remove brand prefix
  const brandEscaped = brandName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  name = name.replace(new RegExp('^\\s*' + brandEscaped + '\\s*', 'i'), '').trim();

  // Extract year range (e.g., "2019-Present", "2014-2018", "2022")
  const yearMatch = name.match(/\s*(\d{4})\s*-?\s*(Present|\d{4})?\s*$/i);
  let yearRange = '';
  let baseName = name;

  if (yearMatch) {
    const startYear = yearMatch[1];
    const endYear = yearMatch[2] || startYear;
    yearRange = endYear.toLowerCase() === 'present'
      ? `${startYear}-Günümüz`
      : startYear === endYear
        ? startYear
        : `${startYear}-${endYear}`;
    baseName = name.substring(0, yearMatch.index).trim();
  }

  // Clean up base model name — remove body style suffixes for grouping
  // Keep important identifiers but normalize variants
  let cleanModel = baseName
    .replace(/\s+/g, ' ')
    .trim();

  // Group variants: "5 Doors", "3 Doors", "Sedan", "Hatchback" etc.
  // We keep these as part of the model name for now but could strip later
  // Actually let's extract the "base model" by removing common suffixes
  const bodyStyles = [
    '5 Doors', '3 Doors', '4 Doors', '2 Doors',
    'Sedan', 'Hatchback', 'Estate', 'Wagon', 'Touring',
    'Coupe', 'Coupé', 'Cabriolet', 'Convertible', 'Roadster',
    'SUV', 'Crossover', 'Van', 'Pickup', 'MPV', 'Minivan',
    'Sportback', 'Liftback', 'Fastback', 'Notchback',
    'Gran Coupe', 'Gran Turismo', 'Sport Tourer',
    'Cross Country', 'Allroad', 'Scout',
    'SWB', 'LWB', 'Short', 'Long',
  ];

  let variant = '';
  for (const style of bodyStyles) {
    const regex = new RegExp('\\s+' + style.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*$', 'i');
    if (regex.test(cleanModel)) {
      variant = style;
      cleanModel = cleanModel.replace(regex, '').trim();
      break;
    }
  }

  // Also handle generation codes like "(G20)", "(F40)", "(W206)" etc.
  const genCodeMatch = cleanModel.match(/\s*\(([A-Z0-9]+)\)\s*$/i);
  let genCode = '';
  if (genCodeMatch) {
    genCode = genCodeMatch[1];
    cleanModel = cleanModel.replace(genCodeMatch[0], '').trim();
  }

  return {
    baseModel: cleanModel,
    variant,
    genCode,
    yearRange,
    fullClean: baseName,
  };
}

function parseEngine(eng) {
  const specs = eng.specs || {};
  const engineSpecs = specs['Engine Specs'] || {};
  const transmissionSpecs = specs['Transmission Specs'] || {};

  const fuel = (engineSpecs['Fuel:'] || 'Unknown').trim();
  const gearbox = (transmissionSpecs['Gearbox:'] || 'Unknown').trim();

  let fuelType = 'Benzin';
  const fuelLower = fuel.toLowerCase();
  if (fuelLower.includes('diesel')) fuelType = 'Dizel';
  else if (fuelLower.includes('electric')) fuelType = 'Elektrik';
  else if (fuelLower.includes('hybrid') || fuelLower.includes('plug-in')) fuelType = 'Hibrit';
  else if (fuelLower.includes('lpg') || fuelLower.includes('lng')) fuelType = 'LPG';

  let transmission = gearbox;
  const gearLower = gearbox.toLowerCase();
  if (gearLower.includes('manual')) transmission = 'Manuel';
  else if (gearLower.includes('automatic') || gearLower.includes('auto')) transmission = 'Otomatik';
  else if (gearLower.includes('cvt')) transmission = 'CVT';
  else if (gearLower.includes('dual') || gearLower.includes('dct') || gearLower.includes('dsg')) transmission = 'DCT';

  return {
    n: eng.name || 'Bilinmiyor',
    f: fuelType,
    t: transmission,
  };
}

async function main() {
  console.log('Loading data...');

  const brandsRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'automobiles_raw', 'brands.json'), 'utf8'));
  const autosRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'automobiles_raw', 'automobiles.json'), 'utf8'));
  const enginesRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'automobiles_raw', 'engines.json'), 'utf8'));

  console.log(`Loaded: ${brandsRaw.length} brands, ${autosRaw.length} automobiles, ${enginesRaw.length} engines`);

  // Build brand map
  const brandMap = {};
  brandsRaw.forEach(b => { brandMap[b.id] = b.name; });

  // Build automobile→engines map
  const autoEngines = {};
  enginesRaw.forEach(eng => {
    if (!autoEngines[eng.automobile_id]) autoEngines[eng.automobile_id] = [];
    autoEngines[eng.automobile_id].push(eng);
  });

  // Result structures
  // withEngines: { brand: { baseModel: { yearRange: [engines] } } }
  const withEngines = {};
  // modelsList: { brand: { baseModel: [yearRanges] } }
  const modelsList = {};

  let totalModels = 0;
  let totalGenerations = 0;
  let totalEngines = 0;

  autosRaw.forEach(auto => {
    const brandName = brandMap[auto.brand_id];
    if (!brandName) return;

    const brandUpper = brandName.toUpperCase();
    if (!TR_BRANDS.has(brandUpper)) return;

    const normalizedBrand = normalizeBrand(brandUpper);
    const parsed = parseModelNameAndYear(auto.name, brandName);

    if (!parsed.baseModel || parsed.baseModel.length < 1) return;
    if (!parsed.yearRange) return; // Skip entries without year info

    const baseModel = parsed.baseModel;
    const yearRange = parsed.yearRange;

    // Initialize structures
    if (!withEngines[normalizedBrand]) withEngines[normalizedBrand] = {};
    if (!withEngines[normalizedBrand][baseModel]) withEngines[normalizedBrand][baseModel] = {};
    if (!modelsList[normalizedBrand]) modelsList[normalizedBrand] = {};
    if (!modelsList[normalizedBrand][baseModel]) modelsList[normalizedBrand][baseModel] = new Set();

    // Parse engines for this generation
    const engines = (autoEngines[auto.id] || []).map(parseEngine);

    if (!withEngines[normalizedBrand][baseModel][yearRange]) {
      withEngines[normalizedBrand][baseModel][yearRange] = [];
      totalGenerations++;
    }

    engines.forEach(eng => {
      // Deduplicate
      const existing = withEngines[normalizedBrand][baseModel][yearRange];
      if (!existing.find(e => e.n === eng.n)) {
        existing.push(eng);
        totalEngines++;
      }
    });

    modelsList[normalizedBrand][baseModel].add(yearRange);
    totalModels++;
  });

  // Sort and finalize
  const sortedEngines = {};
  const sortedModels = {};

  Object.keys(withEngines).sort().forEach(brand => {
    sortedEngines[brand] = {};
    sortedModels[brand] = {};

    Object.keys(withEngines[brand]).sort().forEach(model => {
      // Sort year ranges by start year (descending — newest first)
      const yearRanges = Object.keys(withEngines[brand][model]).sort((a, b) => {
        const ya = parseInt(a);
        const yb = parseInt(b);
        return yb - ya; // newest first
      });

      sortedEngines[brand][model] = {};
      yearRanges.forEach(yr => {
        sortedEngines[brand][model][yr] = withEngines[brand][model][yr];
      });

      sortedModels[brand][model] = yearRanges;
    });
  });

  // Write carmodels-with-engines.json (compressed)
  const enginesPath = path.join(__dirname, 'carmodels-with-engines.json');
  fs.writeFileSync(enginesPath, JSON.stringify(sortedEngines), 'utf8');

  // Write carmodels.json (brand → { model: [yearRanges] })
  const modelsPath = path.join(__dirname, 'carmodels.json');
  fs.writeFileSync(modelsPath, JSON.stringify(sortedModels, null, 2), 'utf8');

  const brandCount = Object.keys(sortedModels).length;
  const modelCount = Object.values(sortedModels).reduce((sum, models) => sum + Object.keys(models).length, 0);

  console.log(`\nOutput files written.`);
  console.log(`Brands: ${brandCount}`);
  console.log(`Base Models: ${modelCount}`);
  console.log(`Generations: ${totalGenerations}`);
  console.log(`Engines: ${totalEngines}`);
  console.log(`File sizes:`);
  console.log(`  carmodels.json: ${(fs.statSync(modelsPath).size / 1024).toFixed(1)} KB`);
  console.log(`  carmodels-with-engines.json: ${(fs.statSync(enginesPath).size / 1024).toFixed(1)} KB`);

  // Print sample
  console.log('\n--- Sample: Hyundai ---');
  const hyundai = sortedModels['Hyundai'];
  if (hyundai) {
    Object.keys(hyundai).slice(0, 8).forEach(model => {
      const years = hyundai[model];
      console.log(`  ${model}:`);
      years.forEach(yr => {
        const engCount = sortedEngines['Hyundai'][model][yr].length;
        console.log(`    ${yr} → ${engCount} motor`);
      });
    });
  }

  console.log('\n--- Sample: Renault Clio ---');
  const clio = sortedModels['Renault']?.['Clio'];
  if (clio) {
    clio.forEach(yr => {
      const engs = sortedEngines['Renault']['Clio'][yr];
      console.log(`  ${yr} → ${engs.length} motor`);
      engs.slice(0, 2).forEach(e => console.log(`    - ${e.n} (${e.f}, ${e.t})`));
    });
  }

  console.log('\n--- Sample: Volkswagen Golf ---');
  const golf = sortedModels['Volkswagen']?.['Golf'];
  if (golf) {
    golf.forEach(yr => {
      const engs = sortedEngines['Volkswagen']['Golf'][yr];
      console.log(`  ${yr} → ${engs.length} motor`);
    });
  }
}

main().catch(console.error);
