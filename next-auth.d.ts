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