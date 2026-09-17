import { engineDNAData } from './engine-dna';
import { evergreenDemandEngineDNAData } from './evergreen-demand-engine-dna';
import { evergreenDemandVehicleDNAData, evergreenSupersededVehicleIds } from './evergreen-demand-vehicle-dna';
import { priorityEngineDNAData } from './priority-engine-dna';
import { priorityVehicleDNAData, supersededLegacyVehicleIds } from './priority-vehicle-dna';
import { searchDemandEngineDNAData } from './search-demand-engine-dna';
import { searchDemandSupersededVehicleIds, searchDemandVehicleDNAData } from './search-demand-vehicle-dna';
import { vehicleDNAData } from './vehicle-dna';

const supersededIds = new Set([...supersededLegacyVehicleIds, ...searchDemandSupersededVehicleIds, ...evergreenSupersededVehicleIds]);
const evergreenIds = new Set(evergreenDemandVehicleDNAData.map((vehicle) => vehicle.id));
const searchDemandIds = new Set(searchDemandVehicleDNAData.map((vehicle) => vehicle.id));
const priorityIds = new Set(priorityVehicleDNAData.map((vehicle) => vehicle.id));
const editorialIds = new Set([...evergreenIds, ...searchDemandIds, ...priorityIds]);

// Araştırma katmanı önce gelir. Aynı kimliğe sahip eski/otomatik kayıtlar
// ve açıkça gölgelenen hatalı kayıtlar yayındaki veri kümesine alınmaz.
export const publishedVehicleDNAData = [
    ...evergreenDemandVehicleDNAData,
    ...searchDemandVehicleDNAData.filter((vehicle) => !evergreenIds.has(vehicle.id)),
    ...priorityVehicleDNAData.filter((vehicle) => !evergreenIds.has(vehicle.id) && !searchDemandIds.has(vehicle.id)),
    ...vehicleDNAData.filter((vehicle) => !editorialIds.has(vehicle.id) && !supersededIds.has(vehicle.id)),
];

export const publishedEngineDNAData = [
    ...evergreenDemandEngineDNAData,
    ...searchDemandEngineDNAData.filter((entry) => !evergreenIds.has(entry.vehicleId)),
    ...priorityEngineDNAData.filter((entry) => !evergreenIds.has(entry.vehicleId) && !searchDemandIds.has(entry.vehicleId)),
    ...engineDNAData.filter((entry) => !editorialIds.has(entry.vehicleId) && !supersededIds.has(entry.vehicleId)),
];
