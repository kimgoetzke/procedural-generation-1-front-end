import {WebResponse} from "@/app/common/models/web-response";

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

