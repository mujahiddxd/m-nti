import type { Request, Response } from 'express';
/**
 * GET /api/gallery
 * Public. Returns absolute image URLs.
 *
 * Rows created before the Cloudinary migration hold a relative path such as
 * `/uploads/gallery/123.jpg`. Those files no longer exist, so they are filtered
 * out rather than rendered as broken images.
 */
export declare const getGalleryImages: (_req: Request, res: Response) => Promise<void>;
/**
 * POST /api/admin/gallery
 * Accepts a single image in the `file` field plus name/school/className.
 */
export declare const uploadGalleryImage: (req: Request, res: Response) => Promise<void>;
/** DELETE /api/admin/gallery/:id */
export declare const deleteGalleryImage: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=gallery.controller.d.ts.map