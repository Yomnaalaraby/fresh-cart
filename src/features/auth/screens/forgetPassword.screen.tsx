import ForgetPasswordForm from "../components/forgetPassword/ForgetPasswordForm";
import ForgetPasswordHero from "../components/forgetPassword/ForgetPasswordHero";


export default function ForgetPasswordScreen() {
    return <>
        <main className="min-h-screen bg-slate-50 py-10 flex items-center justify-center">

            <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 p-4 items-start">

                <div className=" p-8 md:p-10 rounded-2xl ">
                    <ForgetPasswordHero />
                </div>
                <div className=" p-8 md:p-10 rounded-2xl  ">
                    <ForgetPasswordForm />
                </div>

            </div>
        </main>
    </>
}
