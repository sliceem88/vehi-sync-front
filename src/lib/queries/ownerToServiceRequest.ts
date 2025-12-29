import { fetcher } from "@/lib/fetcher";
import { ServiceUserType } from "@/types/user";

export const assignOwnerToService = async (serviceId: string) => {
    return await fetcher.post<ServiceUserType>(`service/request/${serviceId}`).json()
}