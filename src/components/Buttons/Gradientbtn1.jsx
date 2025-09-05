import React from 'react'

const Gradientbtn1 = ({data}) => {
  return (
              <button type="button" className=" bg-gradient-to-br from-[var(--primaryClr)] to-[var(--teritoryClr)] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-[16px] my-[10px] py-[14px] px-[32px]  text-white text-center"  > <span className=""  >
                {data}
</span>
</button>
  )
}

export default Gradientbtn1