import React from 'react'

const Btn1 = ({text}) => {
  return (
     <button className="relative  px-8 text-lg py-3 text-lg font-medium text-white hover:text-[var(--primaryClr)] bg-[var(--primaryClr)] overflow-hidden group">
  <span className="relative z-10">
    {text}
    </span>
  <span className="absolute bottom-0 left-0 w-full h-0 bg-white border text-[var(--primaryClr)] border-[var(--primaryClr)] transition-all duration-500 ease-in-out group-hover:h-full"></span>
</button>
  )
}

export default Btn1