import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0)
    const [moveEye, setMoveEye] = useState([0,0])
    // const [moveX, setMoveEyeX] = useState(0)
    // const [moveY, setMoveEyeY] = useState(0)
    function scaleNumber(originalNumber, minOriginal, maxOriginal, minScaled, maxScaled) {
        const scaled = (originalNumber - minOriginal) / (maxOriginal - minOriginal);
        return Math.floor(scaled * (maxScaled - minScaled + 1)) + minScaled;
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let delX = mouseX - (window.innerWidth / 2);
            let delY = mouseY - (window.innerHeight / 2);
            let angle = Math.atan2(delX, delY) * (180 / Math.PI);
            setRotate(270 - angle);
            const reduced = [
                scaleNumber(delX, 1, window.innerWidth / 2, 1, 15),
                scaleNumber(delY, 1, window.innerHeight / 2, 1, 15)
            ];
            setMoveEye([...reduced]);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    
    // useEffect(() => {
    //     window.addEventListener("mousemove", (e) => {
    //         let mouseX = e.clientX;
    //         let mouseY = e.clientY;
    //         let delX = mouseX - (window.innerWidth / 2);
    //         let delY = mouseY - (window.innerHeight / 2);
    //         let angle = Math.atan2(delX, delY) * (180 / Math.PI)
    //         setRotate(270 - angle);
    //         const reduced = [scaleNumber(delX, 1, innerWidth / 2, 1, 15),scaleNumber(delY, 1, innerHeight / 2, 1, 15)];
    //         setMoveEye([...reduced])
    //         // const reducedX = scaleNumber(delX, 1, innerWidth / 2, 1, 15);
    //         // const reducedY = scaleNumber(delY, 1, innerHeight / 2, 1, 15);
    //         // setMoveEye([reducedX,reducedY]);
    //     }
    //     )
    // })
    return (
        <div className='w-full h-[30vh] sm:h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className=' w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10'>
                    <div className=' flex items-center justify-center h-[25vw] w-[25vw] sm:h-[15vw] sm:w-[15vw] bg-zinc-100 rounded-full'>
                        <div style={{ transform: `translate(${moveEye[0]}%, ${moveEye[1]}%)` }} className='relative h-[60%] w-[60%] sm:h-2/3 sm:w-2/3 bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full relative top-1/2 left-1/2'>
                                <div className=' h-3 w-3 sm:h-6 sm:w-6 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-center h-[25vw] w-[25vw] sm:h-[15vw] sm:w-[15vw] bg-zinc-100 rounded-full'>
                        <div style={{ transform: `translate(${moveEye[0]}%, ${moveEye[1]}%)` }} className='relative h-[60%] w-[60%] sm:h-2/3 sm:w-2/3 bg-zinc-900 rounded-full'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='w-full relative top-1/2 left-1/2'>
                                <div className='h-3 w-3 sm:h-6 sm:w-6 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes