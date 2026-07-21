import additions from './catalog-additions.json' with { type: 'json' };

const brands = Object.keys(additions.models);
const modelCount = Object.values(additions.models).reduce((sum, brandModels) => sum + Object.keys(brandModels).length, 0);
const engineCount = Object.values(additions.engines).reduce(
    (brandSum, brandModels) => brandSum + Object.values(brandModels).reduce(
        (modelSum, generations) => modelSum + Object.values(generations).reduce((sum, options) => sum + options.length, 0),
        0,
    ),
    0,
);

console.log(`Curated catalog additions: ${brands.length} brands, ${modelCount} models, ${engineCount} powertrain options.`);
