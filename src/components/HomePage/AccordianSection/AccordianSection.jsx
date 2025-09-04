import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientText1 from '../../GradientText/GradientText1'
import domToReact from 'html-react-parser/lib/dom-to-react'
import parse from "html-react-parser"
import { FaPlus } from 'react-icons/fa6'

import { RiSubtractFill, RiSubtractLine } from "react-icons/ri";
const AccordianSection = () => {


    const {data} = useQuery(createQueryOptions())
    const [openIndex, setOpenIndex] = useState(null);

const toggleAccordion = (i) => {
  setOpenIndex(openIndex === i ? null : i); 
};
const base = data?.content?.colPos0?.[15]?.content?.items?.[0]
const title = base?.contentElements?.[0]?.content?.bodytext
const content = base?.contentElements?.[1]?.content?.items




const options ={
    replace: (domNode)=>{
        if(domNode.name === "span" && domNode.attribs?.class?.includes("gradient-color") ){
            return(
               
                        <GradientText1 text={domToReact(domNode.children,options)}/>
               
            )
        }
 
        if(domNode.name === "h2"){
            return(
                 <h2 class=" text-[42px] justify-center md:flex gap-3 font-bold text-[var(--secondryClr)] ">

                {    domToReact(domNode.children,options)}
                </h2>
            )
        }
        if(domNode.name === "p"){
            return(
                 <p class=" text-[18px] mb-[16px] font-normal ">

                {    domToReact(domNode.children,options)}
                </p>
            )
        }
    }
}
  return (
      <div className=' py-[96px]'>
           <div className="div px-[12px] lg:mx-[55px]  ">
               <div className="title pb-[48px]   text-center" data-aos="fade-up">
                   {title && parse(title,options)}
               </div>
           <div className="container pt-[32px]" data-aos="fade-up">
            <div className="grid  grid-cols-1 md:grid-cols-2">
                    {
                        content?.map((ele,index)=>(
                            <div className="div mt-[24px] px-[12px] " key={index}>
                                {
                                    ele?.contentElements?.[0]?.content?.accordionItem.map((e,i)=>(
            <div className="div border text-[18px]  border-[var(--grayClr)]/30  mb-[15px] " key={i}>
                                            <div className="div    px-[30px] py-[20px] font-medium " >
                                            <h1 className=' text-[var(--secondryClr)] '>
                                   <button className=' relative text-start  hover:text-[var(--primaryClr)] w-[100%]'
  onClick={() => toggleAccordion(i)} 
>
  {e.title}
  <span className='text-[var(--textClr)] absolute top-[50%] -translate-y-1/2 -right-5 '>

  {openIndex === i ? <RiSubtractLine /> : <FaPlus />}
  </span>
</button>

                                                </h1>


                                        </div>
  <div
  className={`transition-all duration-700 ease-in-out overflow-hidden ${
    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="pe-[70px] pb-[25px] ps-[30px]">
    {e.content}
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

export default AccordianSection