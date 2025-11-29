"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const PwaButton = () => {
    const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
    const [isPWA, setIsPWA] = useState<boolean>(false);

    useEffect(() => {
        const checkAndSetPWA = () => {
            const isInstalled = window.matchMedia('(display-mode: standalone)').matches
                || (window.navigator as any).standalone === true;

            requestAnimationFrame(() => setIsPWA(isInstalled));
        };

        checkAndSetPWA();

        const handler = (e: Event) => {
            const event = e as BeforeInstallPromptEvent;
            e.preventDefault();
            setPromptEvent(event);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const installPWA = async () => {
        if (!promptEvent) {
            return;
        }
        await promptEvent.prompt();
        await promptEvent.userChoice;
        setPromptEvent(null);
    };

    if (isPWA) {
        return null;
    }

    return (
        <button
            onClick={ installPWA }
            style={ {
                padding: "10px 20px",
                background: "#317EFB",
                color: "white",
                borderRadius: 8,
                cursor: "pointer",
                opacity: promptEvent ? 1 : 0.5,
            } }
            disabled={ !promptEvent }
        >
            <p>Install Mekko App</p>
            Mechanics ecosystem - keep, connect, operate
        </button>
    );
};

export default PwaButton;
