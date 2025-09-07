import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import { div } from 'motion/react-client'
import { stripHtml } from '../../../utils/strngreducer'
import GradientText from '../../GradientText/GradientText'
import CountUp from './Counter'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const CounterSection = () => {

    const {data} = useQuery(createQueryOptions())
    const base1 = data?.content?.colPos0[6]?.content?.items[0]?.contentElements[0]?.content?.items[0]

    const header = base1?.contentElements[0]?.content?.bodytext
    const counte1 = base1?.contentElements[1]?.content


    const base2 = data?.content?.colPos0[6]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.gallery?.rows?.["1"]?.columns?.["1"].publicUrl


  return (
    <div className='  py-[96px] md:px-4 overflow-hidden   flex items-center justify-center  bg-[var(--grayClr)]/30'>
        <div className="  grid grid-cols-1 lg:ms-5 lg:grid-cols-2  py-[30px]  h-full ">
              <div className="contents  justify-center   flex flex-col lg:py-[40px] px-[12px] lg:mt-[24px] lg:ms-[203.164px] " data-aos="fade-up">
                <div className="heading ">
                    <h1 className='leading-8 mb-[16px]'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("Each shortcode")[0]} />
                    </h1>
                    <p className='text-[18px] leading-8 font-light mb-[16px] py-4'>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("imagine them.")[1]}
                    </p>
                </div>
             <div className=' flex items-center lg:items-start  flex-col overflow-hidden md:flex-row text-start md:justify-evenly  pt-[40px]'>
       {
                        counte1?.items?.map((item,index)=>(
                       
                            
                  <div className='  flex flex-col justify-center text-center w-100' key={index}>
                       {   item?.contentElements.map((ele,i)=>(
                            <div key={i}>

                        <div className="div1 ">
                         <h1 className='text-[72px]   font-bold text-[var(--secondryClr)] flex  justify-center '>
                              { ele?.content?.counterData ?
                                <CountUp to= {Number(ele?.content?.counterData)}/> : ""
                              }

 {ele.content?.counterAppendeg}

                         </h1>

                            <h1 className='text-[24px] mt-[13px]   font-bolder '>
                                {ele.content?.header}
                            </h1>
                            <p className='overflow-hidden leading-7 tracking-wider font-light '>{stripHtml(ele.content?.bodytext).replace(/&nbsp;/g  ," ")}</p>
                        </div>

                            </div>
                        ))  }
                        
                  </div>
               
                        ))
                    }
             </div>

              </div>
              <div className="image   px-2 lg:px-0" style={{margin:"24px 0px 0px "}} data-aos="fade-up">
                <LazyLoadImage src={base2} effect="blur" style={{width:"100%",height:"auto"}} alt=""  />
              </div>
        </div>

    </div>
  )
}

export default CounterSection