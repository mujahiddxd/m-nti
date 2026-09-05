import type { NextFunction, Request, Response } from 'express';
/** Terminal 404 handler. Runs after every route, so it always returns JSON. */
export declare function notFoundHandler(req: Request, res: Response): void;
/**
 * Translates a thrown error into a JSON response.
 *
 * Without this, Express's default handler replies with an HTML error page — which
 * every `fetch()` in the frontend then fails to parse as JSON, turning a clear
 * "file too large" into an opaque crash.
 */
export declare function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction): void;
//# sourceMappingURL=error.middleware.d.ts.map