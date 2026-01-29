import { fetcher } from "@/lib/fetcher";
import { ServiceRequestStatusType, ServiceRequestType } from "@/types/serviceRequest";
import { MechanicUserType, ServiceUserType } from "@/types/user";

export const getAllServices = async () => {
    return await fetcher.get<ServiceUserType[]>('service/all').json();
}

// export const assignService = async (serviceId: string) => {
//     return await fetcher.post<ServiceUserType>(`service/owner/${serviceId}`).json()
// }

// TODO: move to owner query??
export const getOwnerAssignedOrRequestedServices = async () => {
    return await fetcher.get<ServiceRequestType[]>('owner/service').json()
}

export const deleteAssignedService = async (serviceId: string) => {
    return await fetcher.delete<ServiceUserType>(`service/owner/${serviceId}`).json()
}

export const getServiceMechanics = async () => {
    return await fetcher.get<MechanicUserType[]>('service/mechanic').json()
}

export const addMechanicToService = async (formData: FormData) => {
    return await fetcher.post<MechanicUserType>('service/mechanic', { body: formData }).json()
}

export const createServiceRespond = async (serviceRequestId: string, comment: string, status: ServiceRequestStatusType) => {
    return await fetcher.post<MechanicUserType>(`service/owner/${serviceRequestId}`, { json: { comment, status } }).json()
}

export const getVehicleForJobs = async () => {
    return await fetcher.get<MechanicUserType[]>('service/vehicle').json()
}