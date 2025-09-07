import parse,{ domToReact } from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import "react-lazy-load-image-component/src/effects/blur.css";

const ActingResponsibly = ({data}) => {

        const content = data?.content?.colPos0?.[2]?.content?.items?.[0]?.contentElements?.[0]?.content.items?.[1]?.contentElements
    const image = data?.content?.colPos0?.[2]?.content?.items?.[0]?.contentElements?.[0]?.content?.items?.[0]?.contentElements?.[0]?.content?.image?.[0]?.publicUrl
    const tooltip = data?.content?.colPos0?.[2]?.content?.items?.[0]?.contentElements?.[0]?.content?.items?.[0]?.contentElements?.[0]?.content?.hotspotTooltip

const options ={
    replace: (domNode)=>{
        if(domNode.name == "p"){
            return(
                <p className='mb-[16px] text-[18px] text-[var(--primaryClr)] leading-[26px] '>
                    {domToReact(domNode.children,options)}
                </p>
            )
        }
        if(domNode.name == "h2"){
            return(
                <h2 className='mb-[8px] text-[32px] font-medium text-[var(--secondryClr)] leading-[42px] '>
                    {domToReact(domNode.children,options)}
                </h2>
            )
        }
    }
}
  return (
    <div className='pt-[48px]  '>
             <div className="grid grid-cols-1   bg-[var(--grayClr)]/30  lg:grid-cols-2 ">
            <div className="images" data-aos="fade-up">
                          <div className="image relative    ">
                    <LazyLoadImage src={image} effect="blur" className='w-[100%] h-auto ' alt="" />

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

      
      <span className="absolute bottom-14 -left-[150%]  z-20 origin-left scale-0 px-6 rounded-lg border border-gray-300 bg-white py-4  w-60 shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        <div className="title text-[24px] text-[var(--secondryClr)]">{ele.hotspotTooltipTitle}</div>
        <div className="content text-[18px] ">{ele.hotspotTooltipText}</div>
      </span>
    </div>
  </div>
))}
            </div>
            </div>
            <div className="div ms-[120px]  max-w-[370px] " data-aos="fade-up">
                {
                    content &&      content?.map((e,i)=>(
                        <div className="div  " key={i}>
                                {   e?.content.bodytext && 
                           ( <div className="box pt-[48px] pb-[32px] ">
                              {  e?.content?.bodytext && parse( e?.content?.bodytext,options)}
                            </div>)
                                }
                           {
                               e?.content?.icon?.[0]?.publicUrl && e?.content?.icon?.[0]?.publicUrl ?
                            <div className="div w-[100%] ">
                               <div className="div flex     py-[32px]  px-[40px]">
                                 <div className="img me-[25px] mb-[20px]  ">
                                    <LazyLoadImage src={e?.content?.icon?.[0]?.publicUrl} effect="blur" className='w-[110px]' alt="" />
                                </div>
                                <div className="content">
                                        <h2 className=' mb-[20px] text-[var(--secondryClr)] text-[24px] leading-[34px] '>{e?.content?.iconTitle}</h2>
                                        <p className='mb-[16px]  text-[20px] leading-[28px]'>{e?.content?.text}</p>
                                </div>
                               </div>
                              </div>  : ""
                           }
                        
                        </div>
                    ))
                }
            </div>
             </div>
    </div>
  )
}

export default ActingResponsibly