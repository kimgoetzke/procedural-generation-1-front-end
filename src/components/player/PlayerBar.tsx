import {Player} from "@/lib/models/WebResponse";
import {Card} from "@/components/ui/card";

export function PlayerBar({player}: Readonly<{ player: Player }>) {
    const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === "dev";

    return (
        <div className="standard-outer-padding">
            <div className="w-full pt-6">
                <div className="flex justify-center mb-2">
                    <span className="player-heading">
                        {player.name.toUpperCase()}
                    </span>
                    <span className="text-muted-foreground font-light">
                        &nbsp;{isDevelopment ? "in development mode" : ""}
                    </span>
                </div>
                <Card className="standard-inner-padding border-muted">
                    <div className="grid grid-cols-1 lg:grid-cols-6 items-center">
                        <div className="standard-h3 lg:text-left text-center pb-2 lg:pb-0">
                            <div>{`Health Points`}</div>
                            <div className="text-highlight-player-bar">{`${player.health} / ${player.maxHealth}`}</div>
                        </div>
                        <div className="standard-h3 text-center pb-2 lg:pb-0">
                            <div>{`Experience`}</div>
                            <div className="text-highlight-player-bar">{player.experience}</div>
                        </div>
                        <div className="standard-h3 text-center pb-2 lg:pb-0">
                            <div>{`Level`}</div>
                            <div className="text-highlight-player-bar">{player.level}</div>
                        </div>
                        <div className="standard-h3 text-center pb-2 lg:pb-0">
                            <div>{`Gold`}</div>
                            <div className="text-highlight-player-bar">{player.gold}</div>
                        </div>
                        <div className="standard-h3 text-center pb-2 lg:pb-0">
                            <div>{`Location`}</div>
                            <div>
                                {`(x: `}
                                <span className="text-highlight-player-bar">{player.x}</span>
                                {`, y: `}
                                <span className="text-highlight-player-bar">{player.y}</span>
                                <span>{`)`}</span>
                            </div>
                        </div>
                        <div className="standard-h3 lg:text-right text-center pb-2 lg:pb-0">
                            <div>
                                <span className="text-highlight-player-bar">{player.poiName}</span>
                                {`, `}
                                <span className="text-highlight-player-bar">{player.locationName}</span></div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}