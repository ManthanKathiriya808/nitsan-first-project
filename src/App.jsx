
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {SyncLoader} from "react-spinners"


const Home = lazy(()=> import("./Pages/Home"))
const Hotspots = lazy(()=> import("./Pages/Hotspots"))
const Page = lazy(()=> import("./Pages/Page"))

function App() {
 


     useEffect(() => {
        AOS.init({
            duration: 1000,
       
        });
    }, []);


  return (
    <>
 
  
   <BrowserRouter>
   <Suspense   fallback={<div className="h-screen w-[100%] flex justify-center items-center "><SyncLoader color="#00fff7" /></div>}>  


        <Routes>
          <Route path='/' element={<Home/>} />
      <Route path="/*" element={<Page/>} />
      <Route path='/elements/infographic-elements/hotspots' element={<Hotspots/>} />
        </Routes>
   </Suspense>
  </BrowserRouter>

 
 
    </>
  )
}


export default App
