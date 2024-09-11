import React from "react";
import Header from "@/features/Header/Header";
import HeroSection from "@/features/Hero/HeroSection";
import Promo3CardSection from "@/features/Promo3CardSection.js/Promo3CardSection";
import CategoryCarouselSection from "@/features/CategoryCarouselSection/CategoryCarouselSection";
import Product4Promo1Section from "@/features/Product4Promo1Section.js/Product4Promo1Section";
import TwoColumnLayout from "@/common/layouts/TwoColumnKLayout";
import PromoSidebar from "@/features/PromoSidebar/PromoSidebar";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Promo3CardSection />
      <CategoryCarouselSection />
      <Product4Promo1Section />
      <TwoColumnLayout leftContent={<PromoSidebar />} />
    </>
  );
}
