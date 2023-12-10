"use client";

import {Action} from "@/lib/models/WebResponse";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useWebRequest} from "@/lib/context/web-request-context";
import {WebRequest} from "@/lib/models/WebRequest";

export function ActionsList({actions, playerId}: Readonly<{
    actions: Action[],
    playerId: string
}>) {
    const [webRequest, setWebRequest] = useWebRequest();
    const [shouldFetch, setShouldFetch] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (shouldFetch) {
            fetch(`/api/play`, {
                method: 'POST',
                body: JSON.stringify(webRequest),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("webResponse", JSON.stringify(data));
                    setShouldFetch(false);
                    router.refresh();
                })
        }
    }, [shouldFetch]);

    return (
        <ul className="list-none text-left">
            {actions.map((action: Action) => (
                <li key={action.index} className="mb-2">
                    <button onClick={() => handleClick(action.index, playerId, setWebRequest, setShouldFetch)}
                            className="font-bold text-lg w-8 h-8 mr-2 standard-button">{action.index}</button>
                    <span className="text-action">{action.name}</span>
                </li>
            ))}
        </ul>
    );
}

const handleClick = async (
    index: number,
    playerId: string,
    setWebRequest: (value: (((prevState: WebRequest) => WebRequest) | WebRequest)) => void,
    setShouldFetch: (value: (((prevState: boolean) => boolean) | boolean)) => void
) => {
    setWebRequest({choice: index, playerId: playerId});
    setShouldFetch(true);
}