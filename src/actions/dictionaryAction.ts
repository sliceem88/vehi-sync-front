'use server';


import { DictionaryMap } from "@/types/dictionary";

export const dictionaryAction = async <K extends keyof DictionaryMap>(locale: string, path: K): Promise<{
    content: DictionaryMap[K]
}> => import(`../dictionaries/${path}/${locale}.json`).then((module) => module.default);