import type { Request, Response } from 'express';
/**
 * POST /api/admin/login
 * Compares against ADMIN_USERNAME / ADMIN_PASSWORD_HASH and returns a Bearer token.
 */
export declare const adminLogin: (req: Request, res: Response) => Promise<void>;
/** GET /api/admin/stats */
export declare const getStats: (_req: Request, res: Response) => Promise<void>;
/** GET /api/admin/schools — supports ?search= &status= &page= &limit= */
export declare const getSchools: (req: Request, res: Response) => Promise<void>;
/** GET /api/admin/schools/:id */
export declare const getSchoolDetail: (req: Request, res: Response) => Promise<void>;
/** PATCH /api/admin/schools/:id/status */
export declare const updateSchoolStatus: (req: Request, res: Response) => Promise<void>;
/** DELETE /api/admin/schools/:id — cascades to students, payments and documents. */
export declare const deleteSchool: (req: Request, res: Response) => Promise<void>;
/** GET /api/admin/students — supports ?search= &subjectSlug= &page= &limit= */
export declare const getAllStudents: (req: Request, res: Response) => Promise<void>;
/** GET /api/admin/payments */
export declare const getPayments: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/admin/payments/:paymentId/verify
 * Verifying a payment also locks the school's student list.
 */
export declare const verifyPayment: (req: Request, res: Response) => Promise<void>;
/** GET /api/results — public. Supports ?subjectSlug= &classSlug= &year= */
export declare const getResults: (req: Request, res: Response) => Promise<void>;
/** POST /api/admin/results */
export declare const addResult: (req: Request, res: Response) => Promise<void>;
/** DELETE /api/admin/results/:id */
export declare const deleteResult: (req: Request, res: Response) => Promise<void>;
/** GET /api/admin/registration-window */
export declare const getRegistrationWindow: (_req: Request, res: Response) => Promise<void>;
/** PUT /api/admin/registration-window — creates the row on first use. */
export declare const upsertRegistrationWindow: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=admin.controller.d.ts.map