import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientText from '../../GradientText/GradientText'
import { stripHtml } from '../../../utils/strngreducer'
import { FaLongArrowAltRight } from "react-icons/fa";
const EasyIntrectionCard = () => {
     const {data} = useQuery(createQueryOptions())
     const base1 = data?.content?.colPos0[9]?.content?.items[0]
const header = base1?.contentElements[0]?.content?.bodytext
const cards = base1?.contentElements[1]?.content?.items

  return (
      <div className="div  overflow-hidden">
      <div className='  max-w-7xl mx-auto'>
          <div className="title   text-center" style={{padding:"96px 0px 32px"}} data-aos="fade-up">
            <div className="heading flex justify-center flex-col text-center">
                    <h1 className='leading-8'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("This template comes")[0]} />
                    </h1>
                    <p className='text-lg leading-7 font-light mt-1 max-w-[500px] mx-auto '>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("Below Products")[1]}
                    </p>
            </div>
          
        </div>
        <div style={{padding:"48px 0px 96px"}}>
       <div className="div grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3" data-aos="fade-up">
                {
        cards?.map((ele,index)=>(
            <div className="div px-[12px] mt-[24px] " key={index}>
                {
                    ele?.contentElements?.map((e,i)=>(
                        <div className="div px-[35px] py-[32px]  border border-gray-200" key={i}>
                                <div className="header flex flex-col ">
                                    <img src={e?.content?.icon[0]?.publicUrl} loading='lazy' style={{height:"56px",width:"56px"}} className='mb-10 ' alt="" />
                                    <h1 className='text-[24px] mb-[20px] text-[var(--secondryClr)]'>{e?.content?.header}</h1>
                                  <div className="content">
                                        <p className='text-[20px] mb-[16px] font-normal'>{e?.content?.text}</p>
                                </div>
                                <a href={e?.content?.link?.href} className='mt-[35px] flex gap-2 items-center'>{e?.content?.linkText} <FaLongArrowAltRight /></a>
                                    </div>
                              
                        </div>
                    ))
                }
            </div>
        ))
    }
        </div> 



        </div>
      </div>
    </div>
  )
}

export default EasyIntrectionCard