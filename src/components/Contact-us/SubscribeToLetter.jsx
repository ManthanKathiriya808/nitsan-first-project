
import parse,{ domToReact } from 'html-react-parser'
import React from 'react'
import BtnWithoutIcon from '../Buttons/BtnWithoutIcon'

const SubscribeToLetter = ({data}) => {

  const base = data?.content?.colPos0?.[0]?.content?.items?.[0]?.contentElements?.[0]?.content
  const title = base?.items?.[0]?.contentElements?.[0]?.content?.bodytext
  const form1 = base?.items?.[1]?.contentElements?.[0]?.content?.form_additional
  // const form2 = base?.items?.[1]?.contentElements?.[1]


  const options = {
     replace : (domNode) =>{
        if(domNode.name == "h2"){
          return(
            <h2 className='text-[32px] font-medium mb-[8px] text-[var(--secondryClr)] leading-[42px] '>
              {domToReact(domNode.children,options)}
            </h2>
          )
        }
    }
  }

  return (
    <div className='max-w-[1320px] mx-auto'>
        <div className="div py-[90px] grid grid-cols-1 lg:grid-cols-2  ">
            <div className="title mt-[24px] px-[12px] ">
              {title && parse(title,options)}
            </div>
            <div className="content mt-[24px] px-[12px] ">
                <div className="form p-[60px] ">
                    <div className="form ">
                     <input type={form1?.renderables[0]?.renderables[0]?.type}  className='px-[20px] py-0 mb-[15px] min-w-[100%] border border-gray-200 placeholder:text-gray-400  leading-[55px]  ' placeholder={form1?.renderables[0]?.renderables[0]?.properties?.fluidAdditionalAttributes?.placeholder} required/>
                   
                   <div className="label mb-[15px]">
                      <label className='flex items-center' >
                        <input type={form1?.renderables[0]?.renderables[1]?.type} className='rounded-sm border-black  ' />
                       <span className='ps-[5px] leading-[30px]'> {form1?.renderables[0]?.renderables[1]?.label}</span>
                      </label>
                   </div>

             <div className="btn text-center">
                    <BtnWithoutIcon  text={form1?.renderingOptions?.submitButtonLabel} />
             </div>
                    </div>
                </div>
                <div className="form pt-[16px] ">
   <div className="form   relative">
                     <input type={form1?.renderables[0]?.renderables[0]?.type}  className='px-[20px] py-0 mb-[15px] min-w-[100%] border border-gray-200 bg-[var(--grayClr)]/25 placeholder:text-gray-400  leading-[55px]  ' placeholder={form1?.renderables[0]?.renderables[0]?.properties?.fluidAdditionalAttributes?.placeholder} required/>
                   
                   <div className="label mb-[15px]">
                      <label className='flex items-center' >
                        <input type={form1?.renderables[0]?.renderables[1]?.type} className='rounded-sm border-black  ' />
                       <span className='ps-[5px] max-w-[80%] leading-[30px]'> {form1?.renderables[0]?.renderables[1]?.label}</span>
                      </label>
                   </div>

             <div className="btn absolute top-[-7px]  right-0   ">
                    <BtnWithoutIcon  text={form1?.renderingOptions?.submitButtonLabel} />
             </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeToLetter