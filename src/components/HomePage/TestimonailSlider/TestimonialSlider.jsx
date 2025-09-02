import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import createQueryOptions from "../../../queryOptions/createQueryOptions";

import { MdStar } from "react-icons/md";
import domToReact from "html-react-parser/lib/dom-to-react";
import parse from "html-react-parser"






const TestimonialSlider = () => {


    const {data} = useQuery(createQueryOptions())

const base = data?.content?.colPos0?.[13]?.content?.items?.[0]
const title = base?.contentElements?.[0]?.content?.bodytext
const content = base?.contentElements?.[1]?.content?.reviewBlock
console.log(content)
const options = {
  replace: (domNode)=>{
   
 
        if(domNode.name === "span"){
            return(
                 <span class="text-[42px] mb-[8px] font-bold  ">

                {    domToReact(domNode.children,options)}
                </span>
            )
        }
   
  }
}

  return (
    <div className="bg-[var(--secondryClr)] ">
    <div className="title relative pt-[96px] pb-[16px] text-white text-center">
        
      {title && parse(title,options)}
    </div>

      <div className="relative pt-[48px] px-3 pb-[96px] mx-auto">
        <div className="absolute lg:-top-15  right-[40%]  top-[80%] lg:right-20 flex gap-5 z-10">
          <button className="custom-prev bg-white p-6 rounded-full shadow-md hover:bg-gray-100">
        <FaArrowLeft className="font-light "/>
          </button>
          <button className="custom-next bg-white p-6 rounded-full shadow-md hover:bg-gray-100">
            <FaArrowRight />
          </button>
        </div>

<div className="pb-[90px]">
  <div className="div ">

          <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop={true}
          slidesPerView={3.3}
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.3 },
          }}
        >
          {content?.map((t, i) => (
            <SwiperSlide key={i} className="">
              <div className="bg-white p-[35px] mx-[15px] h-full ">
               <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                 <div className="mb-29px">
                  <h3 className="text-[18px] font-medium text-black pt-8" style={{lineHeight:"1.2"}}>
                    {t.reviewName}
                  </h3>
                  <p className="text-[18px]">{t.reviewDesignation}</p>
                </div>
                   <div className="mt-[20px] text-[20px] text-[var(--primaryClr)] hidden lg:flex items-start flex-col justify-start">
                  <span className="font-bold ">{t.reviewStar}</span>
                  <span className="flex text-[16px]"><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></span>
                </div>
                     <p className="text-[20px] lg:hidden flex mt-[25px] w-full">{t.reviewText}</p>
               </div>
                <p className="text-[20px] hidden lg:flex mt-[25px] w-full">{t.reviewText}</p>
                  <div className="mt-[20px] text-[20px] text-[var(--primaryClr)] lg:hidden flex items-start flex-col justify-start">
                  <span className="font-bold ">{t.reviewStar}</span>
                  <span className="flex text-[16px]"><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  </div>
</div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
