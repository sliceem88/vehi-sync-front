import {fetcher} from "@/lib/fetcher";

export const createVehicle = async (formData: FormData) => {
    return await fetcher.post('vehicle', {body: formData}).json();
}

export const getMyVehicles = async () => {
    return await fetcher.get('vehicle/all').json()
}