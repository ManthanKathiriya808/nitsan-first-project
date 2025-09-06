import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import createQueryOptions from "../queryOptions/createQueryOptions";
import Layout from "../components/Layout/Layout";

import domToReact from "html-react-parser/lib/dom-to-react";
import parse from "html-react-parser"
import ElementsTitle from "../components/Elements/Titles/ElementsTitle";


const Page = () => {
  const { "*": path } = useParams(); 

  const { data, isLoading, error } = useQuery(createQueryOptions(path));


  return (
    <Layout>
      <ElementsTitle data={data} />
       
    </Layout>
  );
};

export default Page;
