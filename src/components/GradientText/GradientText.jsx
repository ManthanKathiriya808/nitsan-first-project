import React from 'react'

const GradientText = ({text}) => {
  return (
    <div><h1 className="bg-gradient-to-r text-[42px] font-bold tracking-wid from-[var(--primaryClr)] to-[var(--teritoryClr)] text-base/14 inline-block text-transparent bg-clip-text"><span dangerouslySetInnerHTML={{__html:text}} /></h1></div>
  )
}

export default GradientText