import React from 'react'
import Layout from '../components/Layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { createHotspotsQueryOptions } from '../queryOptions/createQueryOptions'
import ElementsTitle from '../components/Elements/Titles/ElementsTitle'
import AppleDiscount from '../components/Elements/HotSpots/AppleDiscount/AppleDiscount'
import DesignAndReady from '../components/Elements/HotSpots/DesignAndReady/DesignAndReady'
import ActingResponsibly from '../components/Elements/HotSpots/ActingResponsibly/ActingResponsibly'
import Drone from '../components/Elements/HotSpots/Drone/Drone'

const Hotspots = () => {

    const {data} = useQuery(createHotspotsQueryOptions())

  return (
    <Layout>
        <ElementsTitle data={data}/>
        <AppleDiscount data={data}/>
        <DesignAndReady data={data}/>
        <ActingResponsibly data={data} />
        <Drone data={data} />
    </Layout>
  );
}

export default Hotspots