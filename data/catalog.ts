import baseModels from './carmodels.json';
import baseEngines from './carmodels-with-engines.json';
import additions from './catalog-additions.json';

export interface CatalogEngine { n: string; f: string; t: string }
export type CatalogModels = Record<string, Record<string, string[]>>;
export type CatalogEngines = Record<string, Record<string, Record<string, CatalogEngine[]>>>;

const models = baseModels as CatalogModels;
const engines = baseEngines as CatalogEngines;
const addedModels = additions.models as CatalogModels;
const addedEngines = additions.engines as CatalogEngines;

export const carModelsCatalog: CatalogModels = {
    ...models,
    ...Object.fromEntries(Object.entries(addedModels).map(([brand, brandModels]) => [brand, { ...(models[brand] ?? {}), ...brandModels }])),
};

export const carEnginesCatalog: CatalogEngines = {
    ...engines,
    ...Object.fromEntries(Object.entries(addedEngines).map(([brand, brandModels]) => [brand, { ...(engines[brand] ?? {}), ...brandModels }])),
};
