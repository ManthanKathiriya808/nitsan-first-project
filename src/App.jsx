
import './App.css'
import { useQuery } from '@tanstack/react-query'
import createQueryOptions from './queryOptions/createQueryOptions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import {HashLoader, PacmanLoader} from "react-spinners"
import { useEffect, useState } from 'react'
import Page from './Pages/Page'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
 
  const {data,isPending,isError,error} = useQuery(createQueryOptions())
//  console.log(data?.page?.mainNavigation)
   const [showLoader,setShowLoader] = useState(false)

  useEffect(() => {
    let timer;

    if (isPending) {
      setShowLoader(true); 
    } else {
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

  }, [isPending]);

     useEffect(() => {
        AOS.init({
            duration: 1000,
       
        });
    }, []);
  if (showLoader) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <PacmanLoader color="var(--secondryClr)" />
      </div>
    );
  }

  return (
    <>
 

 {
  data &&    
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
      <Route path="/*" element={<Page/>} />
        </Routes>
      </BrowserRouter>

 }
 
    </>
  )
}


export default App
