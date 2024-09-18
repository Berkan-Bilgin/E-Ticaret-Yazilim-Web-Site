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
    <div className=" container">
      <div className="flex px-4 items-center justify-between my-4">
        <SectionHeader title={title} />
        <SectionNavigation swiperName={swiperName} />
      </div>
      <Swiper
        modules={[Navigation, Pagination]} // Swiper modülleri
        spaceBetween={0} // Slide'lar arasındaki boşluk
        slidesPerView={2} // Aynı anda 4 slide gösterilecek
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3, // Mobilde 1 ürün göster
            spaceBetween: 10,
          },
          // Tablet ekranlar (768px ve üzeri)
          768: {
            slidesPerView: 4, // Tablette 2 ürün göster
            spaceBetween: 20,
          },
          // Masaüstü ekranlar (1024px ve üzeri)
          1024: {
            slidesPerView: 4, // Masaüstünde 4 ürün göster
            spaceBetween: 30,
          },
        }}
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
