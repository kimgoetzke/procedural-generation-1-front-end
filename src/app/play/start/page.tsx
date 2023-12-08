"use client";

import {DisplayWebResponse} from "@/lib/components/DisplayWebResponse";
import {getFetcher, staticConfig} from "@/lib/fetchers";
import useSWR from "swr";
import {WebResponse} from "@/lib/models/WebResponse";
import {useWebResponse} from "@/lib/context/web-response-context";
import React, {useEffect} from "react";

const Start = () => {
    const [webResponse, setWebResponse] = useWebResponse();
    const {data, error, isLoading} = useSWR(`/api/play`, getFetcher, staticConfig());

    useEffect(() => {
        if (data && !webResponse) {
            setWebResponse(data as WebResponse);
        }
    }, [data]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                {isLoading ? 'Loading...' :
                    <>
                        {data && <DisplayWebResponse webResponse={data}/>}
                    </>
                }
            </div>
        </main>
    )
};
export default Start
