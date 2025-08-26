import { div } from 'motion/react-client'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../ThemeContext/ThemeContextProvider'

const SideMenu = () => {

    const [toggle,setToggle] = useState(false)
    const {changeTheme,theme,darkMode,setDarkMode,stripe,setStripe} = useContext(ThemeContext)
    
  

        const handleForm = (e)=>{
            e.preventDefault()
        }
  return (
    // top-1/2 left-0 -translate-y-2/2
    <div className='fixed z-4  tracking-wide top-1/2 left-0  -translate-y-1/2 '>
            <div className="main flex items-center flex-row-reverse">
                                <div className='flex flex-col '>
                           <button onClick={()=> setToggle(!toggle)} className='  rounded-r-sm  mb-[2px] bg-[#002348] text-white  py-3  px-3 '>
            <svg stroke="currentColor" className=''  fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
        </button>
        <button onClick={()=> setToggle(!toggle)} className='  rounded-r-sm  mb-[2px] bg-[#002348] text-white  py-3  px-3 '>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
        </button>
                </div>


    {/* side */}
        <div >
            {toggle && (
                <div className="div  bg-[#002348] ">
                    <form onSubmit={handleForm} action="">
                        <div className="mainfom overflow-y-scroll max-h-screen" >
                            <div style={{padding:"16px 30px 10px"}}>

                            <div className="heading text-white font-medium text-[0.98em] mb-2" >
                                <h4>Theme Color</h4>
                            </div>
                            <div className="formdata  text-[0.83em]">
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Primary Color</h5>
                                <div className="color divide-x-1 divide-line divide-gray-200  flex border bg-white border-none items-center input-group-text    rounded-sm">
                                  <div className=''>
                                      <input type="color" value={theme.primaryClr} onChange={(e)=> changeTheme("primaryClr",e.target.value)} className=' w-[20px] h-[23px] me-2 rounded-md   ' name="" id=""  /> 
                                  </div>
                                    <input type="text" value={theme.primaryClr} onChange={(e)=> changeTheme("primaryClr",e.target.value)} className='rounded-r-sm  py-0  border-none'  />
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Secondary Color</h5>
                                <div className="color divide-x-1 divide-line divide-gray-200  flex border bg-white border-none items-center input-group-text    rounded-sm">
                                  <div className=''>
                                      <input type="color" value={theme.secondryClr} onChange={(e)=> changeTheme("secondryClr",e.target.value)} className=' w-[20px] h-[23px] me-2 rounded-md   ' name="" id=""  /> 
                                  </div>
                                    <input type="text" value={theme.secondryClr} onChange={(e)=> changeTheme("secondryClr",e.target.value)} className='rounded-r-sm  py-0  border-none'  />
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Text Color</h5>
                                <div className="color divide-x-1 divide-line divide-gray-200  flex border bg-white border-none items-center input-group-text    rounded-sm">
                                  <div className=''>
                                      <input type="color" value={theme.textClr} onChange={(e)=> changeTheme("textClr",e.target.value)} className=' w-[20px] h-[23px] me-2 rounded-md   ' name="" id=""  /> 
                                  </div>
                                    <input type="text" value={theme.textClr} onChange={(e)=> changeTheme("textClr",e.target.value)} className='rounded-r-sm  py-0  border-none'  />
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Teritory Color</h5>
                                <div className="color divide-x-1 divide-line divide-gray-200  flex border bg-white border-none items-center input-group-text    rounded-sm">
                                  <div className=''>
                                      <input type="color" value={theme.teritoryClr} onChange={(e)=> changeTheme("teritoryClr",e.target.value)} className=' w-[20px] h-[23px] me-2 rounded-md   ' name="" id=""  /> 
                                  </div>
                                    <input type="text" value={theme.teritoryClr} onChange={(e)=> changeTheme("teritoryClr",e.target.value)} className='rounded-r-sm  py-0  border-none'  />
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Gray Color</h5>
                                <div className="color divide-x-1 divide-line divide-gray-200  flex border bg-white border-none items-center input-group-text    rounded-sm">
                                  <div className=''>
                                      <input type="color" value={theme.grayClr} onChange={(e)=> changeTheme("grayClr",e.target.value)} className=' w-[20px] h-[23px] me-2 rounded-md   ' name="" id=""  /> 
                                  </div>
                                    <input type="text" value={theme.grayClr} onChange={(e)=> changeTheme("grayClr",e.target.value)} className='rounded-r-sm  py-0  border-none'  />
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Header Menu</h5>
                                <div className="     bg-white border-none     flex  rounded-sm">
                                
                                    <select name="" className=' text-[1 em] traking-wide  font-normal text-gray-600 bg-white flex-grow rounded-lg border-none' id="">
                                        <option value="">
                                            Without Topbar
                                        </option>
                                        <option value="">
                                        1
                                        </option>
                                        <option value="">
                                           2
                                        </option>
                                    </select>
                                     
                                  
                               
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Footer Menu</h5>
                                <div className="     bg-white border-none     flex  rounded-sm">
                                
                                    <select name="" className=' text-[1em] tracking-wide  font-normal text-gray-600 bg-white flex-grow rounded-lg border-none' id="">
                                        <option value="">
                                            Large Topbar
                                        </option>
                                        <option value="">
                                        1
                                        </option>
                                        <option value="">
                                           2
                                        </option>
                                    </select>
                                     
                                  
                               
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Main Font Family</h5>
                                <div className="     bg-white border-none     flex  rounded-sm">
                                
                                    <select name="" className=' text-[1em] traking-wide  font-normal text-gray-600 bg-white flex-grow rounded-lg border-none' onChange={(e)=> changeTheme("fontFamily",e.target.value)} value={theme.fontFamily} id="">
                                        <option value="Work Sans">
                                            Work Sans
                                        </option>
                                        <option value="Playfair Display, serif">
                                        playfair
                                        </option>
                                        <option  value="">
                                           Custom Fonts
                                        </option>
                                    </select>
                                     
                                  
                               
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Layouts Switcher</h5>
                                <div className="      border-none     flex style-switchers  rounded-sm">
                                
                               <button value={"100%"} onClick={(e)=>changeTheme("wideWidth",e.target.value)}  className={`p-2 rounded 
            ${theme.wideWidth === "100%" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Wide
                               </button>
                               <button value={"1200px"} onClick={(e)=>changeTheme("wideWidth",e.target.value)}  className={`p-2 rounded 
            ${theme.wideWidth === "1200px" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Boxed
                               </button>
                                  
                               
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Background Color</h5>
                                <div className="border-none  flex style-switchers  rounded-sm">
                                
                               <button  value={"light"} onClick={()=> setDarkMode("light")} className={`p-2 rounded 
            ${darkMode === "light" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Light
                               </button>
                               <button value={"dark"} onClick={()=> setDarkMode("dark")}  className={`p-2 rounded 
            ${darkMode === "dark" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Dark
                               </button>
                                  
                               
                                </div>
                                </div>




                                <div className="singleData mb-3">
                                       <h5 className='mb-2'> Search Type</h5>
                                <div className="border-none  flex style-switchers  rounded-sm">
                                
                               <button  value={"light"} onClick={()=> setDarkMode("light")} className={`p-2 rounded 
            ${darkMode === "light" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Show
                               </button>
                               <button value={"dark"} onClick={()=> setDarkMode("dark")}  className={`p-2 rounded 
            ${darkMode === "dark" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Hide
                               </button>
                                  
                               
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'> Language Type</h5>
                                <div className="border-none  flex style-switchers  rounded-sm">
                                
                               <button  value={"light"} onClick={()=> setDarkMode("light")} className={`p-2 rounded 
            ${darkMode === "light" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Show
                               </button>
                               <button value={"dark"} onClick={()=> setDarkMode("dark")}  className={`p-2 rounded 
            ${darkMode === "dark" ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Hide
                               </button>
                                  
                               
                                </div>
                                </div>
                                <div className="singleData mb-3">
                                       <h5 className='mb-2'>Page Stripe</h5>
                                <div className="border-none  flex style-switchers  rounded-sm">
                                
                               <button  value={stripe} onClick={()=> setStripe(true)} className={`p-2 rounded 
            ${stripe ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Show
                               </button>
                               <button value={stripe} onClick={()=> setStripe(false)}  className={`p-2 rounded 
            ${!stripe ? "bg-white text-black" : "bg-black text-white"}`}
        >
                                Hide
                               </button>
                                  
                               
                                </div>
                                </div>




            
                            </div>
                            </div>

                            <div className='text-sm flex  justify-center items-center gap-3 mb-5 border-t border-white text-white' style={{padding:"18px 30px 15px"}}>
                                
                                    <button type='submit' className='px-3 border rounded py-1 bg-[var(--primaryClr)]'>Submit</button>
                                    <button type='reset' className='px-3 border rounded py-1 bg-[var(--primaryClr)]'>Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>

              
            </div>
        </div>
  )
}

export default SideMenu