"use client";

import {Action} from "@/lib/models/WebResponse";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useWebRequest} from "@/components/context/web-request-context";
import {WebRequest} from "@/lib/models/WebRequest";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ErrorResponse} from "@/lib/models/ErrorResponse";
import {handleResponse} from "@/lib/errorHandler";

export function ActionsList({actions, playerId}: Readonly<{
    actions: Action[],
    playerId: string
}>) {
    const router = useRouter();
    const [webRequest, setWebRequest] = useWebRequest();
    const [shouldFetch, setShouldFetch] = useState(false);
    const [error, setError] = useState<ErrorResponse>();

    useEffect(() => {
        if (shouldFetch) {
            fetch(`/api/play`, {
                method: 'POST',
                body: JSON.stringify(webRequest),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => handleResponse(res, setError))
                .then(data => {
                    localStorage.setItem("webResponse", JSON.stringify(data));
                    setShouldFetch(false);
                    router.refresh();
                })
        }
    }, [shouldFetch]);

    if (error) {
        router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
    }

    actions.forEach((action: Action) => {
        action.name = action.name.replace(/\x1B[[(?);]{0,2}(;?\d)*./g, '');
    });

    return (
        <div className="standard-outer-padding">
            <Card className="standard-inner-padding border-muted">
                {actions.map((action: Action) => (
                    <div key={action.index} className="flex justify-between items-center">
                        <div className="flex-shrink p-1 items-start">
                            <Button className="standard-button w-10 text-secondary font-black standard-bg-gradient"
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