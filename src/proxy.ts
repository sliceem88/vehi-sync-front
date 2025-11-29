import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/auth';
import { DEFAULT_LANG_CODE, getUrlWithLang } from "@/lib/helpers/lang";

export default async function proxy(request: NextRequest) {
    const session = await auth();
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const lang = segments[0];
    const url = request.url;

    if (!lang) {
        return NextResponse.redirect(
            new URL(getUrlWithLang('', DEFAULT_LANG_CODE), url)
        );
    }

    const loginUrl = getUrlWithLang('/login', lang);

    if (!session) {
        if (pathname !== loginUrl) {
            return NextResponse.redirect(new URL(loginUrl, url));
        }

        return NextResponse.next();
    }

    // @ts-ignore
    const userHome = getUrlWithLang(`/${session.userType}`, lang);

    if (pathname === userHome) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL(userHome, url));
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|.well-known|sw|manifest|.*\\.(?:jpeg|jpg|png)).*)'],
};