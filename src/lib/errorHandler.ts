import {ErrorResponse, toErrorResponse} from "@/lib/models/ErrorResponse";
import {DEFAULT_ERROR} from "@/lib/constants";

export function handleResponse(
    res: Response,
    setError: (value: (((prevState: (ErrorResponse | undefined)) => (ErrorResponse | undefined)) | ErrorResponse | undefined)) => void,
    description?: string,
) {
    if (!res.ok) {
        setError(toErrorResponse(res, description ?? DEFAULT_ERROR));
    } else {
        return res.json();
    }
}