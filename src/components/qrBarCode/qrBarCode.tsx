'use client';

import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";

import { useLocale } from "@/lib/hooks/useLocale";

// TODO: convert to server components
const QrBarCode = ({ fastLink }: {fastLink: string}) => {
    const [fullUrl, setFullUrl] = useState<string | null>(null);
    const locale = useLocale();

    useEffect(() => {
        setFullUrl(`${window.location.origin}/${locale}/connect/${fastLink}`);
    }, [fastLink, locale]);

    if (!fullUrl) {
        return null;
    }

    return (
        <div className="flex flex-row items-center justify-center w-full">
            <div>
                Your QR code to connect
                <div style={ { height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" } }>
                    <QRCode
                        size={ 256 }
                        style={ { height: "auto", maxWidth: "100%", width: "100%" } }
                        viewBox={ `0 0 256 256` }
                        value={ fullUrl }
                    />
                </div>
            </div>
            <div>
                <p className='text-center'>Or send direct link:</p>
                <a href={ fullUrl }>{ fullUrl }</a>
            </div>
        </div>
    );
};

export default QrBarCode;