import React from "react";
import ProductSwiper from "@/common/components/ProductSwiper";
import ProductList from "@/common/components/ProductList";
import PromoCard from "@/common/components/PromoCard";
import BlogSwiper from "@/common/components/BlogSwiper";

// 5 Adet Mock Data
const products = [
  {
    isOnSale: true,
    discount: 15,
    name: "Laptop",
    oldPrice: "5000.00",
    newPrice: "4250.00",
    sales: 200,
    rating: 4,
    reviews: 35,
  },
  {
    isOnSale: false,
    discount: 0,
    name: "Kulaklık",
    oldPrice: "300.00",
    newPrice: "300.00",
    sales: 150,
    rating: 5,
    reviews: 45,
  },
  {
    isOnSale: true,
    discount: 30,
    name: "Akıllı Telefon",
    oldPrice: "7000.00",
    newPrice: "4900.00",
    sales: 400,
    rating: 4,
    reviews: 120,
  },
  {
    isOnSale: false,
    discount: 0,
    name: "Bluetooth Hoparlör",
    oldPrice: "450.00",
    newPrice: "450.00",
    sales: 90,
    rating: 3,
    reviews: 10,
  },
  {
    isOnSale: true,
    discount: 20,
    name: "Akıllı Saat",
    oldPrice: "1500.00",
    newPrice: "1200.00",
    sales: 300,
    rating: 4,
    reviews: 60,
  },
];

const PromoSidebar = () => {
  return (
    <div className="">
      <ProductSwiper />
      <ProductList products={products} />
      <PromoCard
        title="KADINLAR"
        description="ÜRÜNLERDE %30 İNDİRİM"
        buttonText="ŞİMDİ AL"
        bgColor="bg-gray-300"
        height="h-full"
      />
      <BlogSwiper />
    </div>
  );
};

export default PromoSidebar;
