export type ErrorResponse = {
    statusCode: number;
    name: string;
    description: string;
};

export const toErrorResponse = (response: Response, description?: string): ErrorResponse => ({
    statusCode: response.status,
    name: response.statusText,
    description: description ?? "No error description provided."
});