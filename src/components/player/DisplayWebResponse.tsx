import React from "react";
import {ViewType, WebResponse} from "@/lib/models/WebResponse";
import {ActionsList} from "@/components/player/ActionsList";
import {PlayerBar} from "@/components/player/PlayerBar";
import {Interactions} from "@/components/player/Interactions";
import {EncounterSummary} from "@/components/player/EncounterSummary";

export function DisplayWebResponse({webResponse}: Readonly<{ webResponse: WebResponse }>) {
    const playerId = webResponse.player.id;

    switch (webResponse.viewType) {
        case ViewType.DEFAULT:
            return (
                <div className="w-full">
                    <h2 className="standard-h4 flex justify-center">{webResponse.viewType}</h2>
                    <PlayerBar player={webResponse.player}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        case ViewType.ENCOUNTER_SUMMARY:
            return (
                <div className="w-full">
                    <h2 className="standard-h4 flex justify-center">{webResponse.viewType}</h2>
                    <PlayerBar player={webResponse.player}/>
                    <EncounterSummary encounterSummary={webResponse.encounterSummary}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        case ViewType.DIALOGUE:
            return (
                <div className="w-full">
                    <h2 className="standard-h4 flex justify-center">{webResponse.viewType}</h2>
                    <PlayerBar player={webResponse.player}/>
                    <Interactions interactions={webResponse.interactions}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        default:
            return ("Something went wrong.");
    }
}