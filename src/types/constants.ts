export type Constants = {
    accountTypes: ConstantItem<AccountTypeKey>[]
    vehicleTypes: ConstantItem<VehicleTypeKey>[]
    "serviceRequestStatus": [
        "pending",
        "approved",
        "declined"
    ]
}

export type AccountTypeKey =
    | 'operator'
    | 'owner'
    | 'service'
    | 'mechanic'

export type VehicleTypeKey =
    | 'velo'
    | 'moto'
    | 'light'
    | 'heavy'
    | 'tractor'
    | 'trailer'

export type ConstantItem<K extends string = string> = {
    key: K
    label: string
}