'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { assignService, deleteAssignedService, getAllServices } from "@/lib/queries/services";

export const getAllServicesAction = async () => {
    return await getAllServices();
}
export const assignOwnerToServiceAction = async (serviceId: string) => {
    return actionHandler(async () => await assignService(serviceId))
}

export const deleteOwnerToServiceAction = async (serviceId: string) => {
    return actionHandler(async () => await deleteAssignedService(serviceId))
}