import { z } from 'zod';
/**
 * Schema for every environment variable the server reads.
 *
 * Parsed once at startup so a misconfigured deployment fails immediately with a
 * readable message instead of throwing somewhere deep in a request handler.
 */
declare const envSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        test: "test";
        production: "production";
    }>>;
    PORT: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    DATABASE_URL: z.ZodString;
    JWT_TOKEN: z.ZodString;
    ADMIN_USERNAME: z.ZodString;
    ADMIN_PASSWORD_HASH: z.ZodString;
    CLOUDINARY_CLOUD_NAME: z.ZodString;
    CLOUDINARY_API_KEY: z.ZodString;
    CLOUDINARY_API_SECRET: z.ZodString;
    CLIENT_URL: z.ZodString;
    ADDITIONAL_ORIGINS: z.ZodOptional<z.ZodString>;
    GOOGLE_APPS_SCRIPT_URL: z.ZodOptional<z.ZodString>;
    COOKIE_DOMAIN: z.ZodOptional<z.ZodString>;
    COOKIE_SAMESITE: z.ZodDefault<z.ZodEnum<{
        lax: "lax";
        strict: "strict";
        none: "none";
    }>>;
    COOKIE_SECURE: z.ZodPipe<z.ZodOptional<z.ZodEnum<{
        true: "true";
        false: "false";
    }>>, z.ZodTransform<boolean, "true" | "false" | undefined>>;
    TRUST_PROXY: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    LOG_LEVEL: z.ZodDefault<z.ZodEnum<{
        error: "error";
        fatal: "fatal";
        warn: "warn";
        info: "info";
        debug: "debug";
        trace: "trace";
        silent: "silent";
    }>>;
}, z.core.$strip>;
export type Env = z.infer<typeof envSchema>;
/**
 * Parses and returns the validated environment.
 *
 * On failure this prints every problem at once — a deploy with three missing
 * variables should not require three deploy cycles to discover them.
 */
export declare function loadEnv(): Env;
/** The validated environment. Import this instead of touching `process.env`. */
export declare const env: Env;
/** Every origin allowed to make credentialed cross-origin requests. */
export declare function allowedOrigins(): string[];
export {};
//# sourceMappingURL=env.d.ts.map