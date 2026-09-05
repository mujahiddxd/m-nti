interface SendEmailOptions {
    email: string;
    emailType: 'VERIFY_USER' | 'RESET_PASSWORD';
    userId: number;
}
/**
 * Issues a single-use token, stores it, and sends the matching email through
 * the Google Apps Script webhook.
 *
 * Callers invoke this without awaiting so a slow mail provider cannot stall an
 * HTTP response — which is why every failure path logs rather than rethrowing
 * into a dead request.
 */
export declare function sendEmail({ email, emailType, userId }: SendEmailOptions): Promise<void>;
export {};
//# sourceMappingURL=mailer.d.ts.map