import React from "react";
import {ViewType, WebResponse} from "@/lib/models/WebResponse";
import {ActionsList} from "@/components/player/ActionsList";
import {PlayerBar} from "@/components/player/PlayerBar";
import {Interactions} from "@/components/player/Interactions";
import {EncounterSummary} from "@/components/player/EncounterSummary";
import {ErrorPageUsingProps} from "@/app/error/page";
import LoadingAnimation from "@/components/ui/loading-animation";

export function DisplayWebResponse({webResponse}: Readonly<{ webResponse: WebResponse }>) {
    const player = webResponse.player;

    if (!player) {
        return <LoadingAnimation/>;
    }

    const playerId = player.id;

    switch (webResponse.viewType) {
        case ViewType.DEFAULT:
            return (
                <div className="w-full">
                    <PlayerBar player={webResponse.player}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        case ViewType.ENCOUNTER_SUMMARY:
            return (
                <div className="w-full">
                    <PlayerBar player={webResponse.player}/>
                    <EncounterSummary encounterSummary={webResponse.encounterSummary}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        case ViewType.DIALOGUE:
            return (
                <div className="w-full">
                    <PlayerBar player={webResponse.player}/>
                    <Interactions interactions={webResponse.interactions}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId} viewType={webResponse.viewType}/>
                </div>
            );
        default:
            return <ErrorPageUsingProps
                errorName="Unknown Lambda Error"
                errorCode="500"
                errorDescription="Unable to render the server response."/>;
    }
}
