import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'

import { stripHtml } from '../../../utils/strngreducer'
import GradientText from '../../GradientText/GradientText'
import { h4 } from 'motion/react-client'
import { domToReact } from 'html-react-parser'
import { FaCheck } from 'react-icons/fa'
import parse from "html-react-parser"
const PreMadeLayout = () => {

    const {data} = useQuery(createQueryOptions())


const base1 = data?.content?.colPos0?.[11]?.content?.items?.[0]?.contentElements?.[0]?.content
const cards = data?.content?.colPos0?.[11]?.content?.items?.[0]?.contentElements?.[1]?.content?.items

const header = base1?.bodytext ?? ""
const counte1 = base1?.contentElements?.[1]?.content ?? null

const options = {
  replace : (domNode)=>{
      if(domNode.name === "h4"){
          return(
                <h4 className='text-[24px] text-[var(--secondryClr)] mb-[8px]'>
            {domToReact(domNode.children,options)}
        </h4>
          )
      }
      if(domNode.name === "p"){
      return(
          <p className='text-[18px] text-light font-normal mb-[16px]'>
            {domToReact(domNode.children,options)}
        </p>
      )
      }
      if(domNode.name == "li"){
          return(
               <ul className='text-[16px] mt-[25px] mb-[10px]'>
          <li className='mb-[10px] flex gap-3 items-center '>
             <FaCheck  className='text-[var(--primaryClr)] font-light'/>
            {domToReact(domNode.children,options)}
          </li>
        </ul>
          )
      }
  }
}
   

    console.log(cards[0]?.contentElements[0].content.featuredText)

  return (
<div className="div overflow-hidden ">
      <div className='  max-w-7xl mx-auto'>
          <div className="title pt-[96px] pb-[64px]  ">
            <div className="heading   flex justify-center flex-col text-center">
                    <h1 className='leading-8 mx-auto max-w-[700px]'>
                      <GradientText className="" text={stripHtml(header).replace(/&nbsp;/g  ," ").split(".")[0]} />
                    </h1>
                    <p className='text-[18px] leading-7 my-[16px] pt-2 font-light  max-w-[500px] mx-auto '>
                        {stripHtml(header).replace(/&nbsp;/g," ").split(".")[1]}
                    </p>
            </div>
          
        </div>
        <div className='pt-[16px] pb-[96px]'>
       <div className="div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
        cards?.map((ele,index)=>(
            <div className="div  " key={index}>
                {
                    ele?.contentElements?.map((e,i)=>(
                        <div className="div px-[12px] mt-[24px]   " key={i}>
                                <div className="header flex flex-col border border-gray-200 ">
                                    <img src={e?.content?.image[0]?.publicUrl} style={{height:"350px",width:"390px"}} className=' mx-auto ' alt="" />
                                  <div className="content px-[60px] py-[40px] border-t border-gray-200 " >

                                      {e?.content?.featuredText && parse(e?.content?.featuredText,options) }
                                </div>
                              
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