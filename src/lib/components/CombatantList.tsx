import {Combatant} from "@/lib/models/WebResponse";
import {Card} from "@/components/ui/card";

export const CombatantList = ({combatants, title}: { combatants: Combatant[], title: string }) => (
    <div className="standard-outer-padding">
        <Card className="standard-inner-padding">
            <h3 className="standard-h2">{title}</h3>
            <ul className="pt-3">
                {combatants.map((combatant, index) => (
                    <li key={index} className="list-none pb-1.5">
                        <span className="text-highlight text-xs">{combatant.name.toUpperCase()}</span>
                        <span className="standard-list-item">{`: Level `}</span>
                        <span className="text-highlight text-xs">{combatant.level}</span>
                        <span className="standard-list-item">{`, `}</span>
                        <span className="text-highlight text-xs">{combatant.health}</span>
                        <span className="standard-list-item">{` HP`}</span>
                    </li>
                ))}
            </ul>
        </Card>
    </div>
);