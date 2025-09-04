import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import createQueryOptions from "../queryOptions/createQueryOptions";
import Layout from "../components/Layout/Layout";

// helper: find breadcrumbs from navData


const Page = ({ navData }) => {
  const { "*": path } = useParams(); // catch-all route

  const { data, isLoading, error } = useQuery(createQueryOptions(path));


  if (isLoading) return <p className="p-10">Loading...</p>;
  if (error) return <p className="p-10 text-red-500">Error loading page.</p>;

  return (
    <Layout>
       <div className="div h-screen bg-[var(--primaryClr)]"></div>
    </Layout>
  );
};

export default Page;
