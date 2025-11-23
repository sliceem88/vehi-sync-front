'use client'

import { HeroUIProvider } from "@heroui/react";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js");
        }
    }, []);

    return (
        <>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#317EFB" />
            <HeroUIProvider>
                { children }
            </HeroUIProvider>
        </>
    )
}