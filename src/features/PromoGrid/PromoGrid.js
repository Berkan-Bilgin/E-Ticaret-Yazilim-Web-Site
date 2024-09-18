import React, { useEffect } from "react";
import PromoCard from "@/common/components/PromoCard";

const PromoGrid = ({ products, column }) => {
  // Telefon ekranında tek kolon, büyük ekranlarda maxColumn kadar kolon
  const gridCols = `grid-cols-1 md:grid-cols-${column}`;
  // const gridCols = `grid-cols-1 md:grid-cols-3`;

  useEffect(() => {
    console.log("grdicols", gridCols);
    console.log("column", column);
  }, []);

  return (
    <div className={`container grid ${gridCols} gap-4 my-4`}>
      {products.map((product, index) => (
        <PromoCard
          key={index}
          title={product.title}
          description={product.description}
          buttonText={product.buttonText}
          bgColor={product.bgColor}
          height={product.height}
        />
      ))}
    </div>
  );
};

export default PromoGrid;
