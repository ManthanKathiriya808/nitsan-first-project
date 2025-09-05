import React from 'react'

const GradientBtn = ({data}) => {
    
    
  return (
          <button type="button" className="text-white font-bold  flex items-center gap-3 bg-gradient-to-br from-[var(--primaryClr)] to-[var(--teritoryClr)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-md px-[32px] py-[16px]  text-center "  > <span dangerouslySetInnerHTML={{__html:data}} /><svg className="rtl:rotate-180  h-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>

</button>
  )
}

export default GradientBtn