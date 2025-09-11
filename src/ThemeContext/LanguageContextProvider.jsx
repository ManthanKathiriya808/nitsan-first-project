import { createContext, useEffect, useState } from "react";


export const LanguageContext = createContext()


const LanguageContentProvider = ({children})=>{


    const language = JSON.parse(localStorage.getItem("language")) 
    const [ lang,setLang] = useState( language ||"EN")

   useEffect(()=>{
 localStorage.setItem("language",JSON.stringify(lang))
   },[lang])

    return(
        <LanguageContext.Provider value={{lang,setLang}}>
            {children}
        </LanguageContext.Provider>
    )

}

export default LanguageContentProvider