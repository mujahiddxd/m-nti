import type { NextFunction, Request, Response } from 'express';
export interface SchoolRequest extends Request {
    school?: {
        id: number;
        username: string;
    };
}
/**
 * Protects school-only routes using the JWT in the HttpOnly `token` cookie.
 *
 * When the route carries a `:schoolId`, it must match the token — otherwise any
 * signed-in school could read another school's students and payments.
 */
export declare const schoolAuth: (req: SchoolRequest, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=schoolAuth.middleware.d.ts.map