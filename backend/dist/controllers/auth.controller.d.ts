import type { Request, Response } from 'express';
import type { SchoolRequest } from '../middleware/schoolAuth.middleware.js';
/**
 * POST /api/auth/register
 * Creates a School in PENDING status and emails a verification link.
 */
export declare const register: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/auth/login
 * Accepts an email address or a username. Issues the session cookie.
 */
export declare const login: (req: Request, res: Response) => Promise<void>;
/**
 * GET /api/auth/me
 * Returns the signed-in school, or 401 once the session has expired.
 * The frontend uses this to restore state on load instead of trusting
 * a localStorage copy that outlives the cookie.
 */
export declare const me: (req: SchoolRequest, res: Response) => Promise<void>;
/** POST /api/auth/logout */
export declare const logout: (_req: Request, res: Response) => Promise<void>;
/** POST /api/auth/verify-email */
export declare const verifyEmail: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/auth/forgot-password
 * Always reports success so the endpoint cannot confirm which emails exist.
 */
export declare const forgotPassword: (req: Request, res: Response) => Promise<void>;
/** POST /api/auth/reset-password */
export declare const resetPassword: (req: Request, res: Response) => Promise<void>;
/**
 * GET /api/auth/registration-status
 * Public — tells the register page whether to show the form.
 */
export declare const getRegistrationStatus: (_req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map