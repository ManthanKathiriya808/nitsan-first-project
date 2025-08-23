import React from 'react'
import { stripHtml } from '../../utils/strngreducer'
import GradientText from '../GradientText/GradientText'
import { useQuery } from '@tanstack/react-query'
import createQueryOptions from '../../queryOptions/createQueryOptions'
import UnderLineTabs from './Tabs/UnderLineTabs'


const TabsComponents = () => {

    const {data} = useQuery(createQueryOptions())
     const base1 = data?.content?.colPos0[8]?.content?.items[0]
const header = base1?.contentElements[0]?.content?.bodytext
const tabs = base1?.contentElements[1]?.content?.contentTabBlock
console.log(tabs)
  return (
      <div className="div bg-[var(--grayClr)]/30 my-10 py-10">
        <div className="title my-5 py-5 text-center">
            <div className="heading flex justify-center flex-col text-center">
                    <h1 className='leading-8'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("We bring")[0]} />
                    </h1>
                    <p className='text-lg leading-7 font-light my-2 py-4 max-w-[550px] mx-auto '>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("editing tools")[1]}
                    </p>
            </div>
          
        </div>
        <div className='my-5 py-5'>
          <UnderLineTabs/>



        </div>
    </div>
  )
}

export default TabsComponents