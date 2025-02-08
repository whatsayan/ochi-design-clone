import { React, useEffect, useState } from 'react'

const StartProject = () => {
    const [rotate, setRotate] = useState(0)
    const [moveEye, setMoveEye] = useState([0, 0])
    function scaleNumber(originalNumber, minOriginal, maxOriginal, minScaled, maxScaled) {
        const scaled = (originalNumber - minOriginal) / (maxOriginal - minOriginal);
        return Math.floor(scaled * (maxScaled - minScaled + 1)) + minScaled;
    }
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let delX = mouseX - (window.innerWidth / 2);
            let delY = mouseY - (window.innerHeight / 2);
            let angle = Math.atan2(delX, delY) * (180 / Math.PI)
            setRotate(270 - angle);
            const reduced = [scaleNumber(delX, 1, window.innerWidth / 2, 1, 15), scaleNumber(delY, 1, window.innerHeight / 2, 1, 15)];
            setMoveEye([...reduced])
        }
        )
    })
    return (
        <div className=' relative w-full py-20 sm:p-32 bg-zinc-800'>

            <div className="headings w-full flex flex-col items-center">
                {["ready", "to start", "the project?"].map((item, index) => (
                    <h1 key={index} className='text-[13vw] sm:text-[12vw] text-zinc-100 leading-[16vw] sm:leading-none tracking-tighter uppercase'>{item}</h1>
                ))}
            </div>
            <div className=' sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 flex gap-10 justify-center'>
                <div className=' flex items-center justify-center h-[25vw] w-[25vw] sm:h-[15vw] sm:w-[15vw] bg-zinc-900 rounded-full'>
                    <div style={{ transform: `translate(${moveEye[0]}%, ${moveEye[1]}%)` }} className='relative h-[55%] w-[55%] sm:h-2/3 sm:w-2/3 bg-zinc-100 rounded-full'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full relative top-1/2 left-1/2'>
                            <div className='h-4 sm:h-6 w-4 sm:w-6 bg-zinc-900 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center h-[25vw] w-[25vw] sm:h-[15vw] sm:w-[15vw] bg-zinc-900 rounded-full'>
                    <div style={{ transform: `translate(${moveEye[0]}%, ${moveEye[1]}%)` }} className='relative h-[55%] w-[55%] sm:h-2/3 sm:w-2/3 bg-zinc-100 rounded-full'>
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full relative top-1/2 left-1/2'>
                            <div className='h-4 sm:h-6 w-4 sm:w-6 bg-zinc-900 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full items-center justify-center flex-col gap-5 mt-10'>
                <a href="">
                    <div>
                        <span className=' uppercase text-zinc-900 font-semibold bg-zinc-100 rounded-full py-4 px-8'>Start the project</span>
                        <div></div>
                    </div>
                </a>
                <span className='text-zinc-100 font-semibold'>OR</span>
                <a href="">
                    <div>
                        <span className=' uppercase text-zinc-900 font-semibold bg-zinc-100 rounded-full py-4 px-8'>hello@ochi.design</span>
                        <div></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default StartProject