import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { BasicUser } from "@/types/user";

export const getUserType = (session: any) => session?.user?.token?.user?.userType as string;
export const getUser = (session: any) => session?.user?.token?.user as BasicUser;

export const validUserTypeForPage = async (userPageType: string) => {
    const session = await auth()
    const userType = getUserType(session);

    if(userType !== userPageType) {
        redirect(`${userType}`);
    }

    return true;
}