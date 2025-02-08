import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    return (
        <div data-scroll data-scroll-speed=".01" className=' w-full bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl ' >
            <div className=' border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap uppercase overflow-hidden'>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100vw" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                    className='text-[17vw] mb-8 sm:mb-10 leading-none tracking-tighter pt-8 sm:pt-0 pr-5 sm:pr-20'>We are ochi</motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100vw" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
                    className='text-[17vw] mb-8 sm:mb-10 leading-none tracking-tighter pt-8 sm:pt-0 pr-5 sm:pr-20'>We are ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee