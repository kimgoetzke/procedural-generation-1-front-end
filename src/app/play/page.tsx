"use client";

import {DisplayWebResponse} from "@/components/player/DisplayWebResponse";
import React, {useEffect} from "react";
import {WebResponse} from "@/lib/models/WebResponse";
import Loading from "@/app/loading";
import {useWebResponseStore} from "@/components/store/web-response-store";

export default function Play() {
    const {webResponse, setWebResponse} = useWebResponseStore();

    useEffect(() => {
        const storedResponse = localStorage.getItem("webResponse");
        if (storedResponse) {
            const parsedResponse = JSON.parse(storedResponse) as WebResponse;
            setWebResponse(parsedResponse);
        }
    }, []);

    return (
        <main className="flex flex-col items-center justify-start px-24 py-6">
            <div className="w-full xl:w-2/3 2xl:w-1/2 3xl:w-full items-start text-sm lg:flex">
                {webResponse ? <DisplayWebResponse webResponse={webResponse}/> : <Loading/>}
            </div>
        </main>
    )
}
