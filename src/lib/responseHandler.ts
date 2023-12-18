import {BackendError, backendErrorFrom, ErrorType, FrontendError, toFrontendError} from "@/lib/models/Error";
import {DEFAULT_ERROR} from "@/lib/constants";

export async function extractJson(
    res: Response,
) {
    try {
        const data = await res.json() as JSON;
        return {res, json: data};
    } catch (e) {
        const jsonError = backendErrorFrom(ErrorType.GENERIC, "Error parsing JSON response");
        return {res, json: jsonError};
    }
}

export async function handleError(
    res: Response,
    json: JSON,
    setError: (value: (((prevState: (FrontendError | undefined)) => (FrontendError | undefined)) | FrontendError | undefined)) => void,
    description?: string) {
    if (!res.ok) {
        const backendError = json as unknown as BackendError;
        let errorDescription: string;
        if (backendError.errorType === "IN_GAME") {
            errorDescription = backendError.errorMessage;
        } else {
            errorDescription = description && backendError.errorMessage
                ? `${description} ${backendError.errorMessage}.`
                : (description ?? backendError.errorMessage) || DEFAULT_ERROR;
        }
        const errorResponse = toFrontendError(res, backendError.errorType, errorDescription)
        setError(errorResponse);
        console.log("Error set: ", errorResponse)
    }
    return {res, json};
}

export async function updateLocalStorage(
    res: Response,
    json: JSON,
) {
    if (res.ok) {
        localStorage.setItem("webResponse", JSON.stringify(json));
    }
    return {res, json};
}