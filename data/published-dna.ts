import { engineDNAData } from './engine-dna';
import { priorityEngineDNAData } from './priority-engine-dna';
import { priorityVehicleDNAData, supersededLegacyVehicleIds } from './priority-vehicle-dna';
import { vehicleDNAData } from './vehicle-dna';

const supersededIds = new Set(supersededLegacyVehicleIds);
const priorityIds = new Set(priorityVehicleDNAData.map((vehicle) => vehicle.id));

// Araştırma katmanı önce gelir. Aynı kimliğe sahip eski/otomatik kayıtlar
// ve açıkça gölgelenen hatalı kayıtlar yayındaki veri kümesine alınmaz.
export const publishedVehicleDNAData = [
    ...priorityVehicleDNAData,
    ...vehicleDNAData.filter((vehicle) => !priorityIds.has(vehicle.id) && !supersededIds.has(vehicle.id)),
];

export const publishedEngineDNAData = [
    ...priorityEngineDNAData,
    ...engineDNAData.filter((entry) => !priorityIds.has(entry.vehicleId) && !supersededIds.has(entry.vehicleId)),
];
