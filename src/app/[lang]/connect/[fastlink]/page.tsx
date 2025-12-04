import { Card, CardBody } from "@heroui/react";
import { redirect } from "next/navigation";
import React from 'react';

import ConnectUsers from "@/app/[lang]/connect/[fastlink]/components/connectUsers";
import { auth } from "@/auth";
import { getUserByFastLink } from "@/lib/queries/fastlink";

const ConnectPage = async ({ params }: {params: Promise<{fastlink: string}>}) => {
    const session = await auth();

    if(!session) {
        redirect("/");
    }

    const { fastlink } = await params;
    const fastLinkUser = await getUserByFastLink(fastlink);
    // TODO: check if users already connected

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    ConnectPage
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <ConnectUsers fastLinkUser={ fastLinkUser }/>
                </CardBody>
            </Card>
        </div>
    );
};

export default ConnectPage;