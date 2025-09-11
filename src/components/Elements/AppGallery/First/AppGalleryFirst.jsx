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

  return (
    <div className='py-[96px]'>
        <div className="     md:relative text-center ">
            <LazyLoadImage src={mockImg} effect="black-and-white" className=' max-w-[325px] opacity-100 hidden md:relative md:flex z-10' />
      
             <div className="md:absolute top-[0%] left-[0%] max-w-[100%] h-[100%] ">
      <Swiper
  centeredSlides={true}
  loop={true}
  initialSlide={2}
  grabCursor={true}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="swiper-first"
  breakpoints={{
 
    640: {  
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: { 
 slidesPerView: 3,
      spaceBetween: 30,
    }, 
    1222: { 
 slidesPerView: 4,
      spaceBetween: 100,
    }
  }}
>
  {images?.map((ele, index) => (
    <SwiperSlide key={index}>
      <LazyLoadImage
        effect="black-and-white"
        src={ele?.publicUrl}
        className="rounded-[16px] max-w-full"
      />
    </SwiperSlide>
  ))}
</Swiper>

             </div>
          </div>
        </div>

  )
}

export default AppGalleryFirst