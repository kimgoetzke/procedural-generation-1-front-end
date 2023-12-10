"use client";

import '@/styles/styles.css';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const [shouldFetch, setShouldFetch] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (shouldFetch) {
            fetch(`/api/play`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("webResponse", JSON.stringify(data));
                    setShouldFetch(false);
                    router.replace('/play');
                })
        }
    }, [shouldFetch]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="flex-grow flex items-center justify-center lg:flex">
                <button onClick={() => handleClick(setShouldFetch)}
                        className="standard-button p-4 font-bold text-3xl">Play
                </button>
            </div>
        </main>
    )
}

const handleClick = async (
    setShouldFetch: (value: (((prevState: boolean) => boolean) | boolean)) => void
) => {
    setShouldFetch(true);
}
