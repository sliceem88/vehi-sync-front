import { AuthToken } from "@/types/auth";

declare module "next-auth" {
    interface Session {
        user: AuthToken;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        token?: {
            user: AuthToken;
        };
    }
}

// next-auth.d.ts
// import { DefaultSession } from "next-auth";
//
// declare module "next-auth" {
//     interface Session extends DefaultSession {
//         user: DefaultSession["user"] & {
//             id?: string;
//             // add more user fields here
//         } | null;
//         accessToken?: string | null;
//     }
//
//     interface User {
//         token: {
//             user: Session["user"];
//         };
//     }
// }
//
// declare module "next-auth/jwt" {
//     interface JWT {
//         user?: Session["user"];
//         accessToken?: string;
//     }
// }
