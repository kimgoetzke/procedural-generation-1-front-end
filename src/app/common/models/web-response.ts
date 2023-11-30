export type WebResponse = {
    viewType: ViewType;
    actions: Action[];
    encounterSummary: any;
    interactions: string[];
    player: Player;
}

export enum ViewType {
    DEFAULT = "DEFAULT",
    ENCOUNTER_SUMMARY = "ENCOUNTER_SUMMARY",
    DIALOGUE = "DIALOGUE",
}

export type Action = {
    index: number;
    name: string;
}

export type EncounterSummary = {
    playerHadInitiative: boolean;
    playerHasWon: boolean;
    enemiesDefeated: Combatant[];
    attackers: Combatant[];
    defenders: Combatant[];
    records: Record[];
}

export type Combatant = {
    name: string;
    type: string;
    health: number;
    level: number;
}

export type Record = {
    attackerName: string;
    damage: number;
    targetName: string;
    health: number;
    isAlive: boolean;
}

export type Player = {
    id: string
    name: string
    locationName: string
    poiName: string
    x: number
    y: number
    gold: number
    minDamage: number
    maxDamage: number
    health: number
    maxHealth: number
    experience: number
    level: number
    previousState: string
    currentState: string
}