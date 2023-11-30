import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {ONE_DAY_IN_MILLISECONDS} from "@/app/common/constants";
import {toWebPlayer} from "@/app/common/models/web-player";
import {WebResponse} from "@/app/common/models/web-response";

const getCredentials = (): string => {
    const username = 'player1';
    const password = 'password';
    return Buffer.from(`${username}:${password}`).toString('base64');
};

export async function GET(request: Request): Promise<Response> {
    console.log("Making GET request");
    // TODO: Make authenticated GET call to backend to get webResponse
    // const base64Credentials = getCredentials();
    // const response = await fetch("http://localhost:8080/api/play", {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Basic ${base64Credentials}`
    //     }
    // });
    // const data = await response.json() as WebResponse;
    const data = body as WebResponse;
    const webPlayer = toWebPlayer(data);
    cookies().set({
        name: 'webPlayer',
        value: JSON.stringify(webPlayer),
        httpOnly: false,
        path: '/',
        expires: Date.now() + ONE_DAY_IN_MILLISECONDS
    })
    return NextResponse.json(data);
}

export async function POST(request: Request): Promise<Response> {
    console.log("Making POST request with body =", request.body);
    // TODO: Make authenticated GET call to backend to get webResponse
    // const base64Credentials = getCredentials();
    // const response = await fetch("http://localhost:8080/api/play", {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': `Basic ${base64Credentials}`
    //     },
    //     body: JSON.stringify(request.body)
    // });
    // const data = await response.json() as WebResponse;
    const data = body as WebResponse;
    const webPlayer = toWebPlayer(data);
    cookies().set({
        name: 'webPlayer',
        value: JSON.stringify(webPlayer),
        httpOnly: false,
        path: '/',
        expires: Date.now() + ONE_DAY_IN_MILLISECONDS
    })
    return NextResponse.json(data);
}

const body = {
    "viewType": "DEFAULT",
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
    "encounterSummary": null,
    "interactions": null,
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