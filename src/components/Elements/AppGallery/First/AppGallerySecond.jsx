import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AppGallerySecond = ({data}) => {


    const base = data?.content?.colPos0?.[1]?.content?.items?.[0]?.contentElements?.[0]?.content
    const mockImg = base?.mockupImage?.[0]?.publicUrl
    const images = base?.image
  return (
    <div className=' flex overflow-hidden flex-col lg:items-center  lg:flex-row'>
        <div className="content max-w-[550px] ">
            <div className="box lg:ms-[140px] p-[20px] ">
                <h1 className='text-[32px] mb-[8px] font-medium text-[var(--secondryClr)] leading-[42px] '>
                    {base?.headline}
                </h1>
                <p className='text-[20px] mb-[16px] leading-[28px] '>
                    {base?.content}
                </p>
            </div>
        </div>
        <div className="slider  px-5 flex-grow  py-[96px] bg-[var(--grayClr)]/30 ">
                   <div className="     lg:relative text-start ">
            <LazyLoadImage src={mockImg} effect="black-and-white" className=' max-w-[325px] opacity-100  hidden lg:flex lg:relative z-10' />
      
             <div className="lg:absolute lg:top-[0%] lg:left-[0%]  lg:w-[115%] lg:h-auto ">
                       <Swiper
    
        centeredSlides={false}
      
         loop={true}            
        grabCursor={true}
       initialSlide={2} 
        modules={[Pagination]}
         pagination={{
    clickable: true,
  }}
  className="swiper-second"
    breakpoints={{
 
    640: {  
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: { 
 slidesPerView: 2,
      spaceBetween: 0,
    }, 
    1222: { 
 slidesPerView: 3,
      spaceBetween: 0,
    }
  }}
      >
        {
            images?.map((ele,index)=>(

    <SwiperSlide key={index} className=' rounded-lg lg:px-5  '  >
        <div className="div ">
            <LazyLoadImage effect="black-and-white" src={ele?.publicUrl} className='rounded-[20px]' /></div> </SwiperSlide>

            ))
        }

      </Swiper>
             </div>
          </div>
        </div>
    </div>
  )
}

export default AppGallerySecond