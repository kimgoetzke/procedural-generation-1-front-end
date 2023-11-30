import {Player} from "@/app/common/models/web-response";
import '@/styles/styles.css';

export function DisplayPlayerBar({player}: Readonly<{ player: Player }>) {
    return (
        <div className="w-full mt-9">
            <div className="flex justify-center mb-2"><span
                className="heading-standard">{player.name.toUpperCase()}</span></div>
            <div className="w-full mb-2 border-t-4 border-natural-600"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center mb-2">
                <div className="text-non-field-values lg:text-left text-center">
                    <div>{`HEALTH POINTS`}</div>
                    <div className="text-field-values">{`${player.health} / ${player.maxHealth}`}</div>
                </div>
                <div className="text-non-field-values text-center">
                    <div>{`EXPERIENCE`}</div>
                    <div className="text-field-values">{player.experience}</div>
                </div>
                <div className="text-non-field-values text-center">
                    <div>{`LEVEL`}</div>
                    <div className="text-field-values">{player.level}</div>
                </div>
                <div className="text-non-field-values text-center">
                    <div>{`LOCATION`}</div>
                    <div>
                        {`(x: `}
                        <span className="text-field-values">{player.x}</span>
                        {`, y: `}
                        <span className="text-field-values">{player.y}</span>
                        <span>{`)`}</span>
                    </div>
                </div>
                <div className="text-non-field-values lg:text-right text-center">
                    <div>
                        <span className="text-field-values">{player.poiName}</span>
                        {`, `}
                        <span className="text-field-values">{player.locationName}</span></div>
                </div>
            </div>
            <div className="w-full mt-2 mb-9 border-b-4 border-natural-600"></div>
        </div>
    );
}