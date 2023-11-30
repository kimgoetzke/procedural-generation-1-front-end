"use client";

import '@/styles/styles.css';
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const handleClick = () => router.push('/play/start');

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="flex-grow flex items-center justify-center lg:flex">
                <button onClick={handleClick} className="standard-button p-4 font-bold text-3xl">Play</button>
            </div>
        </main>
    )
}
