import { VehicleTypeKey } from "./constants"

export type DictionaryMap = {
    '': DashboardContentType,
    'connect': ConnectDictionaryType,
    'general': GeneralDictionaryType,
    'owner/vehicles': OwnerVehicleDictionaryType,
    'owner/service': OwnerServiceDictionaryType,
    'service/owners': ServiceOwnerDictionaryType,
    'service/jobs': ServiceJobsType
}

export type ServiceJobsType = {
    createForm: {
        title: string,
        createButton: string
        cancelButton: string
        submitButton: string
        newOwner: string
        jobDate: string
        ownerSelect: string
        ownerSelectPlaceholder: string
        vehicleSelect: string
        vehicleSelectPlaceholder: string
        addVehicle: string
        statuses: {
            title: string
            inProgress: string
            onHold: string
            completed: string
            new: string
        }
        "taskDescription": string
        "taskDescriptionPlaceholder": string
        "mechanicSelect": string
        "mechanicSelectPlaceholder": string
    }
    pendingForm: {
        heading: string
    }
    finishedForm: {
        heading: string
    }
    createOwnerForm: {
        title: string,
        cancelButton: string
        submitButton: string
        email: string
        emailPlaceholder: string
        emailMinCharMessage: string
        toastSuccessMessage: string
        toastErrorMessage: string
    }
}

export type ServiceOwnerDictionaryType = {
    status: string
    requestCard: {
        ownerComment: string
        vehicleData: string
        vehicleType: string
    }
    modal: {
        title: string
        comment: string
        status: string
        submitButton: string
        cancelButton: string
        statuses: {
            approved: string
            declined: string
            pending: string
        }
        statusError: string
        toastMessage: string
    }
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

export type OwnerServiceDictionaryType = {
    tabs: {
        step1: string
        step1Info: string
        step2: string
        step2Info: string
        step3: string
        step3Info: string
        resetButton: string
        submitButton: string
    }
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
        services: string
        vehicles: string,
        mechanics: string
        operators: string
        owners: string
        profile: string
        dashboard: string
        jobs: string
    },
    profile: {
        title: string,
        description: string,
        name: string,
        surname: string,
        type: string,
        fastlink: string,
        company: string,
        updateButton: string,
        userType: {
            owner: string
            service: string
            operator: string
            mechanic: string
        }
    }
    serviceRequestStatus: {
        pending: string,
        approved: string
        declined: string
    }
}