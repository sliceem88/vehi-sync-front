import "./globals.css";

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";

import { Providers } from "./providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mekko",
    description: "Mechanics ecosystem - keep, connect, operate",
    manifest: "/manifest.json",
    icons: {
        icon: "/icon.png",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent"
    }
};

export function generateViewport() {
    return {
        viewport: {
            width: "device-width",
            initialScale: 1,
        },
        themeColor: "#1C2534", // Move your themeColor here
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light">
            <body className={ `${geistSans.variable} ${geistMono.variable}` }>
                <Providers>
                    { children }
                    <Toaster position="top-right" richColors/>
                </Providers>
            </body>
        </html>
    );
}
