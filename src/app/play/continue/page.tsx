"use client";

import {DisplayPostWebResponse} from "@/lib/components/DisplayWebResponse";
import React, {useEffect} from "react";
import {WebResponse} from "@/lib/models/WebResponse";
import {useWebRequest} from "@/lib/context/web-request-context";
import {useWebResponse} from "@/lib/context/web-response-context";

export default function Continue() {
    const [webRequest,] = useWebRequest();
    const [webResponse, setWebResponse] = useWebResponse();

    useEffect(() => {
        const fetchData = async () => {
            console.log(`POST with ${JSON.stringify(webRequest)}`);
            await fetch(`/api/play`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(webRequest)
            })
                .then(r => r.json() as unknown as WebResponse)
                .then(data => setWebResponse(data));
        }
        fetchData().catch(e => console.log(e));
    }, [webRequest]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                <DisplayPostWebResponse webResponse={webResponse}/>
            </div>
        </main>
    )
}
