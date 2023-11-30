import {Combatant} from "@/app/common/models/web-response";

export const CombatantList = ({combatants, title}: { combatants: Combatant[], title: string }) => (
    <div>
        <h3 className="heading-standard">{title}</h3>
        <ul className="pb-9">
            {combatants.map((combatant, index) => (
                <li key={index} className="list-none pb-1.5">
                    <span className="text-field-values-small">{combatant.name.toUpperCase()}</span>
                    <span className="text-list-item">{`: Level `}</span>
                    <span className="text-field-values-small">{combatant.level}</span>
                    <span className="text-list-item">{`, `}</span>
                    <span className="text-field-values-small">{combatant.health}</span>
                    <span className="text-list-item">{` HP`}</span>
                </li>
            ))}
        </ul>
    </div>
);