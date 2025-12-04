import { fetcher } from "@/lib/fetcher";
import { BasicUser } from "@/types/user";

export const getUserByFastLink = async (fastLink: string) => {
    return await fetcher.get<BasicUser>(`fastlink/${fastLink}`).json();
}

export const usersConnect = async (fastLinkUserId: string) => {
    return await fetcher.post(`fastlink/connect/${fastLinkUserId}`).json()
}