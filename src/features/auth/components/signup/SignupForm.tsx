"use client";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupFormValues, signupSchema } from "../../schemas/signup.schema";
import signupActions from "../../server/signup.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const router = useRouter();
    const { register, handleSubmit, setError,
        formState: { errors, isSubmitting }
    } = useForm<SignupFormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
            terms: false
        },
        resolver: zodResolver(signupSchema),
        mode: 'onSubmit',
        reValidateMode: 'onBlur'
    })


    const onSubmit: SubmitHandler<SignupFormValues> = async (values) => {
        try {
            const response = await signupActions(values);
            if (response?.success) {
                toast.success(response.message);
                setTimeout(() => {
                    router.push("/login")
                }, 2000)
            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof SignupFormValues, {
                            message: response.errors[key],
                        })
                    });
                }
            }
        } catch (error) {

        }
    };

    return <>
        <div className="max-w-md mx-auto bg-white p-4 font-sans">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-[#21313c] mb-2">Create Your Account</h1>
                <p className="text-[#5c6c75]">Start your fresh journey with us today</p>
            </div>

            <div className="flex gap-4 mb-6">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-50 transition text-[#21313c] font-medium">
                    <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                    Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#3c5a99] text-white rounded-lg py-2.5 hover:bg-[#2d4373] transition font-medium">
                    <FontAwesomeIcon icon={faFacebook} />
                    Facebook
                </button>
            </div>

            <div className="relative flex items-center justify-center mb-6">
                <hr className="w-full border-gray-200" />
                <span className="absolute bg-white px-3 text-gray-500 text-sm">or</span>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-sm font-semibold text-[#21313c] mb-1">Name*</label>
                    <input
                        type="text"
                        placeholder="Ali"
                        id="name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-red-500 mt-0.5">*{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#21313c] mb-1">Email*</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="ali@example.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400"
                        {...register("email")}

                    />
                    {errors.email && (
                        <p className="text-red-500 mt-0.5">*{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#21313c] mb-1">Password*</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="create a strong password"
                        {...register("password")}

                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400"
                    />
                    <div className="flex items-center gap-2 mt-2">
                        <div className="grow h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-1/5 h-full bg-red-500"></div>
                        </div>
                        <span className="text-xs text-[#5c6c75]">Weak</span>
                    </div>
                    {errors.password ? (
                        <p className="text-red-500 mt-0.5">*{errors.password.message}</p>
                    ) : (
                        <p className="text-xs text-[#5c6c75] mt-1">Must be at least 8 characters with numbers and symbols</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#21313c] mb-1">Confirm Password*</label>
                    <input
                        type="password"
                        id="rePassword"
                        placeholder="confirm your password"
                        {...register("rePassword")}

                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400"
                    />
                    {errors.rePassword && (
                        <p className="text-red-500 mt-0.5">*{errors.rePassword.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-semibold text-[#21313c] mb-1">Phone Number*</label>
                    <input
                        type="text"
                        id="phone"
                        {...register("phone")}

                        placeholder="+1 234 567 8900"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#198754] placeholder:text-gray-400"
                    />
                    {errors.phone && (
                        <p className="text-red-500 mt-0.5">*{errors.phone.message}</p>
                    )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="terms"   {...register("terms")} className="w-4 h-4 text-[#198754] border-gray-300 rounded focus:ring-[#198754]" />
                    <label htmlFor="terms" className="text-sm text-[#5c6c75]">
                        I agree to the <Link href="/terms" className="text-[#198754]">Terms of Service</Link> and <Link href="/privacy-policy" className="text-[#198754]">Privacy Policy</Link> *
                    </label>
                    {errors.terms && (
                        <p className="text-red-500 mt-0.5">*{errors.terms.message}</p>
                    )}
                </div>

                <button
                    disabled={isSubmitting}
                    className="w-full bg-[#198754] hover:bg-[#157347] text-white font-bold py-3 rounded-lg transition flex items-center disabled::cursor-not-allowed justify-center gap-2 mt-2">
                    {isSubmitting ? (
                        <>
                            <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                            <span>Creating an account</span>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                            <span>Create My Account</span>
                        </>
                    )}
                </button>
            </form>

            <p className="text-center text-sm text-[#5c6c75] mt-6">
                Already have an account? <Link href="/login" className="text-[#198754] font-medium hover:underline">Sign In</Link>
            </p>
        </div>
    </>;
}