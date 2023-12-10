import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import '@/styles/styles.css';
import React from "react";
import {CookiesProvider} from 'next-client-cookies/server';
import {WebRequestProvider} from "@/lib/context/web-request-context";
import {ThemeProvider} from "@/lib/theme-provider";
import {NavBar} from "@/components/ui/nav-bar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'King of Castrop Rauxel',
    description: 'A game of skill and chance',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <CookiesProvider>
                <NavBar/>
                <WebRequestProvider>
                    {children}
                </WebRequestProvider>
            </CookiesProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
