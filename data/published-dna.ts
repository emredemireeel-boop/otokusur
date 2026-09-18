import { engineDNAData } from './engine-dna';
import { evergreenDemandEngineDNAData } from './evergreen-demand-engine-dna';
import { evergreenDemandVehicleDNAData, evergreenSupersededVehicleIds } from './evergreen-demand-vehicle-dna';
import { priorityEngineDNAData } from './priority-engine-dna';
import { priorityVehicleDNAData, supersededLegacyVehicleIds } from './priority-vehicle-dna';
import { searchDemandEngineDNAData } from './search-demand-engine-dna';
import { searchDemandSupersededVehicleIds, searchDemandVehicleDNAData } from './search-demand-vehicle-dna';
import { secondHandDemandEngineDNAData } from './second-hand-demand-engine-dna';
import { secondHandDemandVehicleDNAData, secondHandSupersededVehicleIds } from './second-hand-demand-vehicle-dna';
import { vehicleDNAData } from './vehicle-dna';

const supersededIds = new Set([...supersededLegacyVehicleIds, ...searchDemandSupersededVehicleIds, ...evergreenSupersededVehicleIds, ...secondHandSupersededVehicleIds]);
const secondHandIds = new Set(secondHandDemandVehicleDNAData.map((vehicle) => vehicle.id));
const evergreenIds = new Set(evergreenDemandVehicleDNAData.map((vehicle) => vehicle.id));
const searchDemandIds = new Set(searchDemandVehicleDNAData.map((vehicle) => vehicle.id));
const priorityIds = new Set(priorityVehicleDNAData.map((vehicle) => vehicle.id));
const editorialIds = new Set([...secondHandIds, ...evergreenIds, ...searchDemandIds, ...priorityIds]);

// Araştırma katmanı önce gelir. Aynı kimliğe sahip eski/otomatik kayıtlar
// ve açıkça gölgelenen hatalı kayıtlar yayındaki veri kümesine alınmaz.
export const publishedVehicleDNAData = [
    ...secondHandDemandVehicleDNAData,
    ...evergreenDemandVehicleDNAData.filter((vehicle) => !secondHandIds.has(vehicle.id)),
    ...searchDemandVehicleDNAData.filter((vehicle) => !secondHandIds.has(vehicle.id) && !evergreenIds.has(vehicle.id)),
    ...priorityVehicleDNAData.filter((vehicle) => !secondHandIds.has(vehicle.id) && !evergreenIds.has(vehicle.id) && !searchDemandIds.has(vehicle.id)),
    ...vehicleDNAData.filter((vehicle) => !editorialIds.has(vehicle.id) && !supersededIds.has(vehicle.id)),
];

export const publishedEngineDNAData = [
    ...secondHandDemandEngineDNAData,
    ...evergreenDemandEngineDNAData.filter((entry) => !secondHandIds.has(entry.vehicleId)),
    ...searchDemandEngineDNAData.filter((entry) => !secondHandIds.has(entry.vehicleId) && !evergreenIds.has(entry.vehicleId)),
    ...priorityEngineDNAData.filter((entry) => !secondHandIds.has(entry.vehicleId) && !evergreenIds.has(entry.vehicleId) && !searchDemandIds.has(entry.vehicleId)),
    ...engineDNAData.filter((entry) => !editorialIds.has(entry.vehicleId) && !supersededIds.has(entry.vehicleId)),
];
