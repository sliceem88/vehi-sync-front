import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/auth';
import { DEFAULT_LANG_CODE, getUrlWithLang } from "@/lib/helpers/lang";

export default async function proxy(request: NextRequest) {
    const session = await auth();

    const langSegment = request.nextUrl.pathname.split('/').filter(Boolean);
    const lang = langSegment[0];

    if (!session && request.nextUrl.pathname !== getUrlWithLang('/login', lang)) {
        return NextResponse.redirect(new URL(getUrlWithLang('/login', lang), request.url));
    }

    if (session && request.nextUrl.pathname === getUrlWithLang('/login', lang)) {
        return NextResponse.redirect(new URL(getUrlWithLang('', lang), request.url));
    }

    if (!lang || typeof lang === 'undefined') {
        return NextResponse.redirect(new URL(getUrlWithLang('', DEFAULT_LANG_CODE), request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|.well-known|robots|sitemap|sw|service-worker|manifest|endpoint|.*\\.(?:jpeg|jpg|png)).*)'],
};