import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const About = () => {
    return (
        <div data-scroll data-scroll-speed="-.05" className='w-full pt-20 text-zinc-700 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]'>
            <h1 className=' mx-5 sm:mx-12 text-[13vw] sm:text-[4vw] leading-[13vw] sm:leading-[4.5vw] tracking-tighter w-[80vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to {
                ["raise funds,", "sell products, ", "ex­plain com­plex ideas,", "hire great peo­ple"].map((item, index) => (
                    <span key={index}>
                        <span className=' border-b-[3px] border-zinc-800 mr-2
                    '>{item}</span>
                        {index === 2 && <span>and </span>}
                    </span>
                ))
            }.</h1>
            <div className="expect px-5 sm:px-12 font-semibold flex flex-col sm:flex-row justify-start gap-10 sm:gap-[35vw] items-start pt-10 pb-32 border-t-2 border-b-2 border-zinc-700 mt-20">
                <p>What you can expect:</p>
                <div className='flex flex-col sm:flex-row justify-start gap-[10vw]'>
                    <div className='w-[300px] flex flex-col gap-10'>
                        <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className=' sm:self-end'>
                        <h4 className=' mb-5'>S:</h4>
                        <ol>
                            {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
                                <li key={index} className='border-b-[1px] w-fit border-zinc-800'>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pb-10 sm:pb-0 sm:flex-row gap-10 sm:gap-0 sm:justify-between px-5 sm:px-12 pt-10 sm:pt-5'>
                <div className=' w-1/2'>
                    <h1 className='text-5xl font-semibold mb-5'>Our approach:</h1>
                    <div className=" text-zinc-100 text-sm flex items-center gap-10 pl-5 pr-2 py-4 w-fit readmore uppercase rounded-full bg-zinc-800">
                        <span>Read More</span>
                        <div className='h-2 w-2 bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
                <div className='sm:h-[60vh] w-[90vw] sm:mb-20 sm:w-1/2'>
                    <img className=' rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About