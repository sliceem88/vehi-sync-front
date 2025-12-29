import { fetcher } from "@/lib/fetcher";
import { Vehicle } from "@/types/vehicle";

export const createVehicle = async (formData: FormData) => {
    return await fetcher.post('vehicle', { body: formData }).json();
}

export const getMyVehicles = async () => {
    return await fetcher.get<Vehicle[]>('vehicle/all').json()
}

export const deleteVehicle = async (vehicleId: string) => {
    return await fetcher.delete(`vehicle/${vehicleId}`).json();
}

export const editVehicle = async (formData: FormData,vehicleId :string) => {
    return await fetcher.put(`vehicle/${vehicleId}`, { body: formData }).json();
}