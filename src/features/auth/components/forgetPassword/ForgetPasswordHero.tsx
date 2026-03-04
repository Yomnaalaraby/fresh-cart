export default function ForgetPasswordHero() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full bg-primary-50 rounded-4xl relative overflow-hidden flex flex-col items-center justify-center py-16 px-4 mb-8">
                <div className="absolute top-8 left-8 w-32 h-32 bg-[#e0f8ea] rounded-full opacity-60"></div>
                <div className="absolute top-16 right-16 w-20 h-20 bg-[#e0f8ea] rounded-full opacity-60"></div>
                <div className="absolute bottom-8 right-8 w-40 h-40 bg-[#e0f8ea] rounded-full opacity-60"></div>

                <div className="relative flex items-center justify-center h-48 w-full z-10">
                    <div className="absolute -translate-x-18 -rotate-15 bg-white p-3.5 rounded-2xl shadow-sm z-10 flex items-center justify-center w-14 h-14">
                        <svg className="w-6 h-6 text-[#0aad52]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </div>

                    <div className="relative bg-white p-2.5 rounded-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20">
                        <div className="bg-[#e6f7ed] rounded-2xl p-5 flex items-center justify-center w-20 h-20">
                            <svg className="w-8 h-8 text-[#0aad52]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                        </div>
                    </div>

                    <div className="absolute translate-x-18 rotate-15 bg-white p-3.5 rounded-2xl shadow-sm z-10 flex items-center justify-center w-14 h-14">
                        <svg className="w-6 h-6 text-[#0aad52]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-2 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary-300"></div>
                </div>
            </div>

            <h2 className="text-[28px] font-bold text-[#1e293b] mb-3">
                Reset Your Password
            </h2>
            <p className="text-[#64748b] text-center text-[15px] max-w-sm mb-8 leading-relaxed">
                Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
            </p>

            <div className="flex items-center justify-center gap-6 w-full">
                <div className="flex items-center gap-2 text-sm font-medium text-[#64748b]">
                    <svg className="w-4 h-4 text-[#0aad52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Email Verification
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[#64748b]">
                    <svg className="w-4 h-4 text-[#0aad52]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Secure Reset
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[#64748b]">
                    <svg className="w-4 h-4 text-[#0aad52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </svg>
                    Encrypted
                </div>
            </div>
        </div>
    );
}