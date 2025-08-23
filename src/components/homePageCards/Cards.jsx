import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Cards = ({ele}) => {
  return (
     <div className="single-card">
                <div className="box hover:bg-white hove:ease-in-out hover:duration-600 relative inline-block pb-3 
             after:content-[''] after:absolute after:left-0 after:bottom-0 
             after:w-0 after:h-[4px] after:bg-[var(--primaryClr)]
             after:transition-all after:duration-300 hover:after:w-full bg-[var(--grayClr)]/30" style={{padding:"35px 35px 38px"}}>
                  <a href={ele.contentElements[0]?.content?.contentLink?.href}>
                    <img src={ele.contentElements[0]?.content?.icon[0]?.publicUrl} alt="" />

                    <p className='mt-3 text-3xl'>{ele.contentElements[0]?.content?.contentLink?.contentLinkText} </p>
                     </a>  
                     <a href="" className='flex  items-center gap-2 text-lg mt-5 pt-4'>{ele.contentElements[0]?.content?.contentLinkText} <FaArrowRight /></a>
                </div>
            </div>  
  )
}

export default Cards