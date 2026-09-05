import type { NextFunction, Request, RequestHandler, Response } from 'express';
/**
 * Wraps an async route handler so a rejected promise reaches the error
 * middleware instead of becoming an unhandled rejection that hangs the request.
 */
export declare function asyncHandler<Req extends Request = Request>(handler: (req: Req, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler;
//# sourceMappingURL=asyncHandler.d.ts.map