import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import createQueryOptions from '../../queryOptions/createQueryOptions'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { stripHtml } from '../../utils/strngreducer';
import Btn1 from '../Buttons/Btn1';
import { ThemeContext } from '../../ThemeContext/ThemeContextProvider';

const Footer = () => {

  const {data} = useQuery(createQueryOptions())
const {footerTheme} = useContext(ThemeContext)
  const footer = data?.content?.colPos2[0]?.content?.items[0]?.contentElements[0]?.content
  const imgUrl = footer?.items[0]?.contentElements[0]?.content?.gallery?.rows?.["1"]?.columns?.["1"]?.publicUrl
  const content = footer?.items[0]?.contentElements[1]?.content?.bodytext

  const about = footer?.items[1]?.contentElements[0]?.content
  const resources = footer?.items[2]?.contentElements[0]?.content
  const form = footer?.items[3]?.contentElements[0]?.content?.form_additional


  return (
    <div className={`mt-5 font-normal  overflow-hidden mx-auto py-5  ${["medium","small"].includes(footerTheme) ? "max-w-7xl" : ""}`}>


      <div className={`div text-start text-[18px]  border-b border-[var(--textClr)]/10 ${footerTheme === "small" ? "mb-4": "mb-[40px] lg:mb-[80px]"}`} style={   { padding: "20px 0 10px"}}>
          <div className="class lg:px-1  px-3  flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center justify-between">
        <div className="links flex flex-col lg:flex-row  gap-[20px] text-[16px]" style={{    padding: "20px 0 10px"}}>
          { data?.page?.footerNavigation.map((ele,index)=>(
            <div className="footerLinks" key={index}>
              <a href={ele.link} className="font-light un me-4 ">{ele.title}</a>
            </div>
          ))}
        </div>
        <div className="icons gap-3 flex">
           
            <a href="">
                <FaXTwitter className="font-normal me-4 text-lg"/>
            </a>
          
          <a href="">
            <FaFacebookF className="font-normal me-4 text-lg"/>
          </a>
        <a href="">
            <FaLinkedinIn className="font-normal me-4 text-lg" />

        </a>
 

        </div>
      </div>
      </div>

      <div className={`other gap-2 border-b border-[var(--textClr)]/10 font-normal transition duration-500  pb-[64px] grid grid-cols-1 lg:grid-cols-7 ${footerTheme === "small" ? "hidden":""}`}>
          <div className="div lg:col-span-2 footer-box">
              <div className="main mb-[12px]">
                <img src={imgUrl}  alt="" />
              </div>
              <div className="content  tracking-wider font-light text-[18px] mb-[16px]">
                {stripHtml(content)}
              </div>
          </div>
          <div className="div footer-box">
            <h3 className='font-semibold text-[18px] mb-[14px] text-[var(--secondryClr)]'>
              {about?.header}
            </h3>
            <ul className='text-[16px]'>
              {
                about?.menu?.map((ele,index)=>(
                  <li key={index} className='mb-[8px] '>
                    <a href={ele.link} className='un'>{ele.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="div  footer-box">
            <h3 className='font-semibold text-[18px] mb-[14px] text-[var(--secondryClr)]'>
              {resources?.header}
            </h3>
            <ul className='text-[16px]'>
              {
                resources?.menu?.map((ele,index)=>(
                  <li key={index} className='mb-[8px] '>
                    <a href={ele.link} className='un'>{ele.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="div lg:col-span-3  footer-box">
             <h3 className='font-semibold text-[18px] mb-[14px] text-[var(--secondryClr)]'>
              {form?.header}
            </h3>
            <div className="box  w-[100%] ">
              <div className="upper relative">
                <input type="email" className='footer-form  border-gray-200 ' placeholder={form?.renderables[0]?.renderables[0]?.properties?.fluidAdditionalAttributes?.placeholder} required/>
                   <button className="  px-10  py-3 text-md font-medium text-white hover:text-[var(--primaryClr)] bg-[var(--primaryClr)] overflow-hidden footer-btn  group">
  <span className="relative z-10">
               {form?.renderingOptions?.submitButtonLabel}

    </span>
  <span className="absolute bottom-0 left-0 w-full h-0 bg-white border text-[var(--primaryClr)] border-[var(--primaryClr)] transition-all duration-500 ease-in-out group-hover:h-full"></span>
</button>
              </div>
              <div className="lower flex mt-5 items-center  text-[15px] gap-1 mb-[15px]">
                <input type="checkbox" className='rounded w-[14px] h-[14px] '/>
                <p>
                    {form?.renderables[0]?.renderables[1]?.label}
                </p>
              </div>
            </div>
          </div>
      </div>

      <div className='text-center pt-5 '>
        <p>{data?.page?.constants?.ns_basetheme?.copyright?.value}</p>
      </div>
  
    </div>
  )
}

export default Footer