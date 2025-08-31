import { useQuery } from '@tanstack/react-query'
import { div } from 'motion/react-client'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientText from '../../GradientText/GradientText'
import { stripHtml } from '../../../utils/strngreducer'

const OneClickSection = () => {
    const {data} = useQuery(createQueryOptions())
     const base1 = data?.content?.colPos0[7]?.content?.items[0]
const header = base1?.contentElements[0]?.content?.bodytext
const content = base1?.contentElements[1]?.content?.processBlock


  return (
    <div className="div overflow-hidden pt-[96px]">
        <div className="title relative  text-center">
            <div className="heading pb-[16px]">
                    <h1 className=''>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("Set up you")[0]} />
                    </h1>
                    <p className='text-lg max-w-[390px] mx-auto leading-7 font-light my-2 '>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("demo install")[1]}
                    </p>
            </div>
            <div className="content  mt-8 lg:mt-0 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-evenly  ">
              

                {
                    content?.map((ele,index)=>(
                        <div key={index} className={`div   px-[40px] ${index== 0 ? "lg:mt-[50px] " : index==1 ? "lg:mt-[100px]" :"lg:mt-[150px]"}`}>
                               <button class="
                               bg-[var(--primaryClr)]
                               text-white
                               transition delay-150 duration-300 ease-in-out w-[100px] h-[100px] text-[40px] font-light hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
                {ele.processNumber}
                </button> 
                <div className="div "></div>
                <h3 className='py-5 my-8 text-[24px] font-semibold text-[var(--secondryClr)]'>{stripHtml(ele.processText)}</h3>
                        </div>
                    ))
                } 

                
            </div>
           

              <div className="div hidden lg:flex">
                  <div className="div   oneClick1"></div>
                <div className="div   oneClick2"></div>
              </div>

        </div>
    </div>
  )
}

export default OneClickSection