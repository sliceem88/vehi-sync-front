'use server'

import { createVehicle, deleteVehicle } from "@/lib/queries/vehicle";

export const createVehicleAction = async (formData: FormData) => {
    const vehicle = await createVehicle(formData)
}

export const deleteVehicleAction = async (vehicleId: string) => {
    try {
        const vehicle = await deleteVehicle(vehicleId);
        return {
            status: true,
            message: "Vehicle deleted successfully",
            data: { vehicle }
        };
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            return {
                status: false,
                message: error.message,
                // No data field needed since it's optional
            };
        }

        return {
            status: false,
            message: "An unexpected error occurred",
        };
    }
}