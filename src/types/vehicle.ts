export type Vehicle = {
    id: string;
    name: string;
    type: string;
    description: string;
    images: { fileName: string};
    additionalInfo: any | null;
    createdAt: string;  // ISO timestamps
    updatedAt: string;
    userId: string;
    year: string;       // ISO date string
};
