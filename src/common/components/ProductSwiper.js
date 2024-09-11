"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Örnek ürün verisi
const product = {
  isOnSale: false,
  discount: 20,
  isNew: false,
  oldPrice: "120.00",
  newPrice: "100.00",
  sales: 150,
  rating: 4,
  reviews: 20,
};

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
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Temizlik için
  }, []);

  return (
    <div className=" mx-auto rounded-lg shadow-lg relative w-64">
      {/* Üst Başlık ve Yön Okları */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Yeni Fırsatlar</h3>
        <div className="flex">
          <button className="text-gray-500 hover:text-gray-700 mx-1">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 mx-1">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Ürün Kartı */}
      <div className="flex justify-center mb-4">
        <ProductCard product={product} />
      </div>

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
