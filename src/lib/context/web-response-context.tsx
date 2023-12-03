'use client';

import React from 'react';
import {ViewType, WebResponse} from "@/lib/models/WebResponse";

const WebResponseContext = React.createContext<
    [WebResponse, React.Dispatch<React.SetStateAction<WebResponse>>] | undefined
>(undefined);

export function WebResponseProvider({children}: Readonly<{ children: React.ReactNode }>) {
    const [webResponse, setWebResponse] = React.useState<WebResponse>({
        viewType: ViewType.DEFAULT,
        actions: [],
        encounterSummary: {
            playerHadInitiative: false,
            playerHasWon: false,
            enemiesDefeated: [],
            attackers: [],
            defenders: [],
            records: []
        },
        interactions: [],
        player: {
            id: "",
            name: "",
            locationName: "",
            poiName: "",
            x: 0,
            y: 0,
            gold: 0,
            minDamage: 0,
            maxDamage: 0,
            health: 0,
            maxHealth: 0,
            experience: 0,
            level: 0,
            previousState: "",
            currentState: ""
        },
    });
    return (
        <WebResponseContext.Provider value={[webResponse, setWebResponse]}>
            {children}
        </WebResponseContext.Provider>
    );
}

export function useWebResponse() {
    const context = React.useContext(WebResponseContext);
    if (context === undefined) {
        throw new Error('useWebResponse must be used within a WebResponseContext');
    }
    return context;
}