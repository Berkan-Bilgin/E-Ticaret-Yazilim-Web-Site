"use client"; // Eğer Next.js kullanıyorsanız bu satırı eklemelisiniz
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryItem from "./CategoryItem"; // Kategori öğesi bileşeni
import {
  faBriefcaseMedical,
  faLaptopMedical,
  faSyringe,
  faStethoscope,
  faPills,
  faHospital,
  faXRay,
  faTeeth,
  faMicroscope,
  faBandAid,
  faHeartbeat,
  faFirstAid,
} from "@fortawesome/free-solid-svg-icons";

// Kategoriler listesi
const categories = [
  { icon: faBriefcaseMedical, label: "FIRSATLAR" },
  { icon: faLaptopMedical, label: "KATEGORİ" },
  { icon: faSyringe, label: "KATEGORİ" },
  { icon: faStethoscope, label: "KATEGORİ" },
  { icon: faPills, label: "KATEGORİ" },
  { icon: faHospital, label: "KATEGORİ" },
  { icon: faXRay, label: "KATEGORİ" },
  { icon: faTeeth, label: "KATEGORİ" },
  { icon: faMicroscope, label: "KATEGORİ" },
  { icon: faBandAid, label: "KATEGORİ" },
  { icon: faHeartbeat, label: "KATEGORİ" },
  { icon: faFirstAid, label: "KATEGORİ" },
];

const CategoryCarousel = () => {
  return (
    <div className="w-full py-4 bg-purple-400 ">
      <Swiper
        autoHeight={true} // Yükseklik dinamik olacak
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20} // Aradaki boşluklar
        slidesPerView={9} // Aynı anda gösterilecek kategori sayısı
        pagination={{ clickable: true }} // Pagination noktaları aktif
        navigation={{
          nextEl: ".swiper1-button-next",
          prevEl: ".swiper1-button-prev",
        }} // Özelleştirilmiş buton sınıfları
        className="mySwiper1"
      >
        {/* Kategori itemlarını döndürme */}
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryItem icon={category.icon} label={category.label} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
