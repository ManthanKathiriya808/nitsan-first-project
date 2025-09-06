import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Btn3 = ({text}) => {
  return (
     <button className="  my-[10px] px-[32px] py-[14px] text-[16px] font-medium    text-[var(--primaryClr)] border hover:text-pink-400 ">
  <span className=" flex items-center z-10">
    {text}
<FaArrowRightLong className="ms-[10px]" />
    </span>

</button>
  )
}

export default Btn3