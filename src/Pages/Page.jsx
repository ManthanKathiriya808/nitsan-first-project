import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import createQueryOptions from "../queryOptions/createQueryOptions";
import Layout from "../components/Layout/Layout";

// helper: find breadcrumbs from navData


const Page = ({ navData }) => {
  const { "*": path } = useParams(); // catch-all route

  const { data, isLoading, error } = useQuery(createQueryOptions(path));

console.log(data)

  return (
    <Layout>
       <div className="div h-screen bg-[var(--primaryClr)]"></div>
    </Layout>
  );
};

export default Page;
