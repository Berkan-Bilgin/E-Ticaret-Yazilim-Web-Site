"use client";
import React from "react";
import FilterSidebar from "./components/FilterSidebar";
import CatalogProducts from "@/common/components/CatalogProducts";

const ProductCatalog = () => {
  const mockProducts = [
    {
      id: 1,
      name: "Ürün 1",
      isOnSale: true,
      discount: 20,
      oldPrice: 100,
      newPrice: 80,
      sales: 150,
      rating: 4,
      reviews: 30,
      isNew: false,
    },
    {
      id: 2,
      name: "Ürün 2",
      isOnSale: false,
      oldPrice: 0,
      newPrice: 200,
      sales: 200,
      rating: 5,
      reviews: 50,
      isNew: true,
    },
    {
      id: 3,
      name: "Ürün 3",
      isOnSale: true,
      discount: 10,
      oldPrice: 150,
      newPrice: 135,
      sales: 100,
      rating: 3,
      reviews: 25,
      isNew: false,
    },
    // Daha fazla ürün ekleyebilirsiniz
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <FilterSidebar />
        <main className="flex-1">
          <CatalogProducts products={mockProducts} />
        </main>
      </div>
    </div>
  );
};

export default ProductCatalog;
