import { Divider } from "@heroui/react";
import React from 'react';

import QrBarCode from "@/components/qrBarCode/qrBarCode";

// TODO: rename to footer component
const Sidebar = async ({ fastLink }: {fastLink: string}) => {
    return (
        <>
            <Divider className="my-4" />
            <div className='flex flex-col items-center justify-center pb-2.5'>
                { fastLink && <QrBarCode fastLink={ fastLink }/> }
            </div>
        </>
    );
};

export default Sidebar;