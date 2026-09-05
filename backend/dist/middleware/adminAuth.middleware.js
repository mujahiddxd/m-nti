import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { ApiError } from '../utils/ApiError.js';
/**
 * Protects admin-only routes.
 * Expects `Authorization: Bearer <token>` carrying `{ role: 'admin' }`.
 */
export const adminAuth = (req, _res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        next(ApiError.unauthorized('Admin authentication required.'));
        return;
    }
    const token = authHeader.slice('Bearer '.length).trim();
    if (!token) {
        next(ApiError.unauthorized('Admin authentication required.'));
        return;
    }
    let decoded;
    try {
        decoded = jwt.verify(token, env.JWT_TOKEN);
    }
    catch (err) {
        next(err);
        return;
    }
    // School tokens are signed with the same secret, so the role claim is what
    // actually separates the two audiences.
    if (decoded.role !== 'admin') {
        next(ApiError.forbidden('Access denied. Admin role required.'));
        return;
    }
    req.admin = { role: 'admin' };
    next();
};
//# sourceMappingURL=adminAuth.middleware.js.map