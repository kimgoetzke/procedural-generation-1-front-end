import {AlertCircle} from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-start p-24">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>404</AlertTitle>
                <AlertDescription className="pt-4">
                    This page does not exist.
                </AlertDescription>
            </Alert>
            <div className="py-4">
                <Link className={buttonVariants({variant: "destructive"})} href="/">Home</Link>
            </div>
        </div>
    )
}