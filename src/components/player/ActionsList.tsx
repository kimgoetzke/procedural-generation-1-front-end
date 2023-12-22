"use client";

import {Action} from "@/lib/models/WebResponse";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useWebRequest} from "@/components/context/web-request-context";
import {WebRequest} from "@/lib/models/WebRequest";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ErrorType, FrontendError} from "@/lib/models/Error";
import {extractJson, handleError, updateLocalStorage} from "@/lib/responseHandler";
import {useWebResponseStore} from "@/components/store/web-response-store";
import {ERROR_POST_PLAY} from "@/lib/constants";
import {InGameAlert} from "@/components/player/InGameAlert";

export function ActionsList({actions, playerId}: Readonly<{
    actions: Action[],
    playerId: string
}>) {
    const router = useRouter();
    const [webRequest, setWebRequest] = useWebRequest();
    const [shouldFetch, setShouldFetch] = useState(false);
    const [error, setError] = useState<FrontendError>();
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
                .then(res => extractJson(res))
                .then(({res, json}) => handleError(res, json, setError, ERROR_POST_PLAY))
                .then(({res, json}) => updateLocalStorage(res, json))
                .then(({res, json}) => {
                    setShouldFetch(false);
                    if (res.ok) {
                        setWebResponse(json);
                    }
                });
        }
    }, [shouldFetch]);

    if (error?.errorType === ErrorType.GENERIC) {
        router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
    } else if (error?.errorType === ErrorType.IN_GAME) {
        return <InGameAlert error={error} setError={setError}/>;
    }

    return (
        <div className="standard-outer-padding">
            <Card className="standard-inner-padding border-muted">
                {actions.map((action: Action) => (
                    <div key={action.index} className="flex justify-between items-center">
                        <div className="flex-shrink p-1 items-start">
                            <Button className="standard-button w-10 text-secondary standard-bg-gradient"
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
    console.log(`Selected action: ${index}`);
    setWebRequest({choice: index, playerId: playerId});
    setShouldFetch(true);
};