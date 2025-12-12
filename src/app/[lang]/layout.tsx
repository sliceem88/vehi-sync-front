import { Divider } from "@heroui/react";
import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import { auth } from "@/auth";
import TopNavigation from "@/components/nav/topNavigation";
import QrBarCode from "@/components/qrBarCode/qrBarCode";
import RegisterSW from "@/components/sw/register-sw";
import { getUser } from "@/lib/helpers/userType";

const MainLayout = async ({ children, params }: {children: React.ReactNode, params: Promise<{lang: string}>}) => {
    const { lang } = await params;
    const session = await auth()
    const user = getUser(session);
    const { content } = await dictionaryAction(lang, 'general');

    return (
        <section className="flex">
            <RegisterSW />
            <div className="w-full">
                <TopNavigation lang={ lang } user={ user } dictionary={ content }/>
                { children }
                <div className='pb-3'>
                    <Divider className="my-4" />
                    { user && <QrBarCode fastLink={ user.fastLink }/> }
                </div>
            </div>
        </section>
    );
};

export default MainLayout;