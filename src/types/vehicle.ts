export type VehicleImage = {
    fieldName: string;
    clientName: string;
    size: number;
    type: string;
    extname: string;
    subtype: string;
    state: string;
    isValid: boolean;
    validated: boolean;
    errors: unknown[];
    meta: Record<string, unknown>;
} | null;

export type Vehicle = {
    id: string;
    name: string;
    type: string;
    description: string;
    images: VehicleImage;
    additionalInfo: any | null;
    createdAt: string;  // ISO timestamps
    updatedAt: string;
    userId: string;
    year: string;       // ISO date string
};
