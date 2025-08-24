import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'

import { stripHtml } from '../../../utils/strngreducer'
import GradientText from '../../GradientText/GradientText'
const PreMadeLayout = () => {

    const {data} = useQuery(createQueryOptions())
const base1 = data?.content?.colPos0?.[11]?.content?.items?.[0]?.contentElements?.[0]?.content
const cards = data?.content?.colPos0?.[11]?.content?.items?.[0]?.contentElements?.[1]?.content?.items

const header = base1?.bodytext ?? ""
const counte1 = base1?.contentElements?.[1]?.content ?? null

   
    console.log(cards)

  return (
<div className="div my-3 py-3 lg:my-10 lg:py-10">
      <div className=' px-3 max-w-7xl mx-auto'>
          <div className="title my-5 py-5 text-center">
            <div className="heading   flex justify-center flex-col text-center">
                    <h1 className='leading-8 mx-auto max-w-[700px]'>
                      <GradientText className="" text={stripHtml(header).replace(/&nbsp;/g  ," ").split(".")[0]} />
                    </h1>
                    <p className='text-lg leading-7 font-light my-2 py-4 max-w-[500px] mx-auto '>
                        {stripHtml(header).replace(/&nbsp;/g," ").split(".")[1]}
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
                        <div className="div   border border-gray-200" key={i}>
                                <div className="header flex flex-col gap-8">
                                    <img src={e?.content?.image[0]?.publicUrl} style={{height:"350px",width:"390px"}} alt="" />
                                    <h1 className='text-2xl text-[var(--secondryClr)]'>{stripHtml(e?.content?.featuredText).replace(/&nbsp;/g," ").split("")[0]}</h1>
                                  <div className="content">
                                        <p className='text-xl font-light'>  {stripHtml(e?.content?.feturedText).replace(/&nbsp;/g," ").split("")[1]}</p>
                                </div>
                                {/* <a href={e?.content?.link?.href} className='my-5 flex gap-2 items-center'>{e?.content?.linkText} <FaLongArrowAltRight /></a> */}
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

export default PreMadeLayout