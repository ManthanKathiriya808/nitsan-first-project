import React from 'react'
import {  LazyLoadImage } from 'react-lazy-load-image-component'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const AppGalleryFirst = ({data}) => {

    const base = data?.content?.colPos0?.[0]?.content?.items?.[0]?.contentElements?.[0]?.content
    const mockImg = base?.mockupImage?.[0]?.publicUrl
    const images = base?.image
console.log(images)
  return (
    <div className='py-[96px]'>
        <div className="     relative text-center ">
            <LazyLoadImage src={mockImg} effect="black-and-white" className=' max-w-[325px] opacity-100  relative z-10' />
      
             <div className="absolute top-[0%] left-[0%] max-w-[100%] h-[100%] ">
                       <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={100}
         loop={true}    
       initialSlide={2} 

        grabCursor={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
         className="swiper-first"
      >
        {
            images?.map((ele,index)=>(

    <SwiperSlide key={index}><LazyLoadImage effect="black-and-white" src={ele?.publicUrl}  /> </SwiperSlide>

            ))
        }

      </Swiper>
             </div>
          </div>
        </div>

  )
}

export default AppGalleryFirst