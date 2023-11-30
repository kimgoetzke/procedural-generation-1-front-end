import React from "react";
import {ViewType, WebResponse} from "@/app/common/models/web-response";
import {DisplayActions} from "@/app/components/display-actions";
import {DisplayPlayerBar} from "@/app/components/display-player-bar";

const DisplayContent = (webResponse: WebResponse) => {
    console.log("DisplayContent webResponse.viewType =", webResponse?.viewType);
    switch (webResponse.viewType) {
        case ViewType.DEFAULT:
            return (
                <div className="w-full">
                    <h2 className="text-xl text-gray-400 flex justify-center mb-3">{webResponse.viewType}</h2>
                    <DisplayPlayerBar player={webResponse.player}/>
                    <DisplayActions actions={webResponse.actions}/>
                    <pre>{JSON.stringify(webResponse, null, 2)}</pre>
                </div>
            );
        case ViewType.ENCOUNTER_SUMMARY:
            return (
                <div className="w-full">
                    <h2 className="text-4xl text-gray-600 font-black">{webResponse.viewType}</h2>
                    <pre>{JSON.stringify(webResponse.encounterSummary, null, 2)}</pre>
                </div>
            );
        case ViewType.DIALOGUE:
            return (
                <div className="w-full">
                    <h2 className="text-4xl text-gray-600 font-black">{webResponse.viewType}</h2>
                    <pre>{JSON.stringify(webResponse.interactions, null, 2)}</pre>
                </div>
            );
        default:
            return ("Something went wrong.");
    }
};

export function DisplayResponse(error: any, isLoading: boolean, webResponse: WebResponse) {
    return (
        <div className="w-full">
            {isLoading ? 'Loading...' :
                <>
                    {error && 'Failed to load'}
                    {webResponse && DisplayContent(webResponse)}
                </>
            }
        </div>
    );
}