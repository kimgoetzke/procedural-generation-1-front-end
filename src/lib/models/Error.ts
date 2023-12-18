export enum ErrorType {
    GENERIC = "GENERIC",
    IN_GAME = "IN_GAME",
}

export type BackendError = {
    errorType: ErrorType;
    errorMessage: string;
};

export type FrontendError = {
    statusCode: number;
    name: string;
    description: string;
    errorType: ErrorType;
};

export const toErrorResponse = (response: Response, errorType: ErrorType, description?: string): FrontendError => ({
    statusCode: response.status,
    name: response.statusText,
    description: description ?? "No error description provided.",
    errorType: errorType,
});