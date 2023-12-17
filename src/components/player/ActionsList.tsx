"use client";

import {Action, ViewType} from "@/lib/models/WebResponse";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useWebRequest} from "@/components/context/web-request-context";
import {WebRequest} from "@/lib/models/WebRequest";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ErrorResponse} from "@/lib/models/ErrorResponse";
import {handleError} from "@/lib/errorHandler";
import {useWebResponseStore} from "@/components/store/web-response-store";
import {ERROR_POST_PLAY} from "@/lib/constants";

export function ActionsList({actions, playerId, viewType}: Readonly<{
    actions: Action[],
    playerId: string
    viewType?: ViewType
}>) {
    const router = useRouter();
    const [webRequest, setWebRequest] = useWebRequest();
    const [shouldFetch, setShouldFetch] = useState(false);
    const [error, setError] = useState<ErrorResponse>();
    const {setWebResponse} = useWebResponseStore();

    useEffect(() => {
        if (shouldFetch) {
            fetch(`/api/play`, {
                method: 'POST',
                body: JSON.stringify(webRequest),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => handleError(res, setError, ERROR_POST_PLAY))
                .then(data => {
                    localStorage.setItem("webResponse", JSON.stringify(data));
                    setShouldFetch(false);
                    setWebResponse(data);
                });
        }
    }, [shouldFetch]);

    if (error) {
        router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
    }

    if (viewType === ViewType.DIALOGUE && actions.length === 0) {
        actions.push({index: 1, name: "Continue"});
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