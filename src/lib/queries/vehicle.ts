import { fetcher } from "@/lib/fetcher";
import { Vehicle } from "@/types/vehicle";

export const createVehicle = async (formData: FormData) => {
    return await fetcher.post('vehicle', { body: formData }).json();
}

export const getMyVehicles = async () => {
    return await fetcher.get<Vehicle[]>('vehicle/all').json()
}