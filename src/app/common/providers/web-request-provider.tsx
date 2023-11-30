"use client";

import {WebRequestContext} from '@/app/common/context/web-request-context';
import {useWebRequest} from '@/app/common/hooks/use-web-request';
import React from "react";

export function WebRequestProvider({children}: { children: React.ReactNode }) {
    const webRequestResult = useWebRequest(-1);
    return (
        // @ts-ignore
        <WebRequestContext.Provider value={webRequestResult}>
            {children}
        </WebRequestContext.Provider>
    );
}