import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" data-scroll-position="bottom" className=' w-full sm:h-screen bg-zinc-900 font-["Founders Grotesk_X-Condensed"] pt-1 '>
            <div className="text-structure mt-28 px-10 sm:mt-32 sm:px-20">
                {["We create", "Eye Opening", "Presentations"].map((item, index) => (
                    <div key={index} className="masker">
                        <div className='flex items-end w-fit overflow-hidden'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "7.5vw" }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className=' sm:w-[7.5vw] relative -top-[2vw] h-[7.5vw] sm:-top-[0.5vw] sm:h-[5.2vw] mr-[1vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover rounded-md'></motion.div>
                            )}
                            <h1 key={index} className=' text-[10vw] sm:text-[7.5vw] relative -top-[0.5vw] uppercase tracking-tighter leading-[10vw] sm:leading-[6vw]'>{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className=' border-t-[1px] border-zinc-800 mt-32 sm:mt-48 gap-10 pt-8 pb-40 sm:pb-0 flex flex-col items-start sm:flex-row sm:justify-between px-5 sm:px-16 sm:pt-3 sm:items-center text-xl sm:text-md leading-none'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <div className='start flex gap-2 items-center'>
                    <div className=" px-5 py-4 sm:py-2 border-[2px] rounded-full border-zinc-500 uppercase">Start the project</div>
                    <div className="arrow h-14 w-14 sm:h-8 sm:w-8 border-2 sm:border-[1px] rounded-full border-zinc-500 flex items-center justify-center">
                        <FaArrowUpLong className='rotate-45' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage