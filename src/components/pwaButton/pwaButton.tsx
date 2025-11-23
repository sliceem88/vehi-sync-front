"use client";

type BeforeInstallPromptEvent = Event & {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

import { useEffect, useState } from "react";

const PwaButton = () => {
    const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            const event = e as BeforeInstallPromptEvent;
            event.preventDefault();
            setPromptEvent(event);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const installPWA = () => {
        if (!promptEvent) {
            return;
        }

        promptEvent.prompt();
        promptEvent.userChoice.finally(() => setPromptEvent(null));
    };

    return (
        <button
            onClick={ installPWA }
            // disabled={ !promptEvent }
            style={ {
                padding: "10px 20px",
                background: "#317EFB",
                color: "white",
                borderRadius: 8,
                cursor: "pointer",
                opacity: promptEvent ? 1 : 0.5,
            } }
        >
            Install PWA
        </button>
    );
}

export default PwaButton;