
import './App.css'
import { useQuery } from '@tanstack/react-query'
import createQueryOptions from './queryOptions/createQueryOptions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { useEffect, useState } from 'react'
import Page from './Pages/Page'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hotspots from './Pages/Hotspots'
function App() {
 
  const {data} = useQuery(createQueryOptions())


     useEffect(() => {
        AOS.init({
            duration: 1000,
       
        });
    }, []);


  return (
    <>
 

 {
  data &&    
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
      <Route path="/*" element={<Page/>} />
      <Route path='/elements/infographic-elements/hotspots' element={<Hotspots/>} />
        </Routes>
      </BrowserRouter>

 }
 
    </>
  )
}


export default App
