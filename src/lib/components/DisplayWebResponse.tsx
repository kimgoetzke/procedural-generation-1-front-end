import React from "react";
import {ViewType, WebResponse} from "@/lib/models/WebResponse";
import {ActionsList} from "@/lib/components/ActionsList";
import {PlayerBar} from "@/lib/components/PlayerBar";
import {Interactions} from "@/lib/components/Interactions";
import {EncounterSummary} from "@/lib/components/EncounterSummary";

export function DisplayWebResponse({webResponse}: {
    webResponse: WebResponse | undefined
}, error?: any, isLoading?: boolean) {
    return (
        <div className="w-full">
            {isLoading ? 'Loading...' :
                <>
                    {error && 'Failed to load'}
                    {webResponse && <Display webResponse={webResponse}/>}
                </>
            }
        </div>
    );
}

export function DisplayPostWebResponse({webResponse}: { webResponse: WebResponse }) {
    return (
        <div className="w-full">
            {webResponse ? <Display webResponse={webResponse}/> : 'Failed to load'}
        </div>
    );
}

const Display = ({webResponse}: { webResponse: WebResponse }) => {
    console.log(`Rendering DisplayContent for ${webResponse?.viewType}`);
    const playerId = webResponse.player.id;
    switch (webResponse.viewType) {
        case ViewType.DEFAULT:
            return (
                <div className="w-full">
                    <h2 className="text-xl text-gray-400 flex justify-center mb-3">{webResponse.viewType}</h2>
                    <PlayerBar player={webResponse.player}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        case ViewType.ENCOUNTER_SUMMARY:
            return (
                <div className="w-full">
                    <h2 className="text-xl text-gray-400 flex justify-center mb-3">{webResponse.viewType}</h2>
                    <PlayerBar player={webResponse.player}/>
                    <EncounterSummary encounterSummary={webResponse.encounterSummary}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        case ViewType.DIALOGUE:
            return (
                <div className="w-full">
                    <h2 className="text-xl text-gray-400 flex justify-center mb-3">{webResponse.viewType}</h2>
                    <PlayerBar player={webResponse.player}/>
                    <Interactions interactions={webResponse.interactions}/>
                    <ActionsList actions={webResponse.actions} playerId={playerId}/>
                </div>
            );
        default:
            return ("Something went wrong.");
    }
};
