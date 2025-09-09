import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'
import GradientText from '../../GradientText/GradientText'
import parse from 'html-react-parser'
import { stripHtml } from '../../../utils/strngreducer'
import Btn1 from '../../Buttons/Btn1'
const PreBuildWebsite = () => {
    const {data} = useQuery(createQueryOptions())

 
    
const textData = data?.content?.colPos0[1]?.content?.items[0]?.contentElements[0]?.content?.bodytext
  return (
    <div className='my-8 overflow-hidden py-5   '>
        {
          data &&    <div className="div max-w-[600px]  flex  flex-col  mx-auto text-center py-5 my-5 " data-aos="fade-up">
        {/* {
            textData && ( textData ? <GradientText text={textData}/> : {textData})
   
        } */}
          
        <h1 className=''> <GradientText text={stripHtml(textData).substring(0,21)}/></h1>

<p className='text-lg 
 font-light'>
  {stripHtml(textData)?.split("8+ Pre-Built websites")[1]?.split("Contact Us")[0]?.replace(/&nbsp;/g  ," ")}
</p>
<a href='/contact-us' className='my-5 py-5 '>

   
<Btn1 text={stripHtml(textData)?.split("few clicks.")[1]}/>



</a>
           
      </div>
        }
    </div>
  )
}

export default PreBuildWebsite