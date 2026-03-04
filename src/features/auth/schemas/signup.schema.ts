import { regex, z } from "zod";

export const signupSchema = z.object({
    name: z.string()
        .nonempty("name is required")
        .min(3, "name must be more than 3 characters")
        .max(25, "name must be less than 25 characters"),

    email: z.string().nonempty("email is required").pipe(z.email("invalid email address")),

    password: z.string()
        .nonempty("password is required")
        .min(8, "password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase character")
        .regex(/[a-z]/, "Password must contain at leat one lowercase character")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),

    rePassword: z.string().nonempty("password confirmation is required"),
    phone: z.string().nonempty("phone is required").regex(/^(\+2)?01[0125][0-9]{8}$/, "only Egyptian phone numbers are allowed"),
    terms: z.boolean().refine((value) => value === true, {
        error: "you must accept the terms and conditions",
    })

}).refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    error: "password and confirm pasword must match",
})
export type SignupFormValues = z.infer<typeof signupSchema>