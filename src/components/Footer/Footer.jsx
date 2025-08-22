import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../queryOptions/createQueryOptions'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {

  const {data} = useQuery(createQueryOptions())

  return (
    <div className='mt-5 fw-light  max-w-7xl mx-auto py-5 px-2 border-y'>
      <div className="class flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
        <div className="links flex flex-col lg:flex-row  gap-3">
          { data?.page?.footerNavigation.map((ele,index)=>(
            <div className="footerLinks">
              <a href={ele.link} className="font-light me-4 text-md">{ele.title}</a>
            </div>
          ))}
        </div>
        <div className="icons gap-3 flex">
           
            <a href="">
                <FaXTwitter className="font-light me-4 text-lg"/>
            </a>
          
          <a href="">
            <FaFacebookF className="font-light me-4 text-lg"/>
          </a>
        <a href="">
            <FaLinkedinIn className="font-light me-4 text-lg" />

        </a>
        <button type="button" class="text-white flex items-center gap-3 bg-gradient-to-br from-[var(--primaryClr)] to-[var(--teritoryClr)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-lg px-10 py-3.5 text-lg text-center ">Build Your Style<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>

</button>

        </div>
      </div>
    </div>
  )
}

export default Footer