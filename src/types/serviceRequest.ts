import { ServiceUserType } from "@/types/user";
import { Vehicle } from "@/types/vehicle";

export type ServiceRequestType = {
    id: string;
    serviceId: string;
    vehicleId: string;
    ownerId: string;
    serviceComment: string | null;
    viewedByOwner: boolean;
    createdAt: string;
    updatedAt: string;
    status: ServiceRequestStatusType
    ownerComment: string | null;
    service: ServiceUserType
    vehicle: Vehicle
}

export type ServiceRequestStatusType = 'pending'| 'approved' | 'declined'
export type InActionServiceItemsType = { serviceIds: string[], vehicleIds: string[]};