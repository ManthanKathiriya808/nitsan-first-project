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
 

        </div>
      </div>
    </div>
  )
}

export default Footer