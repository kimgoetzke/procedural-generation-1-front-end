import LoadingAnimation from "@/components/ui/loading-animation";

export default function Loading() {
    return (
        <div className="w-full flex min-h-screen flex-col items-center justify-start p-24">
            <LoadingAnimation/>
        </div>
    )
}