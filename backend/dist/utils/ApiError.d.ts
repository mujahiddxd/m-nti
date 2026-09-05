/**
 * An error with an HTTP status attached.
 *
 * Anything thrown that is *not* an ApiError is treated as an unexpected bug:
 * it is logged in full and reported to the client as a generic 500, so internal
 * details (SQL fragments, file paths, driver messages) never reach the browser.
 */
export declare class ApiError extends Error {
    readonly status: number;
    readonly details?: unknown;
    constructor(status: number, message: string, details?: unknown);
    static badRequest(message: string, details?: unknown): ApiError;
    static unauthorized(message?: string): ApiError;
    static forbidden(message?: string): ApiError;
    static notFound(message?: string): ApiError;
    static conflict(message: string): ApiError;
    static payloadTooLarge(message?: string): ApiError;
}
//# sourceMappingURL=ApiError.d.ts.map