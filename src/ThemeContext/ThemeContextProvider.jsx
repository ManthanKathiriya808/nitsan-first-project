import React, { createContext, useEffect, useState } from 'react'


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


  const [darkMode,setDarkMode] = useState("light")
  const [stripe,setStripe] = useState(false)
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

useEffect(()=>{
     
        if(darkMode == "dark"){
            document.body.classList.add("changeThemes")
        }else{
           document.body.classList.remove("changeThemes") 
        }

        if(stripe){
          document.body.classList.add("stripe-bg")
        }else{
          document.body.classList.remove("stripe-bg")

        }
    
},[darkMode,stripe])
  return (
    
    <ThemeContext.Provider value={{changeTheme,theme,darkMode,setDarkMode,stripe,setStripe}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider