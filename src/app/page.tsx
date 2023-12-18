"use client";

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {FrontendError} from "@/lib/models/Error";
import {handleError, extractJson, updateLocalStorage} from "@/lib/responseHandler";
import {ERROR_GET_PLAY} from "@/lib/constants";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Home() {
    const router = useRouter();
    const [error, setError] = useState<FrontendError>();

    const onClickPlay = () => {
        console.log("Play clicked"); // TODO: Find out why button doesn't always react when clicked
        fetch(`/api/play`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => extractJson(res))
            .then(({res, json}) => handleError(res, json, setError, ERROR_GET_PLAY))
            .then(({res, json}) => updateLocalStorage(res, json))
            .then(({res, json}) => startGame(res, json, router));
    }

    if (error) {
        router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
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
};

const startGame = async (
    res: Response,
    json: JSON,
    router: AppRouterInstance
) => {
    if (res.ok) {
        router.replace('/play');
    }
    return {res, json};
};