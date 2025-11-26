import { UserType } from "@/lib/constants";

export type BasicUser = {
    id: string
    name: string
    surname: string
    email: string
    companyName: string | null
    description: string | null
    type: UserType
    bucket: string | null
    deletedAt: string | null
    createdAt: string
    updatedAt: string
}

export type ServiceUserType = {
    type: UserType.SERVICE
} & BasicUser

export type OperatorUserType = {
    type: UserType.SERVICE
} & BasicUser

export type MechanicUserType = {
    type: UserType.SERVICE
} & BasicUser

