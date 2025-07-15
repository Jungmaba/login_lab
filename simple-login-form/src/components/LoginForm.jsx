import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function LoginForm() {
    return (
        <>
            <main>
                <div className=" w-full h-screen flex justify-center items-center bg-amber-400">
                    <div className=" relative overflow-hidden w-[600px] h-[400px] bg-[#e8fbe1] rounded-xl">
                        <form className="flex w-full justify-center items-center flex-col h-full">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pt-6"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:top-0 peer-focus:text-xs peer-valid:top-0 peer-valid:text-xs"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    required
                                    className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 pt-6"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-focus:top-0 peer-focus:text-xs peer-valid:top-0 peer-valid:text-xs"
                                >
                                    password
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

{
    /* <motion.div
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
    delay: 0.6,
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.7 },
}}
className=" w-[100px] h-[100px] bg-fuchsia-400"
></motion.div> */
}
