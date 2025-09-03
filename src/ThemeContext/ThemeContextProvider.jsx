import React, { createContext, useEffect, useState } from 'react'


export const ThemeContext = createContext()

const defaultTheme = {
  
      primaryClr: "#4c6fff",
  secondryClr: "#61dcdf",
  textClr: "#617798",
  teritoryClr: "#f43fe2",
  grayClr:"#cdcbcb",
  fontFamily: "Work Sans, sans-serif",
  wideWidth:"100%"
  
}

const ThemeContextProvider = ({children}) => {

  const savedData = JSON.parse(localStorage.getItem("customTheme")) || {};

  const [theme,setTheme] = useState({ ...defaultTheme, ...savedData.theme })


  const [darkMode,setDarkMode] = useState(savedData.darkMode || "light")
  const [stripe,setStripe] = useState(savedData.darkMode || false)
  const [showSearch,setShowSearch] = useState(savedData.showSearch || true)
  const [showLang,setShowLang] = useState(savedData.showLang || true)
  const [navTheme,setNavTheme] = useState(savedData.navTheme || "without-topbar" )
  const [footerTheme,setFooterTheme] = useState(savedData.footerTheme || "medium" )
  const [lang, setLang] = useState(savedData.lang || "EN");

  const changeTheme = (key,value)=>{
    setTheme((prev)=>({...prev, [key] : value}))

 
  }

   useEffect(() => {
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });

    if (theme.wideWidth === "1200px") {
      document.body.classList.add("boxed");
    } else {
      document.body.classList.remove("boxed");
    }
  }, [theme]);

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


const saveSettings = () =>{
  localStorage.setItem("customTheme",  JSON.stringify({ theme, darkMode, stripe ,showLang,showSearch,navTheme,footerTheme,lang}))
}

  const resetSettings = () => {
    setTheme(defaultTheme);
    setDarkMode("light");
    setStripe(false);
    localStorage.removeItem("customTheme");
  };
  return (  
    
    <ThemeContext.Provider value={{changeTheme,theme,darkMode,setDarkMode,stripe,setStripe,saveSettings,resetSettings,showLang,showSearch,setShowSearch,lang,setLang,setShowLang,navTheme,setNavTheme,footerTheme,setFooterTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider