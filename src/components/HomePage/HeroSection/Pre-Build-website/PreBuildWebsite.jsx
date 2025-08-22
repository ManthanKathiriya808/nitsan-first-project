import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../../queryOptions/createQueryOptions'
import GradientText from '../../../GradientText/GradientText'
import parse from 'html-react-parser'
const PreBuildWebsite = () => {
    const {data} = useQuery(createQueryOptions())

 
    
const textData = data?.content?.colPos0[1]?.content?.items[0]?.contentElements[0]?.content?.bodytext
  return (
    <div className='my-5 mx-auto py-5  justify-center flex '>
      <div className="div py-5 my-5 ">
        {/* {
            textData && ( textData ? <GradientText text={textData}/> : {textData})
   
        } */}
           {textData && parse(textData)}
      </div>
    </div>
  )
}

export default PreBuildWebsite