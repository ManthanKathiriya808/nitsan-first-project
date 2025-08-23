import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import { div } from 'motion/react-client'
import { stripHtml } from '../../../utils/strngreducer'
import GradientText from '../../GradientText/GradientText'
import CountUp from './Counter'
const CounterSection = () => {

    const {data} = useQuery(createQueryOptions())
    const base1 = data?.content?.colPos0[6]?.content?.items[0]?.contentElements[0]?.content?.items[0]

    const header = base1?.contentElements[0]?.content?.bodytext
    const counte1 = base1?.contentElements[1]?.content


    const base2 = data?.content?.colPos0[6]?.content?.items[0]?.contentElements[0]?.content?.items[1]?.contentElements[0]?.content?.gallery?.rows?.["1"]?.columns?.["1"].publicUrl


  return (
    <div className=' px-3 py-5 md:px-4 my-5 min-h-screen flex items-center justify-center  bg-[var(--grayClr)]/30'>
        <div className=' py-6 grid grid-cols-1 lg:ms-5 lg:ps-10 lg:grid-cols-2 gap-10 lg:gap-4   h-full'>
              <div className="contents  justify-center  flex flex-col ">
                <div className="heading ">
                    <h1 className='leading-8'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("Each shortcode")[0]} />
                    </h1>
                    <p className='text-lg leading-8 font-light my-4 py-4'>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("imagine them.")[1]}
                    </p>
                </div>
             <div className=' flex  flex-col md:flex-row justify-evenly gap-3'>
       {
                        counte1?.items?.map((item)=>(
                       
                            
                  <div className='  flex flex-col  items-center w-100'>
                       {   item?.contentElements.map((ele)=>(
                            <div >

                        <div className="div1 ">
                         <h1 className='text-6xl mb-5 font-bold text-[var(--secondryClr)] flex  justify-center gap-1'>
                              { ele?.content?.counterData ?
                                <CountUp to= {Number(ele?.content?.counterData)}/> : ""
                              }

 {ele.content?.counterAppendeg}

                         </h1>

                            <h1 className='text-2xl leading-8  mb-2 font-bolder '>
                                {ele.content?.header}
                            </h1>
                            <p className='text-lg leading-7 font-light '>{stripHtml(ele.content?.bodytext).replace(/&nbsp;/g  ," ")}</p>
                        </div>

                            </div>
                        ))  }
                        
                  </div>
               
                        ))
                    }
             </div>

              </div>
              <div className="image   ">
                <img src={base2} style={{width:"100%"}} alt=""  />
              </div>
        </div>

    </div>
  )
}

export default CounterSection