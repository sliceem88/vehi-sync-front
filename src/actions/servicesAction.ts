'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import {
    addMechanicToService,
    createServiceRespond,
    deleteAssignedService,
    getAllServices
} from "@/lib/queries/services";
import { ServiceRequestStatusType } from "@/types/serviceRequest";

export const getAllServicesAction = async () => {
    return await getAllServices();
}
// export const assignOwnerToServiceAction = async (serviceId: string) => {
//     return actionHandler(async () => await assignService(serviceId))
// }

export const deleteOwnerToServiceAction = async (serviceId: string) => {
    return actionHandler(async () => await deleteAssignedService(serviceId))
}

export const addMechanicToServiceAction = async (formData: FormData) => {
    return actionHandler(async () => await addMechanicToService(formData))
}

export const createServiceRespondAction = async (serviceRequestId: string,comment: string, status: ServiceRequestStatusType, successMessage?: string) => {
    return actionHandler(async () => await createServiceRespond(serviceRequestId, comment, status), successMessage)
}