'use server'

import { getAllServices } from "@/lib/queries/services";

export const getAllServicesAction = async () => {
    return await getAllServices();
}