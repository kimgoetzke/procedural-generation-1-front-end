"use client";

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {ErrorResponse} from "@/lib/models/ErrorResponse";
import {handleError} from "@/lib/errorHandler";
import {ERROR_GET_PLAY} from "@/lib/constants";

export default function Home() {
    const router = useRouter();
    const [error, setError] = useState<ErrorResponse>();

    const onClickPlay = () => {
        console.log("Play clicked"); // TODO: Find out why button doesn't always react when clicked
        fetch(`/api/play`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => handleError(res, setError, ERROR_GET_PLAY))
            .then(res => {
                console.log("res " + JSON.stringify(res.status));
                if (!error) {
                    const data = res.json();
                    console.log("xxx " + JSON.stringify(data));
                    localStorage.setItem("webResponse", JSON.stringify(data));
                    router.replace('/play');
                } else {
                    router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
                }
            });
    }

    return (
        <main className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="standard-h1 justify-center p-2">
                    Welcome to <span className="underline underline-offset-4">
                    King of Castrop Rauxel</span>!
                </h1>
                <p className="pt-4 text-muted-foreground">The web interface for the text-based adventure game.</p>
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
