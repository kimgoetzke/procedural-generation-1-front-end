'use client';

import React from 'react';
import {WebRequest} from "@/lib/models/WebRequest";

const WebRequestContext = React.createContext<
    [WebRequest, React.Dispatch<React.SetStateAction<WebRequest>>] | undefined
>(undefined);

export function WebRequestProvider({children}: Readonly<{ children: React.ReactNode }>) {
    const [webRequest, setWebRequest] = React.useState<WebRequest>({
        choice: 0,
        playerId: ''
    });
    return (
        <WebRequestContext.Provider value={[webRequest, setWebRequest]}>
            {children}
        </WebRequestContext.Provider>
    );
}

export function useWebRequest() {
    const context = React.useContext(WebRequestContext);
    if (context === undefined) {
        throw new Error('useWebRequest must be used within a WebRequestContext');
    }
    return context;
}