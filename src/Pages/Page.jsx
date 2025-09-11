import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import createQueryOptions from "../queryOptions/createQueryOptions";
import Layout from "../components/Layout/Layout";


import ElementsTitle from "../components/Elements/Titles/ElementsTitle";



const Page = () => {

      const {lang} = useParams()
  const { "*": path } = useParams(); 
  
  const { data } = useQuery(createQueryOptions(path,lang));


  return (
    <Layout>
      <ElementsTitle data={data} />
       
    </Layout>
  );
};

export default Page;
