import { fetcher } from "@/lib/fetcher";
import { ServiceRequestType } from "@/types/serviceRequest";

export const getOwnerAssignedOrRequestedVehicleWithOwner = async () => {
    return await fetcher.get<ServiceRequestType[]>('service/owner').json()
}