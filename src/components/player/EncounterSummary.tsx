import {EncounterSummary} from "@/lib/models/WebResponse";
import {CombatantList} from "@/components/player/CombatantList";
import {Card} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export function EncounterSummary({encounterSummary}: Readonly<{ encounterSummary: EncounterSummary }>) {
    return (
        <>
            <div className="w-full standard-outer-padding">
                <Card className="standard-inner-padding bg-accent-foreground">
                    <p className={`standard-p text-accent`}>
                        {`You ${encounterSummary.playerHadInitiative ? 'had' : 'did not have'} the initiative and ${encounterSummary.playerHasWon ? 'won' : 'lost'}.`}
                    </p>
                </Card>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1">
                    <CombatantList combatants={encounterSummary.attackers} title="Attackers"/>
                    <CombatantList combatants={encounterSummary.defenders} title="Defenders"/>
                    <CombatantList combatants={encounterSummary.enemiesDefeated} title="Enemies Defeated"/>
                </div>
                <div className="standard-outer-padding col-span-2">
                    <Card className="standard-inner-padding">
                        <h2 className="standard-h2">Encounter breakdown</h2>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Click to show/hide</AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        {encounterSummary.records.map((record, index) => (
                                            <li key={index} className="standard-list">
                                                <span className="standard-list-item">
                                                    {`${record.attackerName.toUpperCase()} attacked ${record.targetName.toUpperCase()}, causing `}
                                                </span>
                                                <span className="text-highlight">{record.damage}</span>
                                                <span className="standard-list-item">
                                                    {` damage - ${record.targetName.toUpperCase()} has `}
                                                </span>
                                                <span className="text-highlight">{record.health}</span>
                                                <span className="standard-list-item">{` health left`}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </div>
            </div>
        </>
    );
}