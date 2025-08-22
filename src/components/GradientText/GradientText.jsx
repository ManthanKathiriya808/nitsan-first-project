import React from 'react'

const GradientText = ({text}) => {
  return (
    <div><h1 class="bg-gradient-to-r text-3xl font-bold tracking-wide from-[var(--secondryClr)] via-[var(--primaryClr)] to-[var(--teritoryClr)]  inline-block text-transparent bg-clip-text"><span dangerouslySetInnerHTML={{__html:text}} /></h1></div>
  )
}

export default GradientText