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

const ProductSwiperSection = ({ title, productList, swiperName }) => {
  return (
    <div className="bg-lime-400">
      <div className="flex items-center justify-between">
        <SectionHeader title={title} />
        <SectionNavigation swiperName={swiperName} />
      </div>
      <Swiper
        modules={[Navigation, Pagination]} // Swiper modülleri
        spaceBetween={20} // Slide'lar arasındaki boşluk
        slidesPerView={4} // Aynı anda 4 slide gösterilecek
        loop={true}
        navigation={{
          nextEl: `.${swiperName}-next`, // Custom next button
          prevEl: `.${swiperName}-prev`, // Custom prev button
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

export default ProductSwiperSection;
