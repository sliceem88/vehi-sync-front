'use server';

import { actionHandler } from "@/lib/helpers/actionHandler";
import { getConstants } from "@/lib/queries/constant";

export const getConstantsAction = async () => {
    return actionHandler(async () => await getConstants())
}