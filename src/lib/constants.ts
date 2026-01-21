import { ServiceRequestStatusType } from "@/types/serviceRequest";

export enum UserType {
    OPERATOR = 'operator',
    OWNER = 'owner',
    SERVICE = 'service',
    MECHANIC = 'mechanic',
}

export const UserTypes = ['operator', 'owner', 'service', 'mechanic'];

export const UsersType = {
    operator: 'Operator',
    owner: 'Owner',
    service: 'Service',
    mechanic: 'Mechanic',
}

export const ServiceRequestStatus: {
    key: ServiceRequestStatusType;
    value: ServiceRequestStatusType;
}[] = [
    { key: "pending", value: "pending" },
    { key: "approved", value: "approved" },
    { key: "declined", value: "declined" }
];