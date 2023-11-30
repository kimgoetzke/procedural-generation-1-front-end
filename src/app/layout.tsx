import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {CookiesProvider} from 'next-client-cookies/server';
import {WebRequestProvider} from "@/app/common/providers/web-request-provider";

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
                {children}
            </WebRequestProvider>
        </CookiesProvider>
        </body>
        </html>
    )
}
