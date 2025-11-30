import { fetcher } from "@/lib/fetcher";
import { OwnerUserType } from "@/types/user";

export const getServiceAssignedOwners = async () => {
    return await fetcher.get<OwnerUserType[]>('owner/service').json()
}