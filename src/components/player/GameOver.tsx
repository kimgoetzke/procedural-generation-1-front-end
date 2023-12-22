import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {extractJson, handleError, updateLocalStorage} from "@/lib/responseHandler";
import {ERROR_GET_PLAY} from "@/lib/constants";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {FrontendError} from "@/lib/models/Error";
import {Frown} from "lucide-react";
import {deleteWebPlayerCookie} from "@/lib/cookieUtils";
import {useWebResponseStore} from "@/components/store/web-response-store";

export function GameOver() {
    const router = useRouter();
    const [error, setError] = useState<FrontendError>();
    const {setWebResponse} = useWebResponseStore();

    const onClickPlay = () => {
        console.log("Clicked 'Play' button");
        deleteWebPlayerCookie()
            .then(() => {
                fetch(`/api/play`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => extractJson(res))
                    .then(({res, json}) => handleError(res, json, setError, ERROR_GET_PLAY))
                    .then(({res, json}) => updateLocalStorage(res, json))
                    .then(({res, json}) => {
                        if (res.ok) {
                            setWebResponse(json);
                        }
                    });
            });
    }

    const onClickBackHome = () => {
        console.log("Clicked 'Back Home' button");
        deleteWebPlayerCookie()
            .then(() => {
                setWebResponse(undefined);
                localStorage.removeItem("webResponse");
                router.replace('/');
            });
    }

    if (error) {
        router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
    }

    return (
        <div className="standard-outer-padding">
            <Card className="border-muted">
                <CardHeader>
                    <CardTitle>Game over&nbsp;&nbsp;<Frown className="h-6 w-6 inline"/></CardTitle>
                    <CardDescription>This game is over. Try again by starting a new game.</CardDescription>
                </CardHeader>
                <CardFooter className="justify-end">
                    <div>
                        <Button onClick={() => onClickPlay()} className="standard-button standard-bg-gradient">
                            New game
                        </Button>
                    </div>
                    <div className="pl-3">
                        <Button onClick={() => onClickBackHome()} className="standard-button">
                            Back home
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}