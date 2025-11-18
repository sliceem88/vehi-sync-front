import type {Metadata} from "next";

import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

import {Providers} from "./providers";

import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Next.js PWA',
    description: 'A Progressive Web App built with Next.js',
    themeColor: '#000000',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'NextPWA'
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="apple-touch-icon" href="/icon-192x192.png" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>

            {children}
        </Providers>
        </body>
        </html>

    );
}
