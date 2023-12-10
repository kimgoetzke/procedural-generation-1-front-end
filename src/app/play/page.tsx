"use client";

import {DisplayWebResponse} from "@/lib/components/DisplayWebResponse";
import React, {useEffect, useState} from "react";
import {WebResponse} from "@/lib/models/WebResponse";

export default function Play() {
    const [webResponse, setWebResponse] = useState<WebResponse | undefined>(undefined);

    useEffect(() => {
        const storedResponse = localStorage.getItem("webResponse");
        const parsedResponse = JSON.parse(storedResponse ?? '{}') as WebResponse;
        setWebResponse(parsedResponse);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                {webResponse ? <DisplayWebResponse webResponse={webResponse}/> : 'Loading...'}
            </div>
        </main>
    )
}
