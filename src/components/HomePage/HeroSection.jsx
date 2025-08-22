import {  useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../queryOptions/createQueryOptions'

const HeroSection = () => {
    const {data} = useQuery(createQueryOptions())


    
    const HeroSectionContent = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[0]?.content


    const HeroImg = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.gallery?.rows[1]?.columns[1]


    const HeroSectionContentmiddleText = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[1]?.content

    const HeroSectionContentmiddleButton = data?.content?.colPos0[0]?.content?.items[0]?.contentElements[0]?.content?.items[0]?.contentElements[2]?.content


  return (
    <div className=' min-h-screen flex justify-between items-center bg-[var(--secondryClr)]'>
        <div className="grid md:grid-cols-2 h-full max-w-7xl px-5 md:py-1 gap-5 lg:gap-0 py-5 my-5 md:py-0 md:my-0 mx-auto  ">
            <div className="content flex  flex-col justify-center text-white">
                <div className="rotateTxt text-7xl  tracking-normal  font-bold">
                    {HeroSectionContent?.preText &&  (<span className='me-4'>{HeroSectionContent?.preText}</span>)} 
                    {HeroSectionContent?.rotatorBlock[0]?.rotatorText }
         
                    {/* {HeroSectionContent?.postText &&  (<span className='me-3'>{HeroSectionContent?.postText}</span>)}  */}
                    {/* {HeroSectionContent?.rotatorBlock?.map((ele)=>(
                        <div>
                            {ele.rotatorText}
                        </div>
                    ))} */}


                </div>
               <div
  dangerouslySetInnerHTML={{ __html: HeroSectionContentmiddleText?.bodytext }}
/>
               <div
  dangerouslySetInnerHTML={{ __html: HeroSectionContentmiddleButton?.bodytext }}
/>

            </div>
            <div className="images">
                <img src={HeroImg?.publicUrl} className='w-full h-auto' alt="" />
                
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection