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
      <div className="div my-3 py-3 lg:my-10 lg:py-10">
      <div className=' px-3 max-w-7xl mx-auto'>
          <div className="title my-5 py-5 text-center">
            <div className="heading flex justify-center flex-col text-center">
                    <h1 className='leading-8'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("This template comes")[0]} />
                    </h1>
                    <p className='text-lg leading-7 font-light my-2 py-4 max-w-[450px] mx-auto '>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("Below Products")[1]}
                    </p>
            </div>
          
        </div>
        <div className='my-5 py-5'>
       <div className="div grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-5 lg:grid-cols-3">
                {
        cards?.map((ele,index)=>(
            <div className="div py-5  px-2 " key={index}>
                {
                    ele?.contentElements?.map((e,i)=>(
                        <div className="div px-8 py-10  border border-gray-200" key={i}>
                                <div className="header flex flex-col gap-8">
                                    <img src={e?.content?.icon[0]?.publicUrl} style={{height:"56px",width:"56px"}} alt="" />
                                    <h1 className='text-2xl text-[var(--secondryClr)]'>{e?.content?.header}</h1>
                                  <div className="content">
                                        <p className='text-xl font-light'>{e?.content?.text}</p>
                                </div>
                                <a href={e?.content?.link?.href} className='my-5 flex gap-2 items-center'>{e?.content?.linkText} <FaLongArrowAltRight /></a>
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