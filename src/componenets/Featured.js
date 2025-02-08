import { easeIn, motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap';
import { customAlphabet } from 'nanoid';
import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Featured = () => {
    // const [isHovered, setIsHovered] = useState(false)
    // const handleMouseEnter = ()=>{
    //     setIsHovered(true);
    // }
    // const handleMouseLeave = ()=>{
    //     setIsHovered(false);
    // }
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]
    const handleHoverStart = index => {
        cards[index].start({y: 0})
    }
    const handleHoverEnd = index => {
        cards[index].start({y: "100%"})
    }
    return (
        <div className=' w-full '>
            <div className="w-full px-5 sm:px-10 pt-10 sm:pt-20 pb-10 border-b-2 border-zinc-600">
                <h1 className=' text-4xl sm:text-6xl'>Featured Projects</h1>
            </div>
            <div className='flex flex-col sm:flex-row flex-wrap px-5 pt-10 sm:p-10 gap-y-12 justify-between'>
            {[
                    {
                        topic: "fyde",
                        url: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
                        links: ["audit", "copywriting", "sales deck", "slides design"]
                    },
                    {
                        topic: "vise",
                        url: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
                        links: ["agency", "company presentation"]
                    },
                    {
                        topic: "trawa",
                        url: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
                        links: ["brand identity", "design research", "investor deck"]
                    },
                    {
                        topic: "premium blend",
                        url: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
                        links: ["brand template"]
                    },
                ].map((item, index) => (
                    <div key={index} className=' w-[90vw] sm:w-1/2 flex flex-col gap-2'>
                        <h3 className='uppercase pl-5 flex items-center gap-2'><span className=' text-3xl flex -translate-y-[1.5px] h-full'>•</span>{item.topic}</h3>
                        <div className='p-2'>
                            <motion.div onHoverStart={()=> handleHoverStart(index)} onHoverEnd={()=> handleHoverEnd(index)} className=' relative'>
                                <h1 className={`absolute flex z-10 ${index%2===0 ? "left-full top-1/2 -translate-x-1/2 -translate-y-1/2": "right-full top-1/2 translate-x-1/2 -translate-y-1/2"} overflow-hidden`}>
                                    {item.topic.split("").map((char,charIndex)=>(
                                        <motion.span 
                                            initial={{y: "100%"}}
                                            animate = {cards[index]}
                                            transition={{ease: Power4.easeIn, duration: 0.3, delay: charIndex*0.03}}
                                            key={charIndex}
                                            className={`uppercase inline-block text-[#9bb638] text-9xl tracking-tighter font-bold ${index == 3 && charIndex == 6 && "mr-5"}`}>{char}</motion.span>
                                    ))}
                                </h1>
                                <img className='rounded-xl h-full w-full' src={item.url} alt="" />
                            </motion.div>
                        </div>
                        <div className='flex flex-wrap gap-5 gap-y-3 sm:gap-2'>
                            {item.links.map((link, index) => (
                                <a key={index} href="#" className=' px-6 py-3 sm:px-3 sm:py-1 border-[1px] border-zinc-600 rounded-full flex items-center justify-center'>
                                    <span className='uppercase text-xs cursor-pointer'>{link}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            

            <div className=" flex items-center justify-center my-20">
                <div className=' flex items-center justify-center bg-zinc-100 rounded-full py-3 pl-5 pr-2 gap-5'>
                    <span className=' text-md text-zinc-900 font-semibold uppercase'>View all case studies</span>
                    <div className="arrow h-2 w-2 rounded-full bg-zinc-900 flex items-center justify-center">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured