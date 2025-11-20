import ky from "ky";

import { auth } from "@/auth";

export const fetcher = ky.extend({
    prefixUrl: `${process.env.API_SERVICE_URL}/api`,
    hooks: {
        beforeRequest: [
            async request => {
                const session = await auth()
                // @ts-ignore
                request.headers.set('Authorization', `bearer ${(session?.token as string)}`);
            }
        ]
    }
});