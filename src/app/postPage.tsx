"use client";

import useSWR from 'swr'
import {WebResponse} from "@/app/common/models/web-response";

type FetchArgs = [input: RequestInfo, init?: RequestInit];

const fetcher = async () => {
    const res = await fetch(`/api/fake`);
    return await res.json();
};

export default function Home() {
    const {data, error} = useSWR('/api/fake', fetcher) as { data: WebResponse, error: any };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-center text-sm lg:flex">
                <div className="w-full">
                    {error && 'Failed to load'}
                    {!data && !error ? 'Loading...' :
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    }
                </div>
            </div>
        </main>
    )
}
