import useSWR from "swr";
import {WebRequest} from "@/app/common/models/web-request";
import {WebResponse} from "@/app/common/models/web-response";
import {useCookies} from 'next-client-cookies';
import {WebPlayer} from "@/app/common/models/web-player";

export const revalidate = false;
export const dynamic = 'force-static';

const getFetcher = async () => {
    const res = await fetch(`/api/play`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
};

const postFetcher = async (webRequest: WebRequest) => {
    const res = await fetch(`/api/play`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(webRequest)
    });
    return await res.json();
};

export function useWebRequest(choice?: number | undefined) {
    const cookies = useCookies();
    const webPlayer = cookies.get('webPlayer') as unknown as WebPlayer;
    console.log("useWebRequest() >> webPlayer =", webPlayer);
    const {
        data: postData,
        error: postError,
        isLoading: postLoading
    } = useSWR(webPlayer ? `/api/play/${webPlayer.id}` : null, postFetcher, {});
    const {
        data: getData,
        error: getError,
        isLoading: getLoading
    } = useSWR(!webPlayer ? `/api/play` : null, getFetcher, {});
    return {
        webResponse: webPlayer ? postData as WebResponse : getData as WebResponse,
        isLoading: webPlayer ? postLoading : getLoading,
        error: webPlayer ? postError : getError
    };
}