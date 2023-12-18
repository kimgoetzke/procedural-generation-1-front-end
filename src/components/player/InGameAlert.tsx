import {
    AlertDialog, AlertDialogAction,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {FrontendError} from "@/lib/models/Error";
import React from "react";

export function InGameAlert(
    {error, setError}: Readonly<{
        error: FrontendError,
        setError: React.Dispatch<React.SetStateAction<FrontendError | undefined>>
    }>
) {
    return (
        <AlertDialog open={true} onOpenChange={() => setError(undefined)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Cannot complete action</AlertDialogTitle>
                    <AlertDialogDescription>
                        {error.description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}