"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

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
        <main className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="standard-h1 justify-center p-2">Welcome to King of Castrop Rauxel!</h1>
                <p className="pb-8 pt-4 text-muted-foreground">A game of skill and chance.</p>
                <Button onClick={() => handleClick(setShouldFetch)}
                        className="standard-button text-secondary standard-bg-gradient uppercase p-6 font-bold text-3xl">Play
                </Button>
            </div>
        </main>
    )
}

const handleClick = (
    setShouldFetch: (value: (((prevState: boolean) => boolean) | boolean)) => void
) => {
    setShouldFetch(true);
}
