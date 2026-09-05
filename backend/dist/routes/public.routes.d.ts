/**
 * Read-only endpoints served to anonymous visitors.
 *
 * These previously lived in three separate route files mounted at overlapping
 * prefixes, which made the real URL of any given handler hard to determine.
 */
declare const publicRouter: import("express-serve-static-core").Router;
export default publicRouter;
//# sourceMappingURL=public.routes.d.ts.map