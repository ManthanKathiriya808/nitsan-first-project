import React from 'react'
import parse, { domToReact } from "html-react-parser"
import { Link } from 'react-router-dom'
const ElementsTitle = ({data}) => {


const title = data?.content?.colPos1?.[0]?.content?.items?.[0]?.contentElements?.[0]?.content?.bodytext
const breadcrumbs = data?.breadcrumbs

const options = {
  replace : (domNode)=>{
      if(domNode.name == "h1"){
        return(
          <h1 className="lg:text-[42px] text-[32px] text-[var(--secondryClr)] font-medium  pt-[17px]"  style={{lineHeight:"72px"}}>
              { domToReact(domNode.children,options)}
          </h1>
        )
      }
      if(domNode.name == "p"){
        return(
          <p className="lg:text-[18px] text-[16px] font-normal mb-[16px] ">
              { domToReact(domNode.children,options)}

          </p>
        )
      }
      if(domNode.name == "span" && domNode.attribs?.class?.includes("highlight-underline")){
        return(
          <span className=" ">

              <a href="#" target="_blank" className="bg-gradient-to-r  from-[var(--primaryClr)]  bg-[length:100%_15px]  bg-no-repeat bg-bottom  " >
               
              { domToReact(domNode.children,options)}
            </a>

          </span>
        )
      }
  }
}


  return (
        <div className="bg-[var(--grayClr)]/30 py-[96px] text-center">
          <div className="title">
            <div className="secondary-clr-title pt-[96px] pb-[32px] ] " >
{title && parse(title,options)}
            </div>
          </div>
          <div className="breadcrumbs flex justify-center flex-wrap items-center">
              {
                breadcrumbs?.map((ele,index)=>(
                  <div className="div lg:text-[16px] text-[14px] " key={index}>
                    <Link to={ele.link}>{ele.title}</Link>
                    {
                      index != breadcrumbs.length - 1 && (

                        <span className="mx-[3px]">/</span>
                      ) 
                    }
                
                  </div>
                ))
              }
          </div>
       </div>
  )
}

export default ElementsTitle