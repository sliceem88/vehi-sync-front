import { useEffect, useState } from 'react';

import { dictionaryAction } from '@/actions/dictionaryAction';
import { useLocale } from "@/lib/hooks/useLocale";
import { DictionaryMap } from "@/types/dictionary";

export const useDictionary = <K extends keyof DictionaryMap>(
    path: K
): DictionaryMap[K] | undefined => {
    const [dictionary, setDictionary] = useState<DictionaryMap[K]>();
    const locale = useLocale();

    useEffect(() => {
        (async () => {
            const { content } = await dictionaryAction(locale, path);
            setDictionary(content as DictionaryMap[K]);
        })();
    }, [locale, path]);

    return dictionary;
};