import { z } from 'zod';
export declare const adminLoginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const schoolsQuery: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>>;
}, z.core.$strip>;
export declare const studentsQuery: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
    subjectSlug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateSchoolStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>;
}, z.core.$strip>;
export declare const verifyPaymentSchema: z.ZodObject<{
    status: z.ZodEnum<{
        REJECTED: "REJECTED";
        VERIFIED: "VERIFIED";
    }>;
    adminNotes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const addResultSchema: z.ZodObject<{
    subjectSlug: z.ZodString;
    classSlug: z.ZodString;
    year: z.ZodCoercedNumber<unknown>;
    resultUrl: z.ZodString;
}, z.core.$strip>;
export declare const registrationWindowSchema: z.ZodObject<{
    startDate: z.ZodCoercedDate<unknown>;
    endDate: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export declare const galleryImageSchema: z.ZodObject<{
    name: z.ZodString;
    school: z.ZodString;
    className: z.ZodString;
}, z.core.$strip>;
export declare const pyqSchema: z.ZodObject<{
    subjectSlug: z.ZodString;
    classSlug: z.ZodString;
    year: z.ZodCoercedNumber<unknown>;
    type: z.ZodEnum<{
        "Question Paper": "Question Paper";
        "Answer Key": "Answer Key";
        Solution: "Solution";
    }>;
    paperUrl: z.ZodString;
    publicId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const pyqQuery: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    subjectSlug: z.ZodOptional<z.ZodString>;
    classSlug: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const resultsQuery: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    subjectSlug: z.ZodOptional<z.ZodString>;
    classSlug: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=admin.schema.d.ts.map