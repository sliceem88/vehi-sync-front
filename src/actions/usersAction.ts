'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { usersConnect } from "@/lib/queries/fastlink";

export const usersConnectAction = async (fastLinkUserId: string) => {
    return actionHandler(async () => await usersConnect(fastLinkUserId), 'You are connected');
}
