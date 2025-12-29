import { VehicleTypeKey } from "@/types/constants";

export type Vehicle = {
    id: string;
    name: string;
    type: VehicleTypeKey;
    description: string;
    images: { fileName: string};
    additionalInfo: any | null;
    createdAt: string;
    updatedAt: string;
    userId: string;
    year: string;
};
