import React from "react";
import HorizontalProductCard from "./HorizantalProductCard";

const ProductList = ({ title, products, layout = "list" }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div
        className={`grid ${layout === "grid" ? "grid-cols-2 gap-4" : "flex flex-col space-y-4"}`}
      >
        {products.map((product, index) => (
          <HorizontalProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
