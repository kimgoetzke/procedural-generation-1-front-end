import {EncounterSummary} from "@/app/common/models/web-response";
import '@/styles/styles.css';
import {CombatantList} from "@/app/components/combatant-list";

export function DisplayEncounterSummary({encounterSummary}: Readonly<{ encounterSummary: EncounterSummary }>) {
    return (
        <>
            <div className="w-full bg-neutral-300 rounded-2xl p-4 mb-9">
                <p className={`standard-text col-span-3`}>
                    {`You ${encounterSummary.playerHadInitiative ? 'had' : 'did not have'} the initiative and ${encounterSummary.playerHasWon ? 'won' : 'lost'}.`}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 pb-9">
                <div className="col-span-1 pr-9">
                    <CombatantList combatants={encounterSummary.attackers} title="Attackers"/>
                    <CombatantList combatants={encounterSummary.defenders} title="Defenders"/>
                    <CombatantList combatants={encounterSummary.enemiesDefeated} title="Enemies Defeated"/>
                </div>
                <div className="col-span-2">
                    <h3 className="standard-heading">Encounter breakdown</h3>
                    <ul>
                        {encounterSummary.records.map((record, index) => (
                            <li key={index} className="list-disc list-inside">
                            <span
                                className="standard-list-item">{`${record.attackerName.toUpperCase()} attacked ${record.targetName.toUpperCase()}, causing `}</span>
                                <span className="text-field-values-small">{record.damage}</span>
                                <span
                                    className="standard-list-item">{` damage - ${record.targetName.toUpperCase()} has `}</span>
                                <span className="text-field-values-small">{record.health}</span>
                                <span className="standard-list-item">{` health left`}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}