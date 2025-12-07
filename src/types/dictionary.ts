export type DictionaryMap = {
    '': DashboardContentType,
    'connect': ConnectDictionaryType
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