import { fetcher } from "@/lib/fetcher";
import { ServiceUserType } from "@/types/user";

export const assignOwnerToService = async (serviceId: string, vehicleId: string, comments?: string) => {
    return await fetcher.post<ServiceUserType>(`service/job/${serviceId}`, { json: {
        vehicleId,
        comments,
    } }).json()
}