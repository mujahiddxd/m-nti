import { z } from 'zod';
/** A positive integer route parameter, e.g. /schools/:id. */
export declare const idParam: (name: string) => z.ZodObject<{
    [x: string]: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
/** Standard page/limit pagination, capped so a client cannot request the whole table. */
export declare const paginationQuery: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type Pagination = z.infer<typeof paginationQuery>;
/** Converts validated pagination into Prisma's skip/take. */
export declare function toSkipTake({ page, limit }: Pagination): {
    skip: number;
    take: number;
    page: number;
    limit: number;
};
/** A trimmed, length-bounded string. Prevents oversized values reaching VARCHAR columns. */
export declare const boundedString: (max: number, label?: string) => z.ZodString;
/** Same, but required and non-empty after trimming. */
export declare const requiredString: (max: number, label?: string) => z.ZodString;
/** An optional field that treats '' and null as "not provided". */
export declare const optionalString: (max: number, label?: string) => z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
/** An optional integer that accepts '' / null / undefined as null. */
export declare const optionalInt: (label?: string) => z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
/** An https/http URL, bounded to the VARCHAR(1000) columns that store them. */
export declare const urlString: (label?: string) => z.ZodString;
/** Subject and class identifiers used across syllabus, results and PYQ records. */
export declare const slug: (label: string) => z.ZodString;
/** An exam year, bounded to a sane range so typos are caught at the edge. */
export declare const examYear: z.ZodCoercedNumber<unknown>;
//# sourceMappingURL=common.d.ts.map