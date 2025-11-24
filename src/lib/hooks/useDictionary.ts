import { useEffect, useState } from 'react';

import { dictionaryAction } from '@/actions/dictionaryAction';
import { getLocale } from "@/lib/helpers/lang";
import { DictionaryMap } from "@/types/dictionary";

export const useDictionary = <K extends keyof DictionaryMap>(
    path: K
): DictionaryMap[K] | undefined => {
    const [dictionary, setDictionary] = useState<DictionaryMap[K]>();

    useEffect(() => {
        (async () => {
            const locale = getLocale();
            const { content } = await dictionaryAction(locale, path);
            setDictionary(content as DictionaryMap[K]);
        })();
    }, [path]);

    return dictionary;
};