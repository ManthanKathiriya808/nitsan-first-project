import React from 'react'
import Layout from '../components/Layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { createAppGalleryQueryOptions } from '../queryOptions/createQueryOptions'
import ElementsTitle from '../components/Elements/Titles/ElementsTitle'
import AppGalleryFirst from '../components/Elements/AppGallery/First/AppGalleryFirst'
import AppGallerySecond from '../components/Elements/AppGallery/First/AppGallerySecond'

const AppGallery = () => {

    const {data} = useQuery(createAppGalleryQueryOptions())

  return (
    <Layout>
        <ElementsTitle data={data} />
        <AppGalleryFirst data={data} />
        <AppGallerySecond data={data} />
    </Layout>
  );
}

export default AppGallery