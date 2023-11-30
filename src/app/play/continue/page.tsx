"use client";

import {DisplayResponse} from "@/app/components/display-response";
import {useWebRequest} from "@/app/common/hooks/use-web-request";
import {useSearchParams} from "next/navigation";

export default function Continue() {
    const searchParams = useSearchParams();
    const choice = searchParams.get('choice') as unknown as number;
    console.log("xxx choice =", choice);
    const {webResponse, isLoading, error} = useWebRequest(choice);
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                {DisplayResponse(error, isLoading, webResponse)}
            </div>
        </main>
    )
}
