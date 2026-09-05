import { v2 as cloudinary } from 'cloudinary';
/** Cloudinary folders the app is allowed to write to. */
export declare const UPLOAD_FOLDERS: {
    readonly paymentProofs: "olympiad/payment-proofs";
    readonly studentLists: "olympiad/student-lists";
    readonly results: "olympiad/results";
    readonly pyqs: "olympiad/pyqs";
    readonly gallery: "olympiad/gallery";
};
export type UploadFolder = (typeof UPLOAD_FOLDERS)[keyof typeof UPLOAD_FOLDERS];
export declare const ALLOWED_FOLDERS: readonly string[];
export interface UploadedAsset {
    url: string;
    publicId: string;
    format?: string;
    bytes?: number;
}
/**
 * Streams a buffer to Cloudinary and returns the stored asset.
 *
 * `resource_type: 'auto'` matters: the previous hardcoded `'image'` silently
 * broke every PDF upload, even though the mime filter accepted PDFs.
 */
export declare function uploadBuffer(buffer: Buffer, folder: UploadFolder, options?: {
    resourceType?: 'auto' | 'image' | 'raw';
}): Promise<UploadedAsset>;
/**
 * Removes an asset. Failures are reported to the caller but are not fatal —
 * an orphaned Cloudinary file is a smaller problem than a delete that appears
 * to fail while the database row is already gone.
 */
export declare function destroyAsset(publicId: string): Promise<void>;
export default cloudinary;
//# sourceMappingURL=cloudinary.d.ts.map