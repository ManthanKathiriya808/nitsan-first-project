import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientText1 from '../../GradientText/GradientText1'
import domToReact from 'html-react-parser/lib/dom-to-react'
import parse from 'html-react-parser'
import { FaCheck } from "react-icons/fa6";
import Gradientbtn1 from '../../Buttons/Gradientbtn1'
const NeedHelp = () => {

    const {data} = useQuery(createQueryOptions())

const base = data?.content?.colPos0?.[14]?.content?.items?.[0]
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
    <div className='bg-[var(--grayClr)]/30 '>
        <div className="div px-[12px] lg:mx-[55px]  ">
            <div className="title pt-[96px]  pb-[48px] text-center">
                {title && parse(title,options)}
            </div>
            <div className="content pb-[96px]">

<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">


                    {
                        content?.map((ele,index)=>(
                            <div className="div px-[12px]  mt-[24px] " key={index}>
                                <div className="one py-[48px] bg-white px-[40px]" >
                                        <div className="img">
                                            <div className="span w-[65px]  ">
                                            <img src={ele?.contentElements[0]?.content?.icon[0].publicUrl} alt="" className=' p-[18px] bg-[var(--grayClr)]/30 mb-[20px]' />
                                            </div>
                                        </div>
                                        <div className="items">
                                            <h2 className='text-[24px] text-[var(--secondryClr)] mb-[20px] '>{ele?.contentElements[0]?.content?.header}</h2>
                                            <p className='mb-[16px] text-[20px] '>
                                               {ele?.contentElements[0]?.content?.text}
                                            </p>

                                            <ul className='mb-[10px]'>
                                                {
                                                    ele?.contentElements[0]?.content?.listBlock?.map((e,i)=>(
                                                       <div className="div" key={i}>
                                                        <li className='mb-[10px]'>
                                                            <p className='16px gap-3 flex items-center'> 
                                                                <FaCheck className='text-[var(--primaryClr)]'/>
                                                            {e?.list}    
                                                        </p></li>
                                                       </div>
                                                    ))
                                                }
                                            </ul>

                                            <div className='mt-[35px]'>
                                                <Gradientbtn1 data={ele?.contentElements[0]?.content?.linkText}/>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        ))
                    }
</div>
                
            </div>
        </div>
        
    </div>
  )
}

export default NeedHelp