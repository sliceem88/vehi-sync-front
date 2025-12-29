import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { getUserType } from "@/lib/helpers/userType";

export default async function MainHomePage({ params }: { params: Promise<{ lang: string }> }) {
    const session = await auth();

    if (session) {
        const { lang } = await params;
        const userType = getUserType(session);

        redirect(`/${lang}/${userType}`);
    }

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-360 mx-auto w-full">
            <p> Main home page </p>
        </div>
    );
}
