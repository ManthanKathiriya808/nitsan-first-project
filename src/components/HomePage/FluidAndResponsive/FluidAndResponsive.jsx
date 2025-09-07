import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import { div } from 'motion/react-client'
import { stripHtml } from '../../../utils/strngreducer'
import GradientText from '../../GradientText/GradientText'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const FluidAndResponsive = () => {

    const {data} = useQuery(createQueryOptions())
    const base1 = data?.content?.colPos0[10]?.content?.items[0]?.contentElements[0]?.content?.items[0]

    const header = base1?.contentElements[0]?.content?.bodytext
    const counte1 = base1?.contentElements[1]?.content


    const base2 = data?.content?.colPos0[10]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.image[0]?.publicUrl
    const base3 = data?.content?.colPos0[10]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.image[1]?.publicUrl


  return (
    <div className='   py-[50px]  overflow-hidden lg:py-[96px] flex items-center justify-center  bg-[var(--grayClr)]/30'>
        <div className='  grid grid-cols-1 max-w-7xl lg:grid-cols-2     '>
              <div className="contents   mt-[24px] justify-center px-3 lg:px-0  flex flex-col " data-aos="fade-up">
                <div className="heading pb-[32px]">
                    <h1 className='leading-8 mb-[8px]'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("No matter what")[0]} />
                    </h1>
                    <p className='text-[18px] pt-5  max-w-[430px] font- mb-[16px] '>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("all device types")[1]}
                    </p>
                </div>
             <div className=' flex   flex-col md:flex-row justify-evenly px-[12px]' >
       {
                        counte1?.items?.map((item)=>(
                       
                            
                  <div className='  flex flex-col   items-center px-[35px] py-[32px]'>
                       {   item?.contentElements.map((ele)=>(
                            <div >

                        <div className="div1   text-start">
                      
                             


<LazyLoadImage src= {ele.content?.icon[0]?.publicUrl} effect="blur" className='mb-[20px] pb-[20px]' alt="" />
                         

                            <h1 className='text-[24px] text-[var(--secondryClr)]  mb-[20px] font-bolder '>
                                {ele.content?.header}
                            </h1>
                            <p className='text-[20px] mb-[16px]  font-light '>{stripHtml(ele.content?.text).replace(/&nbsp;/g  ," ")}</p>
                        </div>

                            </div>
                        ))  }
                        
                  </div>
               
                        ))
                    }
             </div>

              </div>
              <div className="image left-25 items-center gap-5 lg:gap-0 overflow-hidden flex flex-col px-3 lg:px-0  lg:ms-[20px] lg:relative " data-aos="fade-up">
                <LazyLoadImage src={base2} style={{width:"502px",height:"312px"}}  className='lg:absolute lg:left-0 lg:bottom-50 ' alt=""  />
                <LazyLoadImage src={base3} style={{width:"223px",height:"425px"}}  className='lg:absolute lg:left-0'  alt=""  />
              </div>
        </div>

    </div>
  )
}

export default FluidAndResponsive