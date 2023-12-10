"use client";

import {DisplayWebResponse} from "@/lib/components/DisplayWebResponse";
import React from "react";

export default function Play() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div>
                <h1 className="text-4xl text-gray-600 font-black">King of Castrop Rauxel</h1>
            </div>
            <div className="w-full items-start text-sm lg:flex">
                <DisplayWebResponse/>
            </div>
        </main>
    )
}
