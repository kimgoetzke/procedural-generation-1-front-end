'use client';

import {AlertCircle} from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function ErrorPage() {
    const searchParams = useSearchParams()
    const errorCode = searchParams.get('code')
    const errorName = searchParams.get('name')
    const errorDescription = searchParams.get('desc')

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div
                className="w-full xl:w-2/3 2xl:w-1/2 3xl:w-full flex flex-col items-center justify-center p-24">
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>{errorName ?? "Unknown Error"} {errorCode}</AlertTitle>
                    <AlertDescription className="pt-4">
                        An error as occurred. Error
                        details: {errorDescription ?? "No error details have been provided."}
                    </AlertDescription>
                </Alert>
                <div className="py-4">
                    <Link className={buttonVariants({variant: "destructive"})} href="/">Home</Link>
                </div>
            </div>
        </div>
    )
}