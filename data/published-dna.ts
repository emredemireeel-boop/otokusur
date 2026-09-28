import { engineDNAData } from './engine-dna';
import { libraryExpansionEngineDNAData } from './library-expansion-engine-dna';
import { libraryExpansionVehicleDNAData } from './library-expansion-vehicle-dna';
import { marketDemandEngineDNAData } from './market-demand-engine-dna';
import { marketDemandVehicleDNAData } from './market-demand-vehicle-dna';
import { evergreenDemandEngineDNAData } from './evergreen-demand-engine-dna';
import { evergreenDemandVehicleDNAData, evergreenSupersededVehicleIds } from './evergreen-demand-vehicle-dna';
import { priorityEngineDNAData } from './priority-engine-dna';
import { priorityVehicleDNAData, supersededLegacyVehicleIds } from './priority-vehicle-dna';
import { searchDemandEngineDNAData } from './search-demand-engine-dna';
import { searchDemandSupersededVehicleIds, searchDemandVehicleDNAData } from './search-demand-vehicle-dna';
import { secondHandDemandEngineDNAData } from './second-hand-demand-engine-dna';
import { secondHandDemandVehicleDNAData, secondHandSupersededVehicleIds } from './second-hand-demand-vehicle-dna';
import { turkeySearchEngineDNAData } from './turkey-search-engine-dna';
import { turkeySearchVehicleDNAData } from './turkey-search-vehicle-dna';
import { vehicleContentEngineDNAData } from './vehicle-content-engine-dna';
import { vehicleContentEnrichment } from './vehicle-content-enrichment';
import { vehicleDNAData } from './vehicle-dna';
import { growthVehicleDNAData } from './growth-vehicle-dna';
import { growthEngineDNAData } from './growth-engine-dna';

const supersededIds = new Set([...supersededLegacyVehicleIds, ...searchDemandSupersededVehicleIds, ...evergreenSupersededVehicleIds, ...secondHandSupersededVehicleIds]);
const secondHandIds = new Set(secondHandDemandVehicleDNAData.map((vehicle) => vehicle.id));
const marketDemandIds = new Set(marketDemandVehicleDNAData.map((vehicle) => vehicle.id));
const turkeySearchIds = new Set(turkeySearchVehicleDNAData.map((vehicle) => vehicle.id));
const evergreenIds = new Set(evergreenDemandVehicleDNAData.map((vehicle) => vehicle.id));
const searchDemandIds = new Set(searchDemandVehicleDNAData.map((vehicle) => vehicle.id));
const priorityIds = new Set(priorityVehicleDNAData.map((vehicle) => vehicle.id));
const libraryExpansionIds = new Set(libraryExpansionVehicleDNAData.map((vehicle) => vehicle.id));
const growthIds = new Set(growthVehicleDNAData.map((vehicle) => vehicle.id));
const editorialIds = new Set([...growthIds, ...libraryExpansionIds, ...marketDemandIds, ...turkeySearchIds, ...secondHandIds, ...evergreenIds, ...searchDemandIds, ...priorityIds]);
const contentEngineIds = new Set(vehicleContentEngineDNAData.map((entry) => entry.vehicleId));

// Araştırma katmanı önce gelir. Aynı kimliğe sahip eski/otomatik kayıtlar
// ve açıkça gölgelenen hatalı kayıtlar yayındaki veri kümesine alınmaz.
const basePublishedVehicleDNAData = [
    ...growthVehicleDNAData,
    ...libraryExpansionVehicleDNAData,
    ...marketDemandVehicleDNAData,
    ...turkeySearchVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id)),
    ...secondHandDemandVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id)),
    ...evergreenDemandVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id) && !secondHandIds.has(vehicle.id)),
    ...searchDemandVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id) && !secondHandIds.has(vehicle.id) && !evergreenIds.has(vehicle.id)),
    ...priorityVehicleDNAData.filter((vehicle) => !marketDemandIds.has(vehicle.id) && !turkeySearchIds.has(vehicle.id) && !secondHandIds.has(vehicle.id) && !evergreenIds.has(vehicle.id) && !searchDemandIds.has(vehicle.id)),
    ...vehicleDNAData.filter((vehicle) => !editorialIds.has(vehicle.id) && !supersededIds.has(vehicle.id)),
];

export const publishedVehicleDNAData = basePublishedVehicleDNAData.map((vehicle) => ({
    ...vehicle,
    ...vehicleContentEnrichment[vehicle.id],
}));

export const publishedEngineDNAData = [
    ...vehicleContentEngineDNAData,
    ...growthEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId)),
    ...libraryExpansionEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId)),
    ...marketDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId)),
    ...turkeySearchEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !marketDemandIds.has(entry.vehicleId)),
    ...secondHandDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId)),
    ...evergreenDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId) && !secondHandIds.has(entry.vehicleId)),
    ...searchDemandEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId) && !secondHandIds.has(entry.vehicleId) && !evergreenIds.has(entry.vehicleId)),
    ...priorityEngineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !turkeySearchIds.has(entry.vehicleId) && !secondHandIds.has(entry.vehicleId) && !evergreenIds.has(entry.vehicleId) && !searchDemandIds.has(entry.vehicleId)),
    ...engineDNAData.filter((entry) => !contentEngineIds.has(entry.vehicleId) && !editorialIds.has(entry.vehicleId) && !supersededIds.has(entry.vehicleId)),
];
