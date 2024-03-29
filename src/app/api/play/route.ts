import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {toWebPlayer, WebPlayer} from "@/lib/models/WebPlayer";
import {WebResponse} from "@/lib/models/WebResponse";
import {WebRequest} from "@/lib/models/WebRequest";

export async function GET(): Promise<Response> {
    const cookie = cookies().get("webPlayer");
    console.log("Making GET /play request for " + (cookie ? `existing player (${cookie.value})` : 'new player'));

    // TODO: Make authenticated GET call to backend to get webResponse instead of using hardcoded credentials
    const base64Credentials = getCredentials();
    let response: Response;
    if (!cookie) {
        response = await fetch(`${process.env.BACKEND_URL}/api/play`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`
            }
        });
    } else {
        const webPlayer = JSON.parse(cookie.value) as WebPlayer;
        response = await fetch(`${process.env.BACKEND_URL}/api/play/${webPlayer.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`
            }
        });
    }

    return await handleBackendResponse(response);
}

export async function POST(request: Request): Promise<Response> {
    const requestBody = await request.json() as WebRequest;
    if (!requestBody.playerId) {
        console.log("No playerId in request body for POST /play, returning error...");
        return NextResponse.error();
    }

    console.log("Making POST /play request with body =", requestBody);
    // TODO: Make authenticated GET call to backend to get webResponse instead of using hardcoded credentials
    const base64Credentials = getCredentials();
    const response = await fetch(`${process.env.BACKEND_URL}/api/play`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Authorization': `Basic ${base64Credentials}`,
            'Content-Type': 'application/json'
        },
    });

    return await handleBackendResponse(response);
}

export const getCredentials = (): string => {
    const username = 'player1';
    const password = 'password';
    return Buffer.from(`${username}:${password}`).toString('base64');
};

const handleBackendResponse = async (response: Response) => {
    const data = await response.json();
    try {
        const webPlayer = toWebPlayer(data as WebResponse);
        cookies().set({
            name: 'webPlayer',
            value: JSON.stringify(webPlayer),
            httpOnly: false,
            path: '/',
        })
        return NextResponse.json(data);
    } catch (e) {
        console.log("Error handling backend response: ", data, response.status);
        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

const testBody = {
    "viewType": "ENCOUNTER_SUMMARY",
    "actions": [
        {
            "index": 1,
            "name": "Go to... (4 point(s) of interest)"
        },
        {
            "index": 2,
            "name": "Travel to Hylasoria (102 km south-east, unvisited) (Location)"
        },
        {
            "index": 3,
            "name": "Travel to Valthia (102 km south-west, unvisited) (Location)"
        },
        {
            "index": 4,
            "name": "Speak with Seti Tefnut (Dialogue)"
        },
        {
            "index": 5,
            "name": "Show debug menu"
        }
    ],
    "encounterSummary": {
        "playerHadInitiative": true,
        "playerHasWon": true,
        "enemiesDefeated": [
            {
                "name": "Large imp",
                "type": "IMP",
                "health": 0,
                "level": 1
            },
            {
                "name": "Purple imp",
                "type": "IMP",
                "health": 0,
                "level": 1
            }
        ],
        "attackers": [
            {
                "name": "player1",
                "type": "PLAYER",
                "health": 100,
                "level": 1
            }
        ],
        "defenders": [
            {
                "name": "Large imp",
                "type": "IMP",
                "health": 8,
                "level": 1
            },
            {
                "name": "Purple imp",
                "type": "IMP",
                "health": 10,
                "level": 1
            }
        ],
        "records": [
            {
                "attackerName": "player1",
                "damage": 1,
                "targetName": "Purple imp",
                "health": 9,
                "isAlive": true
            },
            {
                "attackerName": "Large imp",
                "damage": 1,
                "targetName": "player1",
                "health": 99,
                "isAlive": true
            },
            {
                "attackerName": "Purple imp",
                "damage": 1,
                "targetName": "player1",
                "health": 98,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 3,
                "targetName": "Purple imp",
                "health": 6,
                "isAlive": true
            },
            {
                "attackerName": "Large imp",
                "damage": 2,
                "targetName": "player1",
                "health": 96,
                "isAlive": true
            },
            {
                "attackerName": "Purple imp",
                "damage": 2,
                "targetName": "player1",
                "health": 94,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 1,
                "targetName": "Purple imp",
                "health": 5,
                "isAlive": true
            },
            {
                "attackerName": "Large imp",
                "damage": 1,
                "targetName": "player1",
                "health": 93,
                "isAlive": true
            },
            {
                "attackerName": "Purple imp",
                "damage": 1,
                "targetName": "player1",
                "health": 92,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 2,
                "targetName": "Purple imp",
                "health": 3,
                "isAlive": true
            },
            {
                "attackerName": "Large imp",
                "damage": 2,
                "targetName": "player1",
                "health": 90,
                "isAlive": true
            },
            {
                "attackerName": "Purple imp",
                "damage": 2,
                "targetName": "player1",
                "health": 88,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 3,
                "targetName": "Purple imp",
                "health": 0,
                "isAlive": false
            },
            {
                "attackerName": "Large imp",
                "damage": 0,
                "targetName": "player1",
                "health": 88,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 2,
                "targetName": "Large imp",
                "health": 6,
                "isAlive": true
            },
            {
                "attackerName": "Large imp",
                "damage": 1,
                "targetName": "player1",
                "health": 87,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 3,
                "targetName": "Large imp",
                "health": 3,
                "isAlive": true
            },
            {
                "attackerName": "Large imp",
                "damage": 2,
                "targetName": "player1",
                "health": 85,
                "isAlive": true
            },
            {
                "attackerName": "player1",
                "damage": 4,
                "targetName": "Large imp",
                "health": 0,
                "isAlive": false
            }
        ]
    },
    "interactions": [
        "Hey, sht! Come over here. I need you to do something for me.",
        "I need you to get this small parcel to Seti Tefnut at Thyrvera Field. Don't ask questions and I'll pay you well. You in?"
    ],
    "player": {
        "id": "PLA~PLAYER1@1277912753",
        "name": "player1",
        "locationName": "Thyrvera",
        "poiName": "Thyrvera Field",
        "x": 12779,
        "y": 12753,
        "gold": 100,
        "minDamage": 1,
        "maxDamage": 4,
        "health": 100,
        "maxHealth": 100,
        "experience": 0,
        "level": 1,
        "previousState": "AT_POI",
        "currentState": "AT_POI"
    }
};