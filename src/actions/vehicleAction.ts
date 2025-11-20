'use server'

import { createVehicle } from "@/lib/queries/vehicle";

export const createVehicleAction = async (formData: FormData) => {
    const vehicle = await createVehicle(formData)
    console.log('###', vehicle);
}