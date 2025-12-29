import { VehicleTypeKey } from "./constants"

export type DictionaryMap = {
    '': DashboardContentType,
    'connect': ConnectDictionaryType,
    'general': GeneralDictionaryType,
    'owner/vehicles': OwnerVehicleDictionaryType
}

export type DictionaryBasicType<T> = {
    page: string
    content: T
}

export type DashboardContentType = {}

export type ConnectDictionaryType = {
    connectRequestText: string
    alreadyConnectedText: string
}

export type OwnerVehicleDictionaryType = {
    deleteModal: {
        deleteTooltip: string
    }
    editModal: OwnerVehicleModalDictionaryType,
    addModal: OwnerVehicleModalDictionaryType
    vehicleTypes: {
        [K in VehicleTypeKey]: string
    }
}

export type OwnerVehicleModalDictionaryType = {
    button: string
    buttonCancel: string
    buttonSubmit: string
    tooltip: string
    heading: string
    namePlaceholder: string
    name: string
    typePlaceholder: string
    type: string
    datePlaceholder: string
    date: string
    descriptionPlaceholder: string
    description: string
    imagePlaceholder: string
    image: string
}

export type GeneralDictionaryType = {
    menu: {
        "services": string
        "vehicles": string,
        "mechanics": string
        "operators": string
    }
}