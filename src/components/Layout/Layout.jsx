import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'

const Layout = ({children}) => {
  return (
   <>
    <div className='relative bg-white'>
        <Navbar/>
        <SideMenu />
    <div className='content'>
        {children}
        
    </div>
    <Footer/>
    </div>
   </>
  )
}

export default Layout