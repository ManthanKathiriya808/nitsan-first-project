import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import { div } from 'motion/react-client'
import { stripHtml } from '../../../utils/strngreducer'
import GradientText from '../../GradientText/GradientText'

const FluidAndResponsive = () => {

    const {data} = useQuery(createQueryOptions())
    const base1 = data?.content?.colPos0[10]?.content?.items[0]?.contentElements[0]?.content?.items[0]

    const header = base1?.contentElements[0]?.content?.bodytext
    const counte1 = base1?.contentElements[1]?.content


    const base2 = data?.content?.colPos0[10]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.image[0]?.publicUrl
    const base3 = data?.content?.colPos0[10]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.image[1]?.publicUrl


  return (
    <div className=' px-3 overflow-hidden py-5 md:px-4 my-5 min-h-screen flex items-center justify-center  bg-[var(--grayClr)]/30'>
        <div className=' py-6 grid grid-cols-1 lg:ms-5 lg:ps-10 lg:grid-cols-2 gap-10 lg:gap-8     h-full'>
              <div className="contents  justify-center  flex flex-col ">
                <div className="heading ">
                    <h1 className='leading-8'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("No matter what")[0]} />
                    </h1>
                    <p className='text-lg leading-8 font-light my-4 py-4'>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("all device types")[1]}
                    </p>
                </div>
             <div className=' flex py-5  flex-col md:flex-row justify-evenly gap-7'>
       {
                        counte1?.items?.map((item)=>(
                       
                            
                  <div className='  flex flex-col   items-center w-100'>
                       {   item?.contentElements.map((ele)=>(
                            <div >

                        <div className="div1 mt-5  text-start">
                         <h1 className='text-6xl mb-5 font-bold text-[var(--secondryClr)] flex  justify-start gap-1'>
                             


<img src= {ele.content?.icon[0]?.publicUrl} className='my-3' alt="" />
                         </h1>

                            <h1 className='text-2xl text-[var(--secondryClr)] leading-8  mb-2 font-bolder '>
                                {ele.content?.header}
                            </h1>
                            <p className='text-lg mt-5 leading-7 font-light '>{stripHtml(ele.content?.text).replace(/&nbsp;/g  ," ")}</p>
                        </div>

                            </div>
                        ))  }
                        
                  </div>
               
                        ))
                    }
             </div>

              </div>
              <div className="image  left-25 overflow-hidden flex flex-col gap-6 items-center py-5 lg:py-0 lg:relative ">
                <img src={base2} style={{width:"502px",height:"312px"}} className='lg:absolute lg:left-0 lg:bottom-25' alt=""  />
                <img src={base3} style={{width:"223px",height:"425px"}} className='lg:absolute lg:left-0'  alt=""  />
              </div>
        </div>

    </div>
  )
}

export default FluidAndResponsive