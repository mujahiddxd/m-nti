/**
 * Validates and coerces the request against Zod schemas before the controller runs.
 *
 * Parsed values are written back onto the request, so controllers receive typed,
 * trimmed, range-checked data and never need to call `parseInt` on raw input.
 */
export function validate(schemas) {
    return (req, _res, next) => {
        try {
            if (schemas.params) {
                Object.assign(req.params, schemas.params.parse(req.params));
            }
            if (schemas.query) {
                // Express 5 exposes req.query via a getter, so mutate rather than reassign.
                const parsed = schemas.query.parse(req.query);
                Object.defineProperty(req, 'validatedQuery', { value: parsed, writable: true, enumerable: true });
            }
            if (schemas.body) {
                req.body = schemas.body.parse(req.body);
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
}
/** Reads the query object populated by `validate({ query })`. */
export function validatedQuery(req) {
    return req.validatedQuery;
}
//# sourceMappingURL=validate.middleware.js.map