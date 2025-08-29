import { useQuery } from '@tanstack/react-query'
import React from 'react'
import createQueryOptions from '../../../queryOptions/createQueryOptions'

import { div } from 'motion/react-client'
import Cards from '../../homePageCards/Cards';

const CardSection = () => {

    const {data} = useQuery(createQueryOptions())
 
const cardData1 = data?.content?.colPos0[2]?.content?.items
const cardData2 = data?.content?.colPos0[3]?.content?.items
const cardData3 = data?.content?.colPos0[4]?.content?.items
const cardData4 = data?.content?.colPos0[5]?.content?.items


  return (
    <div className='cardsection grid grid-cols-1 gap-5    px-3 '>
            <div className="card1 pb-6">
                    <div className="div grid grid-cols-1 gap-15 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 my-3">

            {
                cardData1?.map((ele,index)=>(
                    <div key={index}>

                        <Cards ele={ele}/>
                   
                    </div>
                ))
            }
      
        </div>
            </div>
            <div className="card2 pb-6">
                    <div className="div grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 my-3">

            {
                cardData2?.map((ele,index)=>(
                    <div key={index}>

                        <Cards ele={ele}/>
                   
                    </div>
                ))
            }
      
        </div>
            </div>
            <div className="card3 pb-6">
                    <div className="div grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 my-3">

            {
                cardData3?.map((ele,index)=>(
                    <div key={index}>

                        <Cards ele={ele}/>
                   
                    </div>
                ))
            }
      
        </div>
            </div>
            <div className="card4 pb-6">
                    <div className="div grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 my-3">

            {
                cardData4?.map((ele,index)=>(
                    <div key={index}>

                        <Cards ele={ele}/>
                   
                    </div>
                ))
            }
      
        </div>
            </div>
    </div>
  )
}

export default CardSection