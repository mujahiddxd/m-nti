import type { Request, RequestHandler } from 'express';
import type { ZodType } from 'zod';
interface Schemas {
    body?: ZodType;
    params?: ZodType;
    query?: ZodType;
}
/**
 * Validates and coerces the request against Zod schemas before the controller runs.
 *
 * Parsed values are written back onto the request, so controllers receive typed,
 * trimmed, range-checked data and never need to call `parseInt` on raw input.
 */
export declare function validate(schemas: Schemas): RequestHandler;
/** Reads the query object populated by `validate({ query })`. */
export declare function validatedQuery<T>(req: Request): T;
export {};
//# sourceMappingURL=validate.middleware.d.ts.map