import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { createAppGalleryQueryOptions } from '../queryOptions/createQueryOptions'
import ElementsTitle from '../components/Elements/Titles/ElementsTitle'
import AppGalleryFirst from '../components/Elements/AppGallery/First/AppGalleryFirst'
import AppGallerySecond from '../components/Elements/AppGallery/First/AppGallerySecond'

import { useParams } from 'react-router-dom'

const AppGallery = () => {
  
    const {lang} = useParams()
    const {data} = useQuery(createAppGalleryQueryOptions(lang))

  return (
    <Layout>
        <ElementsTitle data={data} />
        <AppGalleryFirst data={data} />
        <AppGallerySecond data={data} />
    </Layout>
  );
}

export default AppGallery