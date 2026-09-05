import type { NextFunction, Request, Response } from 'express';
export interface AdminRequest extends Request {
    admin?: {
        role: 'admin';
    };
}
/**
 * Protects admin-only routes.
 * Expects `Authorization: Bearer <token>` carrying `{ role: 'admin' }`.
 */
export declare const adminAuth: (req: AdminRequest, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=adminAuth.middleware.d.ts.map