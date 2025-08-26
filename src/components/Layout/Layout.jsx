import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'
import  { ThemeContext } from '../../ThemeContext/ThemeContextProvider'

const Layout = ({children}) => {

  const {darkmode} = useContext(ThemeContext)
  return (
   <>
    <div className={`z-1 relative ${darkmode === "light"}? "bg-white" : " "`}>
        <Navbar/>
        <SideMenu />
    <div className='content z-1'>
        {children}
        
    </div>
    <Footer/>
    </div>
   </>
  )
}

export default Layout