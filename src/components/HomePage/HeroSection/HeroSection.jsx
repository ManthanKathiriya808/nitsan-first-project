import {  useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientBtn from '../../Buttons/GradientBtn'
import RotatingText from './RotatingText.jsx/RotatingText'
import parse from 'html-react-parser'
import { stripHtml } from '../../../utils/strngreducer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroSection = () => {
    const {data} = useQuery(createQueryOptions())


    
    const HeroSectionContent = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[0]?.content


    const HeroImg = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.gallery?.rows[1]?.columns[1]


    const HeroSectionContentmiddleText = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[1]?.content

    const HeroSectionContentmiddleButton = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[2]?.content




// console.log(HeroSectionContent?.rotatorBlock)
const rortatingText = ["modern","stunning","timeless","unique"]
  return (
    <div className=' overflow-hidden  py-[96px] mb-7 px-3 md:px-0  bg-[var(--secondryClr)]'>
        <div className="grid md:grid-cols-2 h-full max-w-7xl   pt-[96px] gap-6   mx-auto  ">
            <div className="content flex  flex-col gap-5 items-start justify-center text-white " data-aos="fade-up">
                <div className="rotateTxt text-7xl  tracking-normal  font-bold">
                   
                   <div className="div mb-3  lg:flex">
                     {HeroSectionContent?.preText &&  (<span className='me-4'>{HeroSectionContent?.preText}</span>)} 
                    <RotatingText texts={rortatingText}/>
                   </div>
                    {/* {HeroSectionContent?.rotatorBlock[0]?.rotatorText } */}
                       
                    {/* {HeroSectionContent?.postText &&  (<span className='me-3'>{HeroSectionContent?.postText}</span>)}  */}
                    {/* {HeroSectionContent?.rotatorBlock?.map((ele)=>(
                        <div>
                            {ele.rotatorText}
                        </div>
                    ))} */}

                </div>
               {/* <div className='text-xl fw-lighter'
  dangerouslySetInnerHTML={{ __html: HeroSectionContentmiddleText?.bodytext}}
/> */}


  <a href="#" target="_blank" className="bg-gradient-to-r pb-2 from-[var(--primaryClr)]  bg-[length:100%_25px]  bg-no-repeat bg-bottom  " ><h1 className='text-7xl  tracking-normal  font-bold'>
    {HeroSectionContentmiddleText && stripHtml(HeroSectionContentmiddleText?.bodytext).substring(0,14)}
</h1></a>

<div>
    <p className='text-lg font-light tracking-wide my-2 mb-6'>

    {HeroSectionContentmiddleText && stripHtml(HeroSectionContentmiddleText?.bodytext).substring(14)}
    </p>
</div>

<div className='my-5'>
     <GradientBtn  data={HeroSectionContentmiddleButton?.bodytext}/>
     
    </div>    
       </div>
            <div className="images  " data-aos="fade-up">
                <LazyLoadImage src={HeroImg?.publicUrl} effect="blur" className='w-full h-auto' alt="" />
                
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection