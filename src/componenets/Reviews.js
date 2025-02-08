import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import ReviewsArray from '../assets/ReviewsArray';
const Reviews = () => {
    const [currentReviewId, setCurrentReviewId] = useState(()=>ReviewsArray[0].id)
    // const findCurrentReview = () => ReviewsArray.find((review) => (review.id === currentReviewId))
    return (
        <div className='w-full '>
            <div className=' border-b-[1px] border-zinc-600 pl-5 sm:pl-10 pb-10'>
                <h1 className='text-4xl sm:text-6xl'>Clients' reviews</h1>
            </div>
            <div className=' '>
                {ReviewsArray.map((review, index) => (
                    <div key={index} className=' pt-5 pb-5 px-5 sm:px-10 border-b-[1px] border-zinc-600'>
                        <div className='flex justify-between'>
                            <div className=' sm:w-1/4'>
                                <a href=""><span className=' border-b-[2px] border-zinc-600 capitalize'> {review.firm} </span></a>
                            </div>
                            <div className=' sm:w-1/4 hidden sm:block'>
                                <h4 className=' capitalize'>{review.services.title}</h4>
                            </div>
                            <div className=' sm:w-[35%] hidden sm:block'>
                                <h6 className=' capitalize'>{review.reviewer.name}</h6>
                            </div>
                            <div className=' sm:w-[15%] flex justify-end'>
                                <span onClick={()=>setCurrentReviewId(review.id)} className='border-b-[2px] cursor-pointer border-zinc-600 uppercase pb-1'>{review.read}</span>
                            </div>
                        </div>
                        {
                            (review.id === currentReviewId) &&
                            <div className=' flex flex-col sm:flex-row justify-between pb-5 mt-10 sm:mt-20'>
                                    <div className='w-1/4 hidden sm:block'></div>
                                <div className=' w-full sm:w-1/4 flex sm:flex-col gap-2'>
                                    {review.services.body.map((item, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <a className=' border-[1px] border-zinc-600 rounded-full w-fit px-3 py-1' href="">
                                                <span className=' uppercase'>{item}</span>
                                            </a>
                                            <div className="arrow h-8 w-8 hidden border-[1px] rounded-full border-zinc-500 items-center justify-center" > 
                                            {/* While using it make it a flex-box */}
                                                <FaArrowUpLong className='rotate-45' />
                                            </div >
                                        </div>
                                    ))}
                                </div>
                                <div className=' w-full sm:w-[35%] pt-5 sm:pt-0'>
                                    <div>
                                        <img className=' h-24 w-24 rounded-lg mb-5' src={review.reviewer.imgUrl} alt="" />
                                        <p>{review.reviewer.review}</p>
                                    </div>
                                </div>
                                    <div className='w-[15%] hidden sm:block'></div>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Reviews


