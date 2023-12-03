import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import '@/styles/styles.css';
import React from "react";
import {CookiesProvider} from 'next-client-cookies/server';
import {WebResponseProvider} from "@/lib/context/web-response-context";
import {WebRequestProvider} from "@/lib/context/web-request-context";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'King of Castrop Rauxel',
    description: 'A game of skill and chance',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <CookiesProvider>
            <WebRequestProvider>
                <WebResponseProvider>
                    {children}
                </WebResponseProvider>
            </WebRequestProvider>
        </CookiesProvider>
        </body>
        </html>
    )
}
