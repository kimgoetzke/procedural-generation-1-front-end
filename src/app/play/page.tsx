"use client";

import {DisplayWebResponse} from "@/components/player/DisplayWebResponse";
import React, {useEffect, useState} from "react";
import {WebResponse} from "@/lib/models/WebResponse";
import Loading from "@/app/loading";

export default function Play() {
    const [webResponse, setWebResponse] = useState<WebResponse | undefined>(undefined);

    useEffect(() => {
        const storedResponse = localStorage.getItem("webResponse");
        const parsedResponse = JSON.parse(storedResponse ?? '{}') as WebResponse;
        setWebResponse(parsedResponse);
    }, []);

    return (
        <main className="flex flex-col items-center justify-start px-24 py-6">
            <div>
                <h1 className="standard-h1 py-1">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full xl:w-2/3 2xl:w-1/2 3xl:w-full items-start text-sm lg:flex">
                {webResponse ? <DisplayWebResponse webResponse={webResponse}/> : <Loading/>}
            </div>
        </main>
    )
}
