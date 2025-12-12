export type DictionaryMap = {
    '': DashboardContentType,
    'connect': ConnectDictionaryType,
    'general': GeneralDictionaryType
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

export type GeneralDictionaryType = {
    menu: {
        "services": string
        "vehicles": string,
        "mechanics": string
        "operators": string
    }
}