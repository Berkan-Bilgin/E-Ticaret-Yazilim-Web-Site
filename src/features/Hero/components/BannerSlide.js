"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlide = () => {
  useEffect(() => {
    console.log("çalışıyor mu lan harbiden?");
  }, []);

  return (
    <div className="w-full h-96 bg-white">
      <Swiper
        autoHeight={true} //Yükseklik değiştirmek için
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x300?text=Banner+1"
            alt="Banner 1"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x300?text=Banner+2"
            alt="Banner 2"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/800x300?text=Banner+3"
            alt="Banner 3"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlide;
