import React from "react";
import PromoCard from "@/common/components/PromoCard";

const PromoGrid = ({ products }) => {
  // Ürün sayısına göre grid-cols-N sınıfını dinamik olarak ayarla
  const gridCols = `grid-cols-${products.length}`;

  return (
    <div className={`container grid ${gridCols} gap-4`}>
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
