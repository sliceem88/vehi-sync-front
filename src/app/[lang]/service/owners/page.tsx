import React from 'react';

import ServiceVehicleCard from "@/app/[lang]/service/owners/components/serviceVehicleCard";
import { getOwnerAssignedOrRequestedVehicleWithOwner } from "@/lib/queries/owners";
import { ServiceRequestStatusType, ServiceRequestType } from "@/types/serviceRequest";

type SortedVehiclesType = Record<ServiceRequestStatusType, ServiceRequestType[]>

const ServiceToOwnerPage = async () => {
    const vehiclesWithOwners = await getOwnerAssignedOrRequestedVehicleWithOwner();
    const sortedVehicles = vehiclesWithOwners.reduce((acc: SortedVehiclesType, vehicleWithOwner) => {
        acc[vehicleWithOwner.status].push(vehicleWithOwner)
        return acc
    }, {
        pending: [],
        approved: [],
        declined: [],
    })

    return (
        <div className="flex gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-360 mx-auto w-full">
            <div>
                
            </div>
            { sortedVehicles.pending.map((vehicleWithOwner) => <ServiceVehicleCard key={ vehicleWithOwner.id } vehicleWithOwner={ vehicleWithOwner } />) }
            { sortedVehicles.approved.map((vehicleWithOwner) => <ServiceVehicleCard key={ vehicleWithOwner.id } vehicleWithOwner={ vehicleWithOwner } />) }
            { sortedVehicles.declined.map((vehicleWithOwner) => <ServiceVehicleCard key={ vehicleWithOwner.id } vehicleWithOwner={ vehicleWithOwner } />) }
        </div>
    );
};

export default ServiceToOwnerPage;