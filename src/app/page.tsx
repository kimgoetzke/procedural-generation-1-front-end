"use client";

import '@/styles/styles.css';
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="flex-grow flex items-center justify-center lg:flex">
                <Link href={'/play/start'} className="standard-button p-4 font-bold text-3xl">Play</Link>
            </div>
        </main>
    )
}
