import {WebResponse} from "@/lib/models/WebResponse";

export type WebPlayer = {
    id: string
    name: string
}

export const toWebPlayer = (webResponse: WebResponse): WebPlayer => {
    return {
        id: webResponse.player.id,
        name: webResponse.player.name
    }
}

