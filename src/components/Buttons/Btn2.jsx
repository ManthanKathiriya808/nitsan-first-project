import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Btn2 = ({text}) => {
  return (
     <button className="relative  my-[10px] px-[32px] py-[14px] text-[16px] font-medium text-white hover:text-[var(--primaryClr)] bg-[var(--primaryClr)] hover:overflow-hidden group">
  <span className="relative flex items-center z-10">
    {text}
<FaArrowRightLong className="ms-[10px]" />
    </span>

  <span className="absolute bottom-0 left-0 w-full h-0 bg-white border text-[var(--primaryClr)] border-[var(--primaryClr)] transition-all duration-500 ease-in-out group-hover:h-full"></span>
</button>
  )
}

export default Btn2