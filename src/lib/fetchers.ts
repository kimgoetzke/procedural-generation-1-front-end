import {WebRequest} from "@/lib/models/WebRequest";

export function staticConfig() {
    return {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
        dynamic: 'force-static'
    };
}

export const getFetcher = async () => {
    const res = await fetch(`/api/play`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
};

export const postFetcher = (webRequest: WebRequest) => async () => {
    console.log("xxx postFetcher =", webRequest);
    const res = await fetch(`/api/play`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(webRequest)
    });
    return await res.json();
};