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
  { icon: faBriefcaseMedical, label: "Sağlık Hizmetleri" },
  { icon: faLaptopMedical, label: "Tele Sağlık" },
  { icon: faSyringe, label: "Aşılar" },
  { icon: faStethoscope, label: "Tıbbi Ekipman" },
  { icon: faPills, label: "İlaçlar" },
  { icon: faHospital, label: "Hastaneler" },
  { icon: faXRay, label: "Radyoloji" },
  { icon: faTeeth, label: "Diş Hekimliği" },
  { icon: faMicroscope, label: "Laboratuvar" },
  { icon: faBandAid, label: "İlk Yardım" },
  { icon: faHeartbeat, label: "Kardiyoloji" },
  { icon: faFirstAid, label: "Acil Yardım" },
];
const CategoryCarousel = () => {
  return (
    <div className="w-full pt-2 ">
      <Swiper
        autoHeight={true} // Yükseklik dinamik olacak
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0} // Aradaki boşluklar
        slidesPerView={6} // Aynı anda gösterilecek kategori sayısı
        // pagination={{ clickable: true }}
        navigation={{
          nextEl: ".category-button-next",
          prevEl: ".category-button-prev",
        }} // Özelleştirilmiş buton sınıfları
        breakpoints={{
          // 640px ve altı ekranlar
          640: {
            slidesPerView: 6, // Küçük ekranlarda 2 kategori göster
            spaceBetween: 10, // Boşlukları daha küçük yap
          },
          // 768px ve altı ekranlar
          768: {
            slidesPerView: 8, // Orta ekranlarda 4 kategori göster
            spaceBetween: 15, // Orta boyuttaki ekranlarda boşluk 15px olsun
          },
          // 1024px ve üzeri ekranlar
          1024: {
            slidesPerView: 9, // Daha büyük ekranlarda 6 kategori göster
            spaceBetween: 20, // Büyük ekranlarda boşluk 20px olsun
          },
          // 1280px ve üzeri ekranlar
          1280: {
            slidesPerView: 9, // Daha büyük ekranlarda 9 kategori göster
            spaceBetween: 20,
          },
        }}
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
