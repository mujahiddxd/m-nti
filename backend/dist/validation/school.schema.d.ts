import { z } from 'zod';
export declare const schoolIdParam: z.ZodObject<{
    schoolId: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
/**
 * The "complete profile" wizard payload.
 *
 * Every bound here mirrors the corresponding column width in schema.prisma, so
 * an over-long value is a 400 with a named field rather than a 500 from MySQL.
 */
export declare const completeProfileSchema: z.ZodObject<{
    schoolAddress: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    city: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    state: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    pinCode: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    country: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    phoneLandline: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    phoneMobile: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    website: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    affiliationBoard: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    affiliationNo: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    schoolType: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    yearOfEstablishment: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
    totalStrength: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
    principalName: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    principalDesignation: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    principalEmail: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    principalMobile: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    coordinatorName: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    coordinatorDesignation: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    coordinatorEmail: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    coordinatorMobile: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    subjects: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    classes: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>, z.ZodTransform<string | null, string | null | undefined>>;
    count1to4: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
    count5to7: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
    count8to10: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
    count11to12: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
    totalCount: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
}, z.core.$strip>;
export type CompleteProfileInput = z.infer<typeof completeProfileSchema>;
export declare const uploadStudentsSchema: z.ZodObject<{
    subjectSlug: z.ZodString;
    documentUrl: z.ZodString;
    fileName: z.ZodString;
    studentCount: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const paymentProofSchema: z.ZodObject<{
    paymentProofUrl: z.ZodString;
    amount: z.ZodPipe<z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodTransform<number | null, string | number | null | undefined>>;
}, z.core.$strip>;
//# sourceMappingURL=school.schema.d.ts.map