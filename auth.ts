import ky from "ky";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { AuthToken } from "@/types/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials): Promise<AuthToken> => {
                try {
                    const tokenData = await ky.post<AuthToken>(`${process.env.API_SERVICE_URL}/api/user/login`, { json : { email: credentials?.email, password: credentials?.password } }).json();

                    if (!tokenData?.token) {
                        throw new Error("Invalid credentials.")
                    }

                    return tokenData;
                }
                catch (e: unknown) {
                    throw new Error("Invalid credentials." + (e as { message: string}).message)
                }
            },
        }),
    ],
    callbacks:{
        async session({ token }) {
            // @ts-ignore
            return token.token!.user;
        },
        async jwt(params) {
            return params;
        },
    }
})