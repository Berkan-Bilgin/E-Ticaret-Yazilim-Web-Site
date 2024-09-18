"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Örnek ürün verisi
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
];

// Geri sayım fonksiyonu
const calculateTimeLeft = () => {
  let difference = +new Date("2024-12-31") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
      saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
      dakika: Math.floor((difference / 1000 / 60) % 60),
      saniye: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const ProductSwiper = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isClient, setIsClient] = useState(false); // İstemci tarafı kontrolü

  useEffect(() => {
    setIsClient(true); // İstemci tarafında çalıştığını belirler
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Temizlik için
  }, []);

  if (!isClient) {
    // Sunucu tarafında zamanlayıcıyı hiç render etme
    return null;
  }

  return (
    <div className="p-4 rounded-lg border-4 shadow-lg relative ">
      {/* Üst Başlık ve Yön Okları */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Yeni Fırsatlar</h3>
        <div className="flex">
          <button className="text-gray-500 hover:text-gray-700 mx-1 swiper-button-prev-custom">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 mx-1 swiper-button-next-custom">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Ürün Kartı - Swiper ile */}
      <Swiper
        modules={[Navigation, Pagination]} // Swiper modülleri
        spaceBetween={20} // Slide'lar arasındaki boşluk
        slidesPerView={1} // Aynı anda 1 slide gösterilecek
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom", // Custom next button
          prevEl: ".swiper-button-prev-custom", // Custom prev button
        }} // Custom navigasyon sınıfları
      >
        {productList.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Zaman Sayacı */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs mt-4">
        <div>
          <span>{timeLeft.gün || "00"}</span>
          <p>Gün</p>
        </div>
        <div>
          <span>{timeLeft.saat || "00"}</span>
          <p>Saat</p>
        </div>
        <div>
          <span>{timeLeft.dakika || "00"}</span>
          <p>Dakika</p>
        </div>
        <div>
          <span>{timeLeft.saniye || "00"}</span>
          <p>Saniye</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSwiper;
