import React, { useState } from "react";
import GradientText from "../../GradientText/GradientText";
import { div } from "motion/react-client";
import { stripHtml } from "../../../utils/strngreducer";

const UnderLineTabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState("Intuitive Page Builder");

  return (
    <div>
      {/* Tabs Header */}
      <div className="mb-4 border-b  border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap justify-evenly  text-xl text-center">
          {
            tabs && (tabs?.map((ele,index)=>(
              <div className="div" key={index}>
                 <li className="me-2">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === (ele?.contentTabText)
                  ? "border-blue-500  text-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
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
                            <div className="p-4 my-5 lg:my-10 py-4 lg:py-10  rounded-lg grid  grid-cols-1 lg:grid-cols-2 place-items-center   gap-3 lg:gap-20 ">
            <div className="title  ">
              
    <h1 className='leading-8'>
                      <GradientText className="" text= {(e?.contentText).split("Create and customize a professional")[0]} />
                    </h1>
                     <p className='text-lg leading-7 font-light my-2 py-4  mx-auto '>
                                           
{stripHtml(e?.contentText).replace(/&nbsp;/g," ").replace(/&amp;/g," ")} 
                                        </p>
            </div>
            <div className="image   ">
              <img src={e?.contentImage[0]?.publicUrl} style={{height:"100%"}} className="  "  alt="" />
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
