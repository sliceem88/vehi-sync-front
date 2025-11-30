import { fetcher } from "@/lib/fetcher";
import { MechanicUserType } from "@/types/user";

export const getMechanicService = async () => {
    return await fetcher.get<MechanicUserType>('mechanic/service').json()
}