import { useQuery } from '@tanstack/react-query'
import { div } from 'motion/react-client'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientText from '../../GradientText/GradientText'
import { stripHtml } from '../../../utils/strngreducer'

const OneClickSection = () => {
    const {data} = useQuery(createQueryOptions())
     const base1 = data?.content?.colPos0[7]?.content?.items[0]
const header = base1?.contentElements[0]?.content?.bodytext
const content = base1?.contentElements[1]?.content?.processBlock


  return (
    <div className="div my-10 py-10">
        <div className="title my-5 py-5 text-center">
            <div className="heading ">
                    <h1 className='leading-8'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("Set up you")[0]} />
                    </h1>
                    <p className='text-lg leading-4 font-light my-2 py-4'>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("demo install")[1]}
                    </p>
            </div>
            <div className="content flex justify-evenly py-10  my-5">
              

                {
                    content?.map((ele,index)=>(
                        <div className="div pt-10">
                               <button class="
                               bg-[var(--primaryClr)]
                               text-white
                               transition delay-150 duration-300 ease-in-out px-10 py-8 text-5xl font-light hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
                {ele.processNumber}
                </button> 
                <h3 className='py-5 my-8 text-2xl text-[var(--secondryClr)]'>{stripHtml(ele.processText)}</h3>
                        </div>
                    ))
                } 
                
            </div>
        </div>
    </div>
  )
}

export default OneClickSection