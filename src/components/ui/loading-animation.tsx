export default function LoadingAnimation() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div
                className="w-full xl:w-2/3 2xl:w-1/2 3xl:w-full flex flex-col items-center justify-center p-24">
                <div className="flex justify-center items-center h-52">
                    <div className="flex justify-between items-center w-14">
                        <span className="ball bg-primary rounded-full w-4 h-4"></span>
                        <span className="ball bg-primary rounded-full w-4 h-4"></span>
                        <span className="ball bg-primary rounded-full w-4 h-4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}