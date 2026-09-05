import type { Request, Response } from 'express';
/**
 * POST /api/schools/:schoolId/students
 * Records the uploaded student-list document for one subject.
 */
export declare const uploadStudents: (req: Request, res: Response) => Promise<void>;
/**
 * DELETE /api/schools/:schoolId/students/:subjectSlug
 * Removes a subject's uploaded list. Previously the frontend dropped it from
 * local state only, so it reappeared on the next page load.
 */
export declare const deleteStudentDocument: (req: Request, res: Response) => Promise<void>;
/**
 * GET /api/schools/:schoolId/students
 * Everything the school panel needs on load: documents, lock state, latest
 * payment status and the profile header.
 */
export declare const getStudents: (req: Request, res: Response) => Promise<void>;
/**
 * POST /api/schools/:schoolId/complete-profile
 * Writes the school, principal, coordinator and participation rows in one
 * transaction so a partial save can never leave a half-completed profile.
 */
export declare const completeProfile: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=student.controller.d.ts.map