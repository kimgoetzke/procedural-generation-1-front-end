"use client";

import {DisplayPostWebResponse} from "@/lib/components/DisplayWebResponse";
import {useEffect, useState} from "react";
import {WebResponse} from "@/lib/models/WebResponse";
import {useWebRequest} from "@/lib/context/web-request-context";

export default function Continue() {
    const [webRequest, setWebRequest] = useWebRequest();
    const [data, setData] = useState<WebResponse>();

    useEffect(() => {
        const fetchData = async () => {
            console.log(`xxx1 = ${JSON.stringify(webRequest)}`);
            await fetch(`/api/play`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(webRequest)
            })
                .then(r => r.json() as unknown as WebResponse)
                .then(data => setData(data));
        }
        fetchData().catch(e => console.log(e));
    }, [setData, webRequest]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                {DisplayPostWebResponse(data, setWebRequest)}
            </div>
        </main>
    )
}
