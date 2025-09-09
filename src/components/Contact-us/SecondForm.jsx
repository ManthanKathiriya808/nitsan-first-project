import React from 'react'
import ContactTitle from './contactTitle/ContactTitle'
import BtnWithoutIcon from '../Buttons/BtnWithoutIcon'

const SecondForm = ({data}) => {

        const base = data?.content
    const title = base?.colPos0[3]?.content?.bodytext

    const base1 = base?.colPos0[4]?.content?.items[0]?.contentElements[0]?.content
    const maps = base1?.items[0]?.contentElements[0]?.content?.mapFrame?.href
    const content = base1?.items[1]?.contentElements[0]?.content?.form_additional
    const formData = content?.renderables[0]?.renderables 
  return (
        <div>
        <ContactTitle data={title} />
            <div className="main py-[96px] bg-[var(--grayClr)]/30 ">
        <div className="mx-auto max-w-[1320px] grid gird-cols-1 lg:grid-cols-2 ">
            <div className="map px-[12px] mt-[24px] ">
                <iframe src={maps} className='w-[100%] h-[100%]' ></iframe>
            </div>
            <div className="form  px-[12px] mt-[24px]">
                <form action="" className='p-[60px] text-center bg-white '>
                    <div className="title">
                        <h2 className='text-[24px] mb-[8px] leading-[34px] text-[var(--secondryClr)] '>
                        {content?.header}
                        </h2>
                        <p className='text-[18px] mb-[40px] leading-[26px] '>
                        {content?.subheader}
                        </p>
                    </div>
                        {
                            formData?.map((ele,index)=>(
                                <div className="div  " key={index}>

                                    {
                                        ele.type === "Textarea" ?
                                        <textarea type={ele?.type} className='px-[20px] pt-[15px] bg-[var(--grayClr)]/15 w-[100%] min-h-[120px] leading-[30px] focus:bg-white  placeholder:text-gray-400 border-none ' placeholder={ele?.properties?.fluidAdditionalAttributes?.placeholder} required >

                                        </textarea>
                                        :
                                               <input type={ele?.type} className='px-[20px] bg-[var(--grayClr)]/15 w-[100%] mb-[15px]  h-[60px] leading-[30px] focus:bg-white  placeholder:text-gray-400 border-none ' placeholder={ele?.properties?.fluidAdditionalAttributes?.placeholder} required />
                                    }

                             
                                </div>
                            ))
                        }
                        <BtnWithoutIcon  text={content?.renderingOptions?.submitButtonLabel} />


                       
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SecondForm