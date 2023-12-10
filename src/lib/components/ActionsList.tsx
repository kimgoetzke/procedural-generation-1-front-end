"use client";

import {Action} from "@/lib/models/WebResponse";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useWebRequest} from "@/lib/context/web-request-context";
import {WebRequest} from "@/lib/models/WebRequest";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

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
        <div className="standard-outer-padding">
            <Card className="standard-inner-padding">
                {actions.map((action: Action) => (
                    <div key={action.index} className="flex justify-between items-center">
                        <div className="flex-shrink-0 p-1 items-start">
                            <Button className="standard-button"
                                    onClick={() => handleClick(action.index, playerId, setWebRequest, setShouldFetch)}>
                                {action.index}
                            </Button>
                        </div>
                        <div className="flex-grow text-action pl-2 p-2">{action.name}</div>
                    </div>
                ))}
            </Card>
        </div>
    );
}

const handleClick = (
    index: number,
    playerId: string,
    setWebRequest: (value: (((prevState: WebRequest) => WebRequest) | WebRequest)) => void,
    setShouldFetch: (value: (((prevState: boolean) => boolean) | boolean)) => void
) => {
    setWebRequest({choice: index, playerId: playerId});
    setShouldFetch(true);
}