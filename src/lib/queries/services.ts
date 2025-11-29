import { fetcher } from "@/lib/fetcher";
import { ServiceUserType } from "@/types/user";

export const getAllServices = async () => {
    return await fetcher.get<ServiceUserType[]>('service/all').json();
}

export const assignService = async (serviceId: string) => {
    return await fetcher.post<ServiceUserType>(`service/owner/${serviceId}`).json()
}

export const getUserAssignedServices = async () => {
    return await fetcher.get<ServiceUserType[]>('service/owner').json()
}

export const deleteAssignedService = async (serviceId: string) => {
    return await fetcher.delete<ServiceUserType>(`service/owner/${serviceId}`).json()
}