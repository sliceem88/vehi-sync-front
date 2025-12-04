'use client';

import { usePathname } from 'next/navigation';

import { DEFAULT_LANG_CODE } from "@/lib/helpers/lang";

export function useLocale() {
    const pathname = usePathname();

    if (!pathname) {
        return DEFAULT_LANG_CODE;
    }

    const segments = pathname.split('/').filter(Boolean);
    return segments[0] ?? DEFAULT_LANG_CODE;
}
