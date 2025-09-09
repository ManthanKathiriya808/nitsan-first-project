import React from 'react'
import Layout from "../components/Layout/Layout"
import { useQuery } from '@tanstack/react-query'
import { createContactUsQueryOptions } from '../queryOptions/createQueryOptions'
import ElementsTitle from '../components/Elements/Titles/ElementsTitle'
import SubscribeToLetter from '../components/Contact-us/SubscribeToLetter'
import FirstForm from '../components/Contact-us/FirstForm'
import SecondForm from '../components/Contact-us/SecondForm'
import ThirdForm from '../components/Contact-us/ThirdForm'
const ContactUs = () => {
    const {data} = useQuery(createContactUsQueryOptions())
   
  return (
    <Layout>
        <ElementsTitle data={data} />
        <SubscribeToLetter data={data} />
        <FirstForm data={data} />
        <SecondForm data={data} />
        <ThirdForm data={data} />
    </Layout>
  )
}

export default ContactUs