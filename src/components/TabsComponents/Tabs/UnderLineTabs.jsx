import React, { useState } from "react";
import { domToReact } from "html-react-parser";
import parse from "html-react-parser"
import GradientText1 from "../../GradientText/GradientText1";


const UnderLineTabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState("Intuitive Page Builder");

  const options ={

      replace: (domNode)=>{
        if(domNode.name=== "p"){
            return (
              <p className='text-[18px] leading-7 font- mb-[16px]  '>
                  {domToReact(domNode.children,options)}
              </p>
            )
        }
        if(domNode.name=== "h2"){
            return (
              <h1 className='leading-8 '>
                      <GradientText1 className="" text={domToReact(domNode.children,options)} />

                 
              </h1>
            )
        }
      }
  }



  return (
    <div className="lg:px-3"> 
      {/* Tabs Header */}
      <div className=" border-b  border-gray-200 dark:border-gray-700" data-aos="fade-up">
        <ul className="flex flex-wrap justify-evenly  text-center" >
          {
            tabs && (tabs?.map((ele,index)=>(
              <div className="div " key={index}>
                 <li className="me-2">
            <button
              className={`inline-block  text-[20px] pb-1 border-b-2 rounded-t-lg ${
                activeTab === (ele?.contentTabText)
                  ? "border-blue-500 w-full text-blue-500"
                  : "border-transparent w-full hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab( (ele?.contentTabText))}
            >
              {ele?.contentTabText}
            </button>
          </li>
              </div>
            )) )
          }
         
       
        </ul>
      </div>

      {/* Tabs Content */}
      <div>

        {
          tabs && ( tabs?.map((ele,index)=>(
          <div className="div" key={index}>
               {activeTab === (ele?.contentTabText) && (

                  <div className="div">
                   {  
                      ele?.contentBlock?.map((e,index)=>(
                            <div className="py-[32px] my-8  rounded-lg grid  grid-cols-1 lg:grid-cols-2   ">
            <div className="title  my-[89px] lg:px-[12px]" data-aos="fade-up">
              
    <h1 className='leading-8'>
                    </h1>
                    
                                  { e?.contentText && parse(e.contentText,options)}       
                    
            </div>
            <div className="image   lg:my-[48px] lg:px-[12px]" data-aos="fade-up">
              <img src={e?.contentImage[0]?.publicUrl} style={{height:"100%"}}   alt="" />
            </div>
          </div>
                      ))
                    }
                  </div>
        )}
          </div>
          )))
        }
       


      </div>
    </div>
  );
};

export default UnderLineTabs;
