import React from 'react'

import parse,{ domToReact } from 'html-react-parser'

import Btn2 from '../../../Buttons/Btn2'
const DesignAndReady = ({data}) => {

    const content = data?.content?.colPos0?.[1]?.content?.items?.[0]?.contentElements?.[0]?.content?.items?.[0]?.contentElements?.[0]?.content?.bodytext
    const image = data?.content?.colPos0?.[1]?.content?.items?.[0]?.contentElements?.[0]?.content?.items?.[1]?.contentElements?.[0]?.content?.image?.[0]?.publicUrl
    const tooltip = data?.content?.colPos0?.[1]?.content?.items?.[0]?.contentElements?.[0]?.content?.items?.[1]?.contentElements?.[0]?.content?.hotspotTooltip


        const options = {
        replace : (domNode)=>{
            if(domNode.name == "h2"){
                return(
                    <h2 className=' text-[42px]  leading-[54px] text-[var(--secondryClr)]  mb-[8px] font-semibold '>
                        { domToReact(domNode.children,options)}
                    </h2>
                )
            }

            if(domNode.name == "p"){
                return(
                    <p className=' text-[18px]    mb-[16px] leading-[26px]  '>
                        { domToReact(domNode.children,options)}
                    </p>
                )
            }
            if(domNode.name == "a" && domNode.attribs?.class?.includes("btn") ){
                return(
                    <a className='    mb-[16px] '>
                        <Btn2 text=  { domToReact(domNode.children,options)} />
                    </a>
                )
            }
        }
    }
  return (
    <div className='py-[64px]'>
        <div className="grid grid-cols-1 lg:max-w-[1320px]   mx-auto  lg:grid-cols-2">
            <div className="content px-[12px] mt-[24px]  " data-aos="fade-up">
                    {content && parse(content,options)}

            </div>
            <div className="image relative px-[12px] mt-[24px]" data-aos="fade-up">
                    <img src={image}    loading='lazy' className='w-[100%] h-auto ' alt="" />

            {tooltip?.map((ele, index) => (
  <div
    key={index}
    className="absolute"
    style={{
      left: `${ele.hotspotTooltipXPositioneg5}%`,
      top: `${ele.hotspotTooltipYPositioneg10}%`,
      transform: "translate(-50%, -50%)", 
    }}
  >
    <div className="group relative">
          <span className="absolute h-[32px] w-[32px] rounded-full bg-[var(--primaryClr)] opacity-50 animate-[ping_2s_ease-in-out_infinite]"></span>

      <button className='bg-[var(--primaryClr)]  h-[32px] w-[32px] flex justify-center items-center rounded-full z-2 text-white  '>
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="z-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      </button>

      
      <span className="absolute -top-14 right-[150%]  z-20 origin-left scale-0 px-6 rounded-lg border border-gray-300 bg-white py-4  w-60 shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        <div className="title text-[24px] text-[var(--secondryClr)]">{ele.hotspotTooltipTitle}</div>
        <div className="content text-[18px] ">{ele.hotspotTooltipText}</div>
      </span>
    </div>
  </div>
))}
            </div>
        </div>
    </div>
  )
}

export default DesignAndReady