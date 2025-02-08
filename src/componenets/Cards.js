import React from 'react'

const Cards = () => {
    return (
        <div className='w-full sm:h-screen bg-zinc-900 pt-1 pb-10 sm:pb-0 px-5 sm:px-10'>
            <div className='flex flex-col sm:flex-row gap-5 mt-32'>
                <div className=" flex sm:w-1/2">
                    <div className="card relative rounded-xl flex flex-col justify-between w-full h-96 p-5 bg-[#004D43]">
                        <div><img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" /></div>
                        <span className=' border-[1px] w-fit px-5 py-2 rounded-full border-[#CDEA68] text-[#CDEA68]'>©2019-2022</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:w-1/2 gap-5">
                    <div className="card cursor-pointer relative rounded-xl flex flex-col justify-between sm:w-1/2 h-96 p-5 bg-[#253a37]">
                        <div><img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /></div>
                        <span className=' border-[1px] w-fit px-5 py-2 rounded-full border-zinc-100 uppercase tracking-tighter'>rating 5.0 on clutch</span>
                    </div>
                    <div className="card cursor-pointer relative rounded-xl flex flex-col justify-between sm:w-1/2 h-96 p-5 bg-[#253a37]">
                        <div><img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /></div>
                        <span className=' border-[1px] w-fit px-5 py-2 rounded-full border-zinc-100 uppercase tracking-tighter'>business bootcamp alumni</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards