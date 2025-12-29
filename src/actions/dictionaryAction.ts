import { DictionaryBasicType, DictionaryMap } from "@/types/dictionary";

export const dictionaryAction = async <K extends keyof DictionaryMap>(locale: string, path: K): Promise<DictionaryBasicType<DictionaryMap[K]>> => import(`../dictionaries/${path}/${locale}.json`).then((module) => module.default);
