import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import { div, h2 } from 'motion/react-client'
import GradientText1 from '../../GradientText/GradientText1'
import domToReact from 'html-react-parser/lib/dom-to-react'
import parse from 'html-react-parser'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const MoreFeaturesCard = () => {

    const {data} = useQuery(createQueryOptions())

const base = data?.content?.colPos0?.[12]?.content?.items?.[0]
const title = base?.contentElements?.[0]?.content?.bodytext
const box1 = base?.contentElements?.[1]?.content?.items
const box2 = base?.contentElements?.[2]?.content?.items
const box3 = base?.contentElements?.[3]?.content?.items


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
        <div className="div px-[12px] lg:mx-[40px]  ">
            <div className="title pt-[95px]  pb-[48px] text-center" data-aos="fade-up">
                {title && parse(title,options)}
            </div>
            <div className="content ">
           
                <div className="box1 items-stretch  place-items-center grid grid-cols-1  lg:grid-cols-3" data-aos="fade-up">
                        {
                            box1?.map((ele,index)=>(
                                <div className="div px-[12px] mt-[24px]" key={index}>
                                    {
                                        ele?.contentElements?.map((e,i)=>(
                                             <div className="div bg-white h-full px-[40px] pt-[32px] lg:items-start lg:gap-8 lg:flex" key={i}>
                             <div className="icon  ">
                                    <LazyLoadImage src={e?.content?.icon[0]?.publicUrl} effect="blur" className='   mr-[25px] mb-[20px] w-[32px] lg:w-[80px]  ' alt="" />
                                </div>
                                <div className="content">
                                    <h2 className='text-[24px] text-[var(--secondryClr)] mb-[20px]'>
                                        {e?.content?.header}
                                    </h2>
                                    <p className='text-[20px] font-normal mb-[16px]'>
                                        {e?.content?.text}
                                    </p>
                                </div>
                               </div> 
                                        ))
                                    }


                                </div>
                             
                            ))
                        }
                </div>
                <div className="box1 place-items-center grid grid-cols-1 pt-[12px] items-stretch  lg:grid-cols-3" data-aos="fade-up">
                        {
                            box2?.map((ele,index)=>(
                                <div className="div   px-[12px] mt-[24px]" key={index}>
                                    {
                                        ele?.contentElements?.map((e,i)=>(
                                             <div className="div bg-white px-[40px] pt-[32px] h-full lg:items-start lg:gap-8 lg:flex" key={i}>
                            <div className="icon  ">
                                    <LazyLoadImage src={e?.content?.icon[0]?.publicUrl} effect="blur" className='   mr-[25px] mb-[20px] w-[32px] lg:w-[80px]  ' alt="" />
                                </div>
                                <div className="content">
                                    <h2 className='text-[24px] text-[var(--secondryClr)] mb-[20px]'>
                                        {e?.content?.header}
                                    </h2>
                                    <p className='text-[20px] font-normal mb-[16px]'>
                                        {e?.content?.text}
                                    </p>
                                </div>
                               </div> 
                                        ))
                                    }


                                </div>
                             
                            ))
                        }
                </div>
                <div className="box1 items-stretch  place-items-center grid grid-cols-1 pt-[12px] pb-[64px] lg:grid-cols-3" data-aos="fade-up">
                        {
                            box3?.map((ele,index)=>(
                                <div className="div px-[12px] mt-[24px]" key={index}>
                                    {
                                        ele?.contentElements?.map((e,i)=>(
                                             <div className="div bg-white h-full px-[40px] pt-[32px] lg:items-start lg:gap-8 lg:flex" key={i}>
                                <div className="icon  ">
                                    <LazyLoadImage src={e?.content?.icon[0]?.publicUrl} effect="blur" className='   mr-[25px] mb-[20px] w-[32px] lg:w-[80px]  ' alt="" />
                                </div>
                                <div className="content">
                                    <h2 className='text-[24px] text-[var(--secondryClr)] mb-[20px]'>
                                        {e?.content?.header}
                                    </h2>
                                    <p className='text-[20px] font-normal mb-[16px]'>
                                        {e?.content?.text}
                                    </p>
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

export default MoreFeaturesCard