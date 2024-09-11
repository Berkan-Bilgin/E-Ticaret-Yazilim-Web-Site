import React from "react";
import ProductCard from "@/common/components/ProductCard"; // Ürün Kartı bileşeni
import PromoCard from "@/common/components/PromoCard"; // Promosyon Kartı bileşeni

// Mock Ürün Verisi
const products = [
  {
    label: "Lorem ipsum",
    price: "90.00₺",
    isOnSale: true,
    discount: 20,
    oldPrice: "120.00₺",
    newPrice: "90.00₺",
    sales: 150,
    rating: 4,
    reviews: 20,
    isNew: false,
  },
  {
    label: "Dolor sit amet",
    price: "100.00₺",
    isOnSale: false,
    oldPrice: "",
    newPrice: "100.00₺",
    sales: 80,
    rating: 5,
    reviews: 15,
    isNew: true,
  },
  {
    label: "Consectetur adipiscing",
    price: "80.00₺",
    isOnSale: false,
    oldPrice: "",
    newPrice: "80.00₺",
    sales: 95,
    rating: 3,
    reviews: 10,
    isNew: false,
  },
  {
    label: "Elit sed do",
    price: "95.00₺",
    isOnSale: true,
    discount: 10,
    oldPrice: "105.00₺",
    newPrice: "95.00₺",
    sales: 120,
    rating: 4,
    reviews: 18,
    isNew: true,
  },
];

const Product4Promo1Section = () => {
  return (
    <div className="container grid grid-cols-12 gap-4">
      {/* 9 birimlik ürün kartları bölümü */}
      <div className="col-span-9 grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* 3 birimlik promosyon kartı bölümü */}
      <div className="col-span-3">
        <PromoCard
          title="Ürün Adı"
          description="Bugüne özel 30% indirim!"
          buttonText="Bugüne Özel"
          bgColor="bg-gray-200"
          height="h-full"
        />
      </div>
    </div>
  );
};

export default Product4Promo1Section;
