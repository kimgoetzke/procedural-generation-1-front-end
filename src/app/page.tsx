"use client";

import React from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export default function Home() {
    const router = useRouter();

    const onClickPlay = () => {
        fetch(`/api/play`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("webResponse", JSON.stringify(data));
                router.replace('/play');
            })
    }

    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="standard-h1 justify-center p-2">
                    Welcome to
                    <span className="underline underline-offset-4">King of Castrop Rauxel</span>
                    !
                </h1>
                <p className="pt-4 text-muted-foreground">The web implementation of a text-based adventure.</p>
                <p className="pb-8 text-muted-foreground"> Explore a huge, procedurally generated world, complete
                    quests, and engage in combat to get stronger and gain loot.</p>
                <Button onClick={() => onClickPlay()}
                        className="standard-button text-secondary standard-bg-gradient uppercase p-6 font-bold text-3xl">
                    Play
                </Button>
            </div>
        </main>
    )
}
