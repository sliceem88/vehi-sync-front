import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/auth';
import { UserTypes } from "@/lib/constants";
import { ALLOWED_LANG_CODES, DEFAULT_LANG_CODE, getUrlWithLang } from "@/lib/helpers/lang";

export default async function proxy(request: NextRequest) {
    const segments = request.nextUrl.pathname.split('/').filter(Boolean);
    const lang = segments[0] ?? null;
    const userSegment = segments[1] ?? null;

    if (!lang || !ALLOWED_LANG_CODES.includes(lang)) {
        return NextResponse.redirect(
            new URL(getUrlWithLang('', DEFAULT_LANG_CODE), request.url)
        );
    }

    const session = await auth();

    console.log('#session#', session);

    if (!session && UserTypes.includes(userSegment)) {
        return NextResponse.redirect(new URL(getUrlWithLang('/login', lang), request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|.well-known|sw|manifest|.*\\.(?:jpeg|jpg|png)).*)'],
};