"use client";
import React from "react";
import SectionHeader from "@/common/components/SectionHeader";
import SectionNavigation from "@/common/components/SectionNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "@/common/components/ProductCard";

const productList = [
  {
    isOnSale: false,
    discount: 20,
    isNew: false,
    oldPrice: "120.00",
    newPrice: "100.00",
    sales: 150,
    rating: 4,
    reviews: 20,
  },
  {
    isOnSale: true,
    discount: 15,
    isNew: true,
    oldPrice: "200.00",
    newPrice: "170.00",
    sales: 250,
    rating: 5,
    reviews: 30,
  },
  {
    isOnSale: false,
    discount: 0,
    isNew: true,
    oldPrice: "300.00",
    newPrice: "300.00",
    sales: 90,
    rating: 3,
    reviews: 15,
  },
  {
    isOnSale: true,
    discount: 50,
    isNew: false,
    oldPrice: "400.00",
    newPrice: "200.00",
    sales: 300,
    rating: 4,
    reviews: 40,
  },
  {
    isOnSale: true,
    discount: 50,
    isNew: false,
    oldPrice: "400.00",
    newPrice: "200.00",
    sales: 300,
    rating: 4,
    reviews: 40,
  },
];

const TopSellingSection = () => {
  return (
    <div className="">
      <div className="flex  items-center  justify-between mb-2">
        <SectionHeader title="Çok Satanlar" />
        <SectionNavigation swiperName={"top-selling"} />
      </div>
      <Swiper
        modules={[Navigation, Pagination]} // Swiper modülleri
        spaceBetween={20} // Slide'lar arasındaki boşluk
        slidesPerView={4} // Aynı anda 1 slide gösterilecek
        loop={true}
        navigation={{
          nextEl: ".top-selling-next", // Custom next button
          prevEl: ".top-selling-prev", // Custom prev button
        }} // Custom navigasyon sınıfları
      >
        {productList.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSellingSection;
