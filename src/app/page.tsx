"use client";

import {DisplayResponse} from "@/app/components/display-response";
import {useWebRequest} from "@/app/common/hooks/use-web-request";

export default function Home() {
    const {webResponse, isLoading, error} = useWebRequest();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-center text-sm lg:flex">
                {DisplayResponse(error, isLoading, webResponse)}
            </div>
        </main>
    )
}
