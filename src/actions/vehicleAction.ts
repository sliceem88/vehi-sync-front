'use server'

import { actionHandler } from "@/lib/helpers/actionHandler";
import { createVehicle, deleteVehicle } from "@/lib/queries/vehicle";

export const createVehicleAction = async (formData: FormData) => {
    return await createVehicle(formData)
}

export const deleteVehicleAction = async (vehicleId: string) => {
    return actionHandler(async () => await deleteVehicle(vehicleId));
}