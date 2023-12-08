"use client";

import {DisplayWebResponse} from "@/lib/components/DisplayWebResponse";
import React, {useEffect} from "react";
import {WebResponse} from "@/lib/models/WebResponse";
import {useWebRequest} from "@/lib/context/web-request-context";
import {useWebResponse} from "@/lib/context/web-response-context";
import useSWR from "swr";
import {postFetcher, staticConfig} from "@/lib/fetchers";

export default function Continue() {
    const [webRequest,] = useWebRequest();
    const [webResponse, setWebResponse] = useWebResponse();
    const {data, error, isLoading} = useSWR([`/api/play`, webRequest], postFetcher(webRequest), staticConfig());

    useEffect(() => {
        if (data) {
            console.log("xxx =", data);
            setWebResponse(data as unknown as WebResponse);
        }
    }, [data, webRequest]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                {isLoading ? 'Loading...' : <DisplayWebResponse webResponse={webResponse}/>}
            </div>
        </main>
    )
}
