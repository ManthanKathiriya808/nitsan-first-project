import React, { createContext, useState } from 'react'


export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

  const [theme,setTheme] = useState({
      primaryClr: "#4c6fff",
  secondryClr: "#61dcdf",
  textClr: "#617798",
  teritoryClr: "#f43fe2",
  grayClr:"#cdcbcb",
  fontFamily: "Work Sans, sans-serif",
  wideWidth:"100%"
  })

  const changeTheme = (key,value)=>{
    setTheme((prev)=>({...prev, [key] : value}))

    document.documentElement.style.setProperty(`--${key}`,value)

    if(key==="wideWidth"){
      if(value === "1200px"){
        document.body.classList.add("boxed")
      }else{
        document.body.classList.remove("boxed")
      }
    }
  }

  return (
    
    <ThemeContext.Provider value={{changeTheme,theme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider