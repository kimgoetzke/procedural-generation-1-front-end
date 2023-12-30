export type QuestLog = Quest[];

export type Quest = {
    about: string
    eventType: string
    eventState: string
    questGiver: {
        name: string
        location: string
        poi: string
    }
    questTarget: {
        name: string
        location: string
        poi: string
    }
}