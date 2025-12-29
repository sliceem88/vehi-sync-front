'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { assignOwnerToService } from "@/lib/queries/ownerToServiceRequest";

export const assignOwnerToServiceAction = async (serviceId: string) => {
    return actionHandler(async () => await assignOwnerToService(serviceId))
}