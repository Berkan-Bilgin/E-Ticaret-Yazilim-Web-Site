"use client";
import React from "react";
import SectionHeader from "@/common/components/SectionHeader";
import SectionNavigation from "@/common/components/SectionNavigation";
import CategoryCarousel from "./components/CategoryCarousel";

const CategoryCarouselSection = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <SectionHeader title="Ürün Kategorileri" />
        <SectionNavigation swiperName={"category-button"} />
      </div>
      <div>
        <CategoryCarousel />
      </div>
    </div>
  );
};

export default CategoryCarouselSection;
