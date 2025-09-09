import React from 'react'
import ContactTitle from './contactTitle/ContactTitle'
import BtnWithoutIcon from '../Buttons/BtnWithoutIcon'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css';
const ThirdForm = ({data}) => {


        const base = data?.content
    const title = base?.colPos0[5]?.content?.bodytext

    const base1 = base?.colPos0[6]?.content?.items[0]?.contentElements[0]?.content
    const maps = base1?.items[0]?.contentElements
    const content = base1?.items[1]?.contentElements[0]?.content?.form_additional
    const formData = content?.renderables[0]?.renderables 
  return (
         <div>
        <ContactTitle data={title} />
            <div className="main py-[96px] bg-[var(--grayClr)]/30 ">
        <div className="mx-auto max-w-[1320px] grid gird-cols-1 lg:grid-cols-2 ">
            <div className="map px-[12px] mt-[24px] ">
                    {
                        maps?.map((ele,index)=>(
                            <div className="div px-[40px] md:flex flex-cols   ">
                                <div className="img p-[18px] mb-[20px] bg-white rounded-full w-[65px] h-[65px]  me-[25px] ">
                                    <LazyLoadImage src={ele?.content?.icon[0]?.publicUrl} effect="blur" className='max-w-[32px] ' />
                                </div>
                                <div className="content">
                                    <h2 className=' text-[24px] mb-[20px] text-[var(--secondryClr)] leading-[34px] font-medium '>
                                        {
                                            ele?.content?.iconTitle
                                        }
                                    </h2>
                                    <p className='text-[20px] mb-[16px] leading-[28px] font-light '>
                                        { 
                                            ele?.content?.text
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div className="form  px-[12px] mt-[24px]">
                <form action="" className='p-[60px] text-center bg-white '>
                    <div className="title">
                        <h2 className='text-[24px] mb-[8px] leading-[34px] text-[var(--secondryClr)] '>
                        {content?.header}
                        </h2>
                  
                    </div>
                        {
                            formData?.map((ele,index)=>(
                                <div className="div " key={index}>

                                    {
                                        ele.type === "Textarea" ?
                                        <textarea type={ele?.type} className='px-[20px]  pt-[15px] bg-[var(--grayClr)]/15 w-[100%] min-h-[120px] leading-[30px] focus:bg-white  placeholder:text-gray-400 border-none ' placeholder={ele?.properties?.fluidAdditionalAttributes?.placeholder} required >

                                        </textarea>
                                        :
                                               <input type={ele?.type} className='px-[20px]  mb-[15px] bg-[var(--grayClr)]/15 w-[100%]  h-[60px] leading-[30px] focus:bg-white  placeholder:text-gray-400 border-none ' placeholder={ele?.properties?.fluidAdditionalAttributes?.placeholder} required />
                                    }

                             
                                </div>
                            ))
                        }
                        <BtnWithoutIcon   text={content?.renderingOptions?.submitButtonLabel} />


                       
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ThirdForm