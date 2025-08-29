import {  useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientBtn from '../../Buttons/GradientBtn'
import RotatingText from './RotatingText.jsx/RotatingText'
import parse from 'html-react-parser'
import { stripHtml } from '../../../utils/strngreducer'
const HeroSection = () => {
    const {data} = useQuery(createQueryOptions())


    
    const HeroSectionContent = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[0]?.content


    const HeroImg = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.gallery?.rows[1]?.columns[1]


    const HeroSectionContentmiddleText = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[1]?.content

    const HeroSectionContentmiddleButton = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[2]?.content




// console.log(HeroSectionContent?.rotatorBlock)
const rortatingText = ["modern","stunning","timeless","unique"]
  return (
    <div className=' min-h-screen  py-20 mb-7   bg-[var(--secondryClr)]'>
        <div className="grid md:grid-cols-2 h-full max-w-7xl px-5  py-20 gap-5   mx-auto  ">
            <div className="content flex  flex-col gap-5 items-start justify-center text-white">
                <div className="rotateTxt text-7xl  tracking-normal  font-bold">
                  
                    {HeroSectionContent?.preText &&  (<span className='me-4'>{HeroSectionContent?.preText}</span>)} 
                    <RotatingText texts={rortatingText}/>
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


  <a href="https://coding-space.vercel.app/" target="_blank" class="bg-gradient-to-r from-[var(--primaryClr)]  bg-[length:100%_18px]  bg-no-repeat bg-bottom"><h1 className='text-7xl  tracking-normal  font-bold'>
    {HeroSectionContentmiddleText && stripHtml(HeroSectionContentmiddleText?.bodytext).substring(0,14)}
</h1></a>

<div>
    <p className='text-xl font-light my-5'>

    {HeroSectionContentmiddleText && stripHtml(HeroSectionContentmiddleText?.bodytext).substring(14)}
    </p>
</div>

<div className='my-5'>
     <GradientBtn  data={HeroSectionContentmiddleButton?.bodytext}/>
     
    </div>    
       </div>
            <div className="images">
                <img src={HeroImg?.publicUrl} className='w-full h-auto' alt="" />
                
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection