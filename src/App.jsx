import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import createQueryOptions from './queryOptions/createQueryOptions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
 
  const {data,isPending,isError,error} = useQuery(createQueryOptions())
 console.log(data?.page?.mainNavigation)
   

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>

 
    </>
  )
}


export default App
