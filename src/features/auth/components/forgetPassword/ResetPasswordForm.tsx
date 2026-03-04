"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";
import Link from "next/link";

// تحديد الـ Schema باستخدام Zod
const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .nonempty("Password is required"),
        confirmPassword: z
            .string()
            .min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // مكان الخطأ هيظهر عند الـ confirmPassword
    });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordFormValues) => {
        try {
            // ملحوظة: الـ API الخاص بالـ reset password غالباً بيحتاج الـ email 
            // ممكن تجيبيه من الـ localStorage أو الـ Context لو كنتي حفظتيه في الخطوة الأولى
            const userEmail = localStorage.getItem("userEmailForReset");

            if (!userEmail) {
                toast.error("Session expired. Please start the password reset process again.");
                router.push("/forget-password");
                return;
            }

            const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: userEmail,
                    newPassword: data.password,
                }),
            });

            if (response.ok) {
                toast.success("Password changed successfully! Please login.");
                localStorage.removeItem("userEmailForReset"); // تنظيف الداتا
                router.push("/login");
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Something went wrong.");
            }
        } catch (error) {
            toast.error("Connection error. Try again.");
        }
    };

    return (
        <div className="bg-white p-10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.04)] w-full max-w-md border border-gray-100 flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center gap-1 mb-2">
                <span className="text-[28px] font-bold text-[#0aad52]">Fresh</span>
                <span className="text-[28px] font-bold text-[#1f2937]">Cart</span>
            </div>

            <h1 className="text-2xl font-bold text-[#1f2937] mb-2 mt-2">
                Create New Password
            </h1>
            <p className="text-[#6b7280] text-sm mb-8 text-center px-4">
                Your new password must be different from previous passwords
            </p>

            {/* Stepper */}
            <div className="flex items-center justify-center w-full mb-10">
                <div className="w-10 h-10 rounded-full bg-[#0aad52] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="w-12 h-0.5 bg-[#0aad52] mx-1"></div>
                <div className="w-10 h-10 rounded-full bg-[#0aad52] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div className="w-12 h-0.5 bg-[#0aad52] mx-1"></div>
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f7ed] p-1.5">
                    <div className="w-full h-full bg-[#0aad52] rounded-full flex items-center justify-center text-white">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                {/* New Password */}
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                        New Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            className={`w-full pl-11 pr-10 py-3 border ${errors.password ? "border-red-500" : "border-gray-200"} rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#0aad52] transition-all`}
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L3 3m18 18l-6.88-6.88" /></svg>
                            )}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {/* Confirm Password */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm new password"
                            className={`w-full pl-11 pr-10 py-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-200"} rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#0aad52] transition-all`}
                            {...register("confirmPassword")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                            {showConfirmPassword ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L3 3m18 18l-6.88-6.88" /></svg>
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0aad52] hover:bg-[#088f43] text-white font-semibold py-3.5 px-4 rounded-xl transition-colors disabled:opacity-70 shadow-sm"
                >
                    {isSubmitting ? "Resetting..." : "Reset Password"}
                </button>
            </form>
        </div>
    );
}