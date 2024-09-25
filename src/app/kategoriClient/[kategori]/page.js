"use client";
import React from "react";
import ProductCatalog from "@/features/ProductCatalog/ProductCatalog";
import { useParams } from "next/navigation";

const page = ({ params }) => {
  const { kategori } = useParams();
  return (
    <div>
      <h1>Category: {kategori}</h1>
      ProductCatalog
    </div>
  );
};

export default page;
