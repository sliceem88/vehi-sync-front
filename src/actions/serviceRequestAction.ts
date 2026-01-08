'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { assignOwnerToService } from "@/lib/queries/ownerToServiceRequest";

export const assignOwnerToServiceAction = async (serviceId: string, vehicleId: string, comments?: string) => {
    return actionHandler(async () => await assignOwnerToService(serviceId, vehicleId, comments))
}