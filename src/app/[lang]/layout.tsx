import React from 'react';

import { dictionaryAction } from "@/actions/dictionaryAction";
import { auth } from "@/auth";
import QrBarCode from "@/components/qrBarCode/qrBarCode";
import Sidebar from "@/components/sidebar/sidebar";
import RegisterSW from "@/components/sw/register-sw";
import { getUser } from "@/lib/helpers/userType";

const MainLayout = async ({ children, params }: {children: React.ReactNode, params: Promise<{lang: string}>}) => {
    const { lang } = await params;
    const session = await auth()
    const user = getUser(session);
    const { content } = await dictionaryAction(lang, 'general');

    return (
        <div className="flex flex-row">
            <RegisterSW />
            <Sidebar lang={ lang } user={ user } dictionary={ content }/>
            <section className="w-full">
                { /*<TopNavigation lang={ lang } user={ user } dictionary={ content }/>*/ }
                { children }
                <div className='pb-3 pt-3 fixed bottom-0 left-0 w-full ml-[200px] border-t-1'>
                    { user && <QrBarCode fastLink={ user.fastLink }/> }
                </div>
            </section>
        </div>
    );
};

export default MainLayout;