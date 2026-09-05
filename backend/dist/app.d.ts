import type { Application } from 'express';
/**
 * Builds the Express application.
 *
 * Kept separate from server start-up so tests can exercise routes without
 * binding a port or connecting to the database.
 */
export declare function createApp(): Application;
//# sourceMappingURL=app.d.ts.map