import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'
import  { ThemeContext } from '../../ThemeContext/ThemeContextProvider'
import Navbars from '../Navbar/Navbars'


const Layout = ({children}) => {

  const {theme,darkMode} = useContext(ThemeContext)

  return (
   <>
    <div className={`z-1 relative ${darkMode === "dark" ? "changeThemes" : " "} ${theme.wideWidth === "1200px" ? "bg-white": " " }`}>
      
        <Navbars/>
        <SideMenu />
    <div className={`content z-1 `}>
        {children}
        
    </div>
    <Footer/>
    </div>
   </>
  )
}

export default Layout