'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { createVehicle, deleteVehicle, editVehicle } from "@/lib/queries/vehicle";

export const createVehicleAction = async (formData: FormData) => {
    return actionHandler(async () => await createVehicle(formData));
}

export const deleteVehicleAction = async (vehicleId: string) => {
    return actionHandler(async () => await deleteVehicle(vehicleId));
}

export const editVehicleAction = async (formData: FormData, vehicleId: string) => {
    return actionHandler(async () => await editVehicle(formData, vehicleId));
}