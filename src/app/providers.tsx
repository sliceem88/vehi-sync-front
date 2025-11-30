'use client'

import { HeroUIProvider } from "@heroui/react";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(reg => {
                    if (reg.waiting) {
                        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                    }

                    reg.onupdatefound = () => {
                        const newWorker = reg.installing;

                        if(newWorker) {
                            newWorker.onstatechange = () => {
                                if (newWorker.state === 'installed') {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                }
                            };
                        }
                    };
                });
            });
        }
    }, []);

    return (
        <>
            <link rel="manifest" href="/manifest.json" crossOrigin='use-credentials' />
            <meta name="theme-color" content="#1C2534" />
            <HeroUIProvider>
                { children }
            </HeroUIProvider>
        </>
    )
}