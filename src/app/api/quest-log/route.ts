import {cookies} from "next/headers";
import {WebPlayer} from "@/lib/models/WebPlayer";
import {getCredentials} from "@/app/api/play/route";
import {NextResponse} from "next/server";

export async function GET(): Promise<Response> {
    const cookie = cookies().get("webPlayer");
    console.log("Making GET /play/{playerId}/quest-log request " + (
        cookie ? `for ${cookie.value}` : 'but webPlayer cookie is not present'
    ));

    // TODO: Make authenticated GET call to backend to get webResponse
    const base64Credentials = getCredentials();
    let response: Response;
    if (!cookie) {
        console.log("No playerId in request body for POST /play, returning error...");
        return NextResponse.error();
    } else {
        const webPlayer = JSON.parse(cookie.value) as WebPlayer;
        response = await fetch(`${process.env.BACKEND_URL}/api/play/${webPlayer.id}/quest-log`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`
            }
        });
    }

    return response;
    // return NextResponse.json(body);
}

const body = [
    {
        "about": "a delivery",
        "eventType": "REACH",
        "eventState": "ACTIVE",
        "questGiver": {
            "name": "Akhenaten Utu",
            "location": "Thyrvera",
            "poi": "Palace of Akhenaten"
        },
        "questTarget": {
            "name": "Seti Tefnut",
            "location": "Thyrvera",
            "poi": "Thyrvera Field"
        }
    },
    {
        "about": "a kill quest",
        "eventType": "DEFEAT",
        "eventState": "ACTIVE",
        "questGiver": {
            "name": "Akhenaten Utu",
            "location": "Thyrvera",
            "poi": "Palace of Akhenaten"
        },
        "questTarget": {
            "name": "Seti Tefnut",
            "location": "Thyrvera",
            "poi": "Thyrvera Field"
        }
    },
    {
        "about": "another delivery",
        "eventType": "REACH",
        "eventState": "COMPLETED",
        "questGiver": {
            "name": "Akhenaten Utu",
            "location": "Thyrvera",
            "poi": "Palace of Akhenaten"
        },
        "questTarget": {
            "name": "Seti Tefnut",
            "location": "Thyrvera",
            "poi": "Thyrvera Field"
        }
    }
];