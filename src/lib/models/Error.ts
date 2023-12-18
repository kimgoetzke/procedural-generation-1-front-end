export enum ErrorType {
    GENERIC = "GENERIC",
    IN_GAME = "IN_GAME",
}

export interface BackendError {
    errorType: ErrorType;
    errorMessage: string;
}

export type FrontendError = {
    statusCode: number;
    name: string;
    description: string;
    errorType: ErrorType;
};

export const backendErrorFrom = (errorType: ErrorType, description?: string): BackendError => ({
    errorType: errorType,
    errorMessage: description ?? "No error description provided.",
});

export const toFrontendError = (response: Response, errorType: ErrorType, description?: string): FrontendError => ({
    statusCode: response.status,
    name: response.statusText,
    description: description ?? "No error description provided.",
    errorType: errorType,
});