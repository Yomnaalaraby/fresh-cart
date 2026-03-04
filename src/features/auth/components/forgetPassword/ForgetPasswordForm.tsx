"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";

const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, "Email Address is required")
        .email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgetPasswordForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: ForgotPasswordFormValues) => {
        try {
            const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: data.email }),
            });

            if (response.ok) {
                localStorage.setItem("userEmailForReset", data.email);
                toast.success("Reset code sent successfully!");
                router.push("/verify-code");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Email is not registered.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="bg-white p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.04)] w-full max-w-md border border-gray-100 flex flex-col items-center">

            <div className="flex items-center gap-1 mb-2">
                <span className="text-[28px] font-bold text-[#0aad52]">Fresh</span>
                <span className="text-[28px] font-bold text-[#1f2937]">Cart</span>
            </div>

            <h1 className="text-2xl font-bold text-[#1f2937] mb-2 mt-2">
                Forgot Password?
            </h1>
            <p className="text-[#6b7280] text-sm mb-8">
                No worries, we'll send you a reset code
            </p>

            <div className="flex items-center justify-center w-full mb-10">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f7ed] p-1.5">
                    <div className="w-full h-full bg-[#0aad52] rounded-full flex items-center justify-center text-white">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </div>
                </div>

                <div className="w-12 h-0.5 bg-gray-100 mx-1"></div>

                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                    </svg>
                </div>

                <div className="w-12 h-0.5 bg-gray-100 mx-1"></div>

                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1f2937] mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className={`w-full pl-11 pr-4 py-3 border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:ring-[#0aad52]"
                                } rounded-lg text-sm focus:outline-none focus:ring-1 focus:border-transparent transition-colors placeholder:text-gray-400`}
                            {...register("email")}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0aad52] hover:bg-[#088f43] text-white font-semibold py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
                >
                    {isSubmitting ? "Sending..." : "Send Reset Code"}
                </button>
            </form>

            <div className="mt-6 w-full text-center">
                <Link
                    href="/login"
                    className="inline-flex items-center gap-2 text-sm text-[#0aad52] hover:underline font-medium"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Sign In
                </Link>
            </div>

            <div className="w-full h-px bg-gray-100 my-8"></div>

            <div className="text-sm text-[#6b7280]">
                Remember your password?{" "}
                <Link href="/login" className="text-[#0aad52] font-bold hover:underline">
                    Sign In
                </Link>
            </div>
        </div>
    );
}