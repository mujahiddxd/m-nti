import type { Request, Response } from 'express';
/**
 * POST /api/schools/:schoolId/payment
 * Records a payment proof for admin review.
 *
 * Admin-side listing and verification live in admin.controller.ts — this file
 * previously carried unrouted duplicates of both.
 */
export declare const uploadPaymentProof: (req: Request, res: Response) => Promise<void>;
/**
 * GET /api/schools/:schoolId/payment
 * The school's own payment history.
 */
export declare const getSchoolPayments: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=payment.controller.d.ts.map