import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {CookiesProvider} from 'next-client-cookies/server';

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
            {children}
        </CookiesProvider>
        </body>
        </html>
    )
}
