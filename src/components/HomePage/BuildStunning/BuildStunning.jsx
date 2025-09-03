import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import { useQuery } from '@tanstack/react-query'
import { domToReact } from 'html-react-parser'
import parse from "html-react-parser"
import Btn1 from '../../Buttons/Btn1'
// import {Btn1} from "../../Buttons/Btn1"
const BuildStunning = () => {

    const {data} = useQuery(createQueryOptions())

const base = data?.content?.colPos0?.[16]?.content?.items?.[0]
const title = base?.contentElements?.[0]?.content?.bodytext
const content = base?.contentElements?.[1]?.content?.bodytext


const options = {
    replace : (domNode) =>{
        if(domNode.name === "h2"){
            return(

            <h2 className='text-[42px] mb-[8px] text-white text-center font-bold' style={{lineHeight:"54px"}}>
                {domToReact(domNode.children,options)}
            </h2>
            )
        }
        if(domNode.name === "p"){
            return(

            <p className='text-[18px] mb-[16px] text-white text-center ' >
                {domToReact(domNode.children,options)}
            </p>
            )
        }
        if(domNode.name === "a"){
            return(

            <a className='text-[18px] mb-[16px] text-white text-center ' >
                <Btn1 text={domToReact(domNode.children,options)} />
            
            </a>
            )
        }
        if(domNode.name === "span" && domNode.attribs?.class?.includes("highlight-underline")){
            return(

            <span className='' >
                <a href="#" target="_blank" class="bg-gradient-to-r  from-[var(--primaryClr)]  bg-[length:100%_15px]  bg-no-repeat bg-bottom">
                  
                {domToReact(domNode.children,options)}
                </a>
            </span>
            )
        }
    }
}
  return (
    <div className='bg-[var(--secondryClr)] text-center py-[64px] '>
        <div className="title ">
                { title && parse(title,options) }
        </div>
        <p className='mb-16px'></p>
        <div className="content">
                { content && parse(content,options) }
        </div>
    </div>
  )
}

export default BuildStunning