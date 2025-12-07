import { Card, CardBody } from "@heroui/react";
import { redirect } from "next/navigation";
import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import ConnectUsers from "@/app/[lang]/connect/[fastlink]/components/connectUsers";
import { auth } from "@/auth";
import { getUserByFastLink } from "@/lib/queries/fastlink";
import { FastLinkResult } from "@/types/fastlink";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ConnectPage = async ({ params }: {params: Promise<{lang: string, fastlink: string}>}) => {
    const session = await auth();

    if(!session) {
        redirect("/");
    }

    const { fastlink, lang } = await params;
    const [{ content, page }, fastlinkResponse ] = await Promise.all([
        dictionaryAction(lang, 'connect'),
        getUserByFastLink(fastlink)
    ]);

    const fastlinkView = (fastlinkResponse: FastLinkResult) => {
        if (!fastlinkResponse.success) {
            return <p>{ content.alreadyConnectedText }</p>
        }

        return <ConnectUsers fastLinkUser={ fastlinkResponse.user } dictionary={ content }/>;
    }

    return (
        <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <Card>
                <CardBody className='px-4 py-6'>
                    { page }
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    { fastlinkView(fastlinkResponse) }
                </CardBody>
            </Card>
        </div>
    );
};

export default ConnectPage;