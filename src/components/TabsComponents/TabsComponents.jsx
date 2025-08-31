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

  return (
      <div className="div overflow-hidden bg-[var(--grayClr)]/30 py-[96px]">
      <div className=' mx-[39.5px] px-[12px] '>
          <div className="title mb-[48px]  text-center">
            <div className="heading flex  justify-center flex-col text-center">
                    <h1 className='leading-8 mb-[8px]'>
                      <GradientText className="" text= {stripHtml(header).replace(/&nbsp;/g  ," ").split("We bring")[0]} />
                    </h1>
                    <p className='text-[18px] leading-7 font-light mb-[16px] max-w-[550px] mx-auto '>
                        {stripHtml(header).replace(/&nbsp;/g  ," ").split("editing tools")[1]}
                    </p>
            </div>
          
        </div>
        <div className='pt-[48px]'>
          <UnderLineTabs tabs={tabs}/>



        </div>
      </div>
    </div>
  )
}

export default TabsComponents