"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {ModeToggle} from "@/components/ui/mode-toggle";
import {Button} from "@/components/ui/button";
import {extractJson, handleError} from "@/lib/responseHandler";
import {ERROR_GET_QUEST_LOG} from "@/lib/constants";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {FrontendError} from "@/lib/models/Error";
import {QuestLog} from "@/lib/models/QuestLog";
import {QuestLogDrawer} from "../player/QuestLogDrawer";
import {useWebResponseStore} from "@/components/store/web-response-store";

export function NavBar() {
    const router = useRouter();
    const [error, setError] = useState<FrontendError>();
    const [questLog, setQuestLog] = useState<QuestLog>();
    const {webResponse} = useWebResponseStore();

    const onClickQuestLog = () => {
        console.log("Clicked 'Quest log' button");
        setQuestLog(undefined);
        fetch(`/api/quest-log`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => extractJson(res))
            .then(({res, json}) => handleError(res, json, setError, ERROR_GET_QUEST_LOG))
            .then(({res, json}) => {
                if (res.ok) {
                    setQuestLog(json as unknown as QuestLog);
                }
            });
    }

    if (error) {
        router.replace(`/error?code=${error.statusCode}&name=${error.name}&desc=${error.description}`);
    }

    return (
        <div
            className="sticky top-0 z-50 w-full flex border-b-accent border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
            <div className="flex flex-grow justify-start p-2">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-grow justify-center p-2">
                {webResponse != null /*&& Object.keys(webResponse).length !== 0*/ &&
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Button
                                    onClick={() => onClickQuestLog()}
                                    className='standard-button text-secondary standard-bg-gradient'>
                                    Quest log
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                }
            </div>
            <div className="flex flex-grow justify-end p-2">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <ModeToggle/>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {questLog && <QuestLogDrawer questLog={questLog}/>}
        </div>
    );
}