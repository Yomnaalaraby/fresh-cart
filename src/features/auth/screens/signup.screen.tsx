import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";

export default function SignupScreen() {
    return <>
        <main className="min-h-screen bg-slate-50 py-10 flex items-center justify-center">

            <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 items-start">

                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <SignupHero />
                </div>
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                    <SignupForm />
                </div>

            </div>
        </main>
    </>;
}