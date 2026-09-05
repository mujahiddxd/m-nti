import type { CookieOptions } from 'express';
/**
 * Session lifetime, shared between the JWT expiry and the cookie Max-Age so the
 * two can never drift apart.
 *
 * The previous 1-hour window logged schools out mid-way through uploading
 * student lists, with no visible error.
 */
export declare const SESSION_MAX_AGE_MS: number;
export declare const SESSION_EXPIRES_IN = "12h";
/**
 * Options for the session cookie.
 *
 * `secure` defaults to on in production but stays overridable, because the
 * cookie is rejected by browsers over plain HTTP — which is what local
 * development and some staging setups use.
 */
export declare function sessionCookieOptions(): CookieOptions;
/** Matching options for clearing the cookie — must agree on domain/path/flags. */
export declare function clearCookieOptions(): CookieOptions;
//# sourceMappingURL=cookies.d.ts.map