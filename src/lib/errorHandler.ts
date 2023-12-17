import {ErrorResponse, toErrorResponse} from "@/lib/models/ErrorResponse";
import {DEFAULT_ERROR} from "@/lib/constants";

export function handleError(
    res: Response,
    setError: (value: (((prevState: (ErrorResponse | undefined)) => (ErrorResponse | undefined)) | ErrorResponse | undefined)) => void,
    description?: string,
) {
    if (!res.ok) {
        console.log("Error in response, setting error now: ", res);
        const modifiedDescription = res.statusText?.toString().concat(". ", description ?? DEFAULT_ERROR);
        setError(toErrorResponse(res, modifiedDescription));
    }
    return res;
}