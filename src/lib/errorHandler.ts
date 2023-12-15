import {ErrorResponse, toErrorResponse} from "@/lib/models/ErrorResponse";
import {ERROR_STARTING_GAME} from "@/lib/constants";

export function handleResponse(
    res: Response,
    setError: (value: (((prevState: (ErrorResponse | undefined)) => (ErrorResponse | undefined)) | ErrorResponse | undefined)) => void
) {
    if (!res.ok) {
        setError(toErrorResponse(res, ERROR_STARTING_GAME));
    } else {
        return res.json();
    }
}