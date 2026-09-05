import type { Request, Response } from 'express';
/**
 * GET /api/pyqs
 * Public. Supports ?subjectSlug= &classSlug= &year= &page= &limit=
 */
export declare const getPyqs: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/admin/pyqs
 * Re-uploading the same subject/class/year/type replaces the existing row
 * rather than creating a duplicate the public page would render twice.
 */
export declare const addPyq: (req: Request, res: Response) => Promise<void>;
/** DELETE /api/admin/pyqs/:id */
export declare const deletePyq: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=pyq.controller.d.ts.map