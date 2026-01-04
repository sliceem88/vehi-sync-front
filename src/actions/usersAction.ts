'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { usersConnect } from "@/lib/queries/fastlink";
import { updateProfile } from "@/lib/queries/user";

export const usersConnectAction = async (fastLinkUserId: string) => {
    return actionHandler(async () => await usersConnect(fastLinkUserId), 'You are connected');
}

export const updateUserProfile = async (formData: FormData) => {
    return actionHandler(async () => await updateProfile(formData), 'You are connected');
}