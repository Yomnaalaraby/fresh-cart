"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import {
    faLock,
    faShieldHalved,
    faUsers,
    faStar,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import loginAction from "../../server/login.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setToken } from "../../server/auth.actions";
import { setAuthInfo } from "../../store/auth.slice";
import { userInfo } from "node:os";
import { useDispatch } from "react-redux";
import ForgetPasswordScreen from "../../screens/forgetPassword.screen";
export default function LoginForm() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false

        },

        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        reValidateMode: "onChange",
    });

    const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
        try {
            const response = await loginAction(values);
            if (response?.success) {
                await setToken(response.data.token, values.rememberMe)
                dispatch(setAuthInfo({ isAuthenticated: true, userInfo: response.data.user }))
                toast.success(response?.message);
                setTimeout(() => {
                    router.push('/')
                }, 3000)
            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof LoginFormValues, { message: response.errors[key as keyof typeof response.errors] })
                    })
                }
            }

        } catch (error) {

        }
    }




    // State to handle password visibility toggle
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 font-sans">

            {/* --- Header --- */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-2 tracking-wide">
                    <span className="text-[#21313c]">Fresh</span>
                    <span className="text-[#198754]">Cart</span>
                </h1>
                <h2 className="text-xl font-bold text-[#21313c] mb-1">Welcome Back!</h2>
                <p className="text-[#5c6c75] text-sm">
                    Sign in to continue your fresh shopping experience
                </p>
            </div>

            {/* --- Social Logins --- */}
            <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition text-[#21313c] font-medium text-sm">
                    <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-lg" />
                    Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition text-[#21313c] font-medium text-sm">
                    <FontAwesomeIcon icon={faFacebook} className="text-[#1877F2] text-lg" />
                    Continue with Facebook
                </button>
            </div>

            {/* --- Divider --- */}
            <div className="relative flex items-center justify-center mb-6">
                <hr className="w-full border-gray-200" />
                <span className="absolute bg-white px-3 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    Or continue with email
                </span>
            </div>

            {/* --- Form --- */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                {/* Email Input */}
                <div>
                    <label className="block text-xs font-bold text-[#21313c] mb-1.5">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 text-sm" />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register('email')}
                            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400 text-sm transition"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 mt-1">
                        *{errors.email.message}
                    </p>}
                </div>

                {/* Password Input */}
                <div>
                    <div className="flex justify-between items-center mb-1.5">
                        <label className="block text-xs font-bold text-[#21313c]">
                            Password
                        </label>
                        <Link
                            href="/forget-password"
                            className="text-xs font-bold text-[#198754] hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faLock} className="text-gray-400 text-sm" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register('password')}
                            className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400 text-sm transition"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition"
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-sm" />
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 mt-1">
                        *{errors.password.message}
                    </p>}
                </div>

                {/* Keep me signed in Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                    <input
                        type="checkbox"
                        id="remember"
                        {...register('rememberMe')}
                        className="w-4 h-4 text-[#198754] border-gray-300 rounded focus:ring-[#198754] cursor-pointer"
                    />
                    <label htmlFor="remember" className="text-xs font-medium text-[#5c6c75] cursor-pointer">
                        Keep me signed in
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#198754] hover:bg-[#157347] text-white font-bold py-3 rounded-lg transition text-sm mt-2 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                            <span>Signing In ...</span>
                        </>
                    ) : (
                        <>Sign In</>
                    )}
                </button>
            </form>

            {/* --- Footer Links --- */}
            <p className="text-center text-sm text-[#5c6c75] mt-6">
                New to FreshCart?{" "}
                <Link href="/signup" className="text-[#198754] font-bold hover:underline">
                    Create an account
                </Link>
            </p>

            {/* --- Trust Badges --- */}
            <div className="flex justify-center items-center gap-5 mt-8 text-[11px] text-gray-500 font-bold border-t border-gray-100 pt-6">
                <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-gray-400" />
                    SSL Secured
                </div>
                <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faUsers} className="text-gray-400" />
                    50K+ Users
                </div>
                <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faStar} className="text-gray-400" />
                    4.9 Rating
                </div>
            </div>

        </div>
    );
}