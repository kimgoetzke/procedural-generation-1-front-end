export type WebResponse = {
    viewType: ViewType;
    actions: Action[];
    encounterSummary: any;
    interactions: any;
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