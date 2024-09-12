"use client";
import React from "react";
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
import Image from "next/image";

// Örnek blog verisi
const blogList = [
  {
    date: "10 DEC",
    title: "Yeni Blog Başlığı 1",
    category: "Sağlık",
    author: "İsim",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "/blog/1",
  },
  {
    date: "15 DEC",
    title: "Yeni Blog Başlığı 2",
    category: "Teknoloji",
    author: "İsim 2",
    summary: "Teknoloji dünyasından son gelişmeler...",
    link: "/blog/2",
  },
  {
    date: "20 DEC",
    title: "Yeni Blog Başlığı 3",
    category: "Yorum",
    author: "İsim 3",
    summary: "Güncel konular üzerine yorumlar...",
    link: "/blog/3",
  },
];

const BlogSwiper = () => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-lg relative">
      {/* Üst Başlık ve Yön Okları */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Son Haberler</h3>
        <div className="flex">
          <button className="text-gray-500 hover:text-gray-700 mx-1 swiper-button-prev-custom">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 mx-1 swiper-button-next-custom">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      {/* Blog Kartı - Swiper ile */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {blogList.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 border rounded-lg relative">
              {/* Resim ve Tarih Alanı */}
              <div className="relative mb-4">
                <Image
                  src="https://fastly.picsum.photos/id/866/300/200.jpg?hmac=vwkhhp_0HQtgJfxWytDiH1t2GX4YyYyWs3_18hlicBY"
                  alt="Blog image"
                  height={50}
                  width={50}
                  layout="responsive"
                  className="rounded-md"
                />
                {/* Tarih Etiketi */}
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-center py-2 px-2 rounded-md">
                  <span className="block text-xs">{blog.date}</span>
                </div>
              </div>

              {/* Blog Başlık ve Bilgiler */}
              <h4 className="text-lg font-bold mb-2">{blog.title}</h4>
              <p className="text-sm text-gray-500 mb-2">
                {blog.category} | {blog.author}
              </p>

              {/* Blog Özeti */}
              <p className="text-sm text-gray-700 mb-4">{blog.summary}</p>

              {/* Devamını Oku Butonu */}
              <a
                href={blog.link}
                className="text-blue-500 hover:underline text-sm"
              >
                Continue Reading
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
