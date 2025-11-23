"use client";

import { useEffect, useState } from "react";

const PwaButton = () => {
    const [promptEvent, setPromptEvent] = useState(null);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setPromptEvent(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const installPWA = () => {
        if (!promptEvent) return;

        promptEvent.prompt();
        promptEvent.userChoice.finally(() => setPromptEvent(null));
    };

    return (
        <button
            onClick={ installPWA }
            disabled={ !promptEvent }
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