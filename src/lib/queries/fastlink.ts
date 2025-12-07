import { HTTPError } from "ky";

import { fetcher } from "@/lib/fetcher";
import { FastLinkResult } from "@/types/fastlink";
import { BasicUser } from "@/types/user";

export const getUserByFastLink = async (fastLink: string): Promise<FastLinkResult> => {
    try {
        const user = await fetcher.get(`fastlink/${fastLink}`).json<BasicUser>();
        return { success: true, user };
    }
    catch (err: unknown) {
        if (err instanceof HTTPError) {
            return { success: false, status: err.response.status };
        }
        return { success: false, status: 500 };
    }
}

export const usersConnect = async (fastLinkUserId: string) => {
    return await fetcher.post(`fastlink/connect/${fastLinkUserId}`).json()
}