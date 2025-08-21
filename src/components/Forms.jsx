import React, { useState } from 'react'

const Forms = () => {

    const [colour,setColour] = useState("#fd0404ff")
    const [textColor,setTextColor] =useState("#0381ffff")
    const [bgclr,setBgclr] =useState("#25ff03ff")
console.log(colour)


  return (
    <div className='border py-5 px-3 ' style={{background:bgclr}}>
        <h1>
            color changing form 
        </h1>
            <label htmlFor="">Coklor</label>
            <input type="color" name='colour' value={colour} onChange={(e)=> setColour(e.target.value)}/>
            <br />
            <label htmlFor="">text</label>
            <input type="color" name='textColor' value={textColor} onChange={(e)=> setTextColor(e.target.value)}/>
            <br /> 
            <label htmlFor="">bg</label>
            <input type="color" name='bgclr'  value={bgclr} onChange={(e)=> setBgclr(e.target.value)}/>

<br />
                <button className={`btn text-blue-600 px-5 py-3 rounded-lg`} style={{background:colour, color: textColor}}>This is colour changing</button>
    </div>
  )
}

export default Forms