import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle} from "lucide-react";

export default function Loading() {
    return (
        <div className="w-full flex min-h-screen flex-col items-center justify-start p-24">
            <Alert>
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>Please wait</AlertTitle>
                <AlertDescription className="pt-4">
                    Content is being loaded. If this persists, please refresh the page.
                </AlertDescription>
            </Alert>
        </div>
    )
}