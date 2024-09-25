import React from "react";
import ProductCard from "./ProductCard";

const CatalogProducts = ({ products }) => {
  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CatalogProducts;
