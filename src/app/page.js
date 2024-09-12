import React from "react";
import Header from "@/features/Header/Header";
import HeroSection from "@/features/Hero/HeroSection";
import Promo3CardSection from "@/features/Promo3CardSection/Promo3CardSection";
import CategoryCarouselSection from "@/features/CategoryCarouselSection/CategoryCarouselSection";
import Product4Promo1Section from "@/features/Product4Promo1Section/Product4Promo1Section";
import TwoColumnLayout from "@/common/layouts/TwoColumnKLayout";
import PromoSidebar from "@/features/PromoSidebar/PromoSidebar";
import TopSellingSection from "@/features/TopSellingSection/TopSellingSection";
import PromoGrid from "@/features/PromoGrid/PromoGrid";
import ProductList from "@/common/components/ProductList";
import ProductSwiperSection from "@/features/ProductSwiperSection/ProductSwiperSection";
import PromoCard from "@/common/components/PromoCard";
import FeatureBenefits from "@/features/BenefitsSection/BenefitsSection";
import NewsletterSection from "@/features/NewsletterSection/NewsletterSection";
import Footer from "@/features/Footer/Footer";

const products = [
  {
    title: "ŞİMDİ %30 İNDİRİMLİ!",
    description: "Lorem ipsum dolor sit amet",
    buttonText: "ŞİMDİ AL",
    bgColor: "bg-gray-300",
    height: "h-40",
  },
  {
    title: "ÖZEL ÜRÜN",
    description: "Lorem ipsum dolor sit amet",
    buttonText: "ŞİMDİ AL",
    bgColor: "bg-gray-400",
    height: "h-40",
  },
];

const productList = [
  {
    isOnSale: true,
    discount: 15,
    name: "Laptop",
    oldPrice: "5000.00",
    newPrice: "4250.00",
    sales: 200,
    rating: 4,
    reviews: 35,
  },
  {
    isOnSale: false,
    discount: 0,
    name: "Kulaklık",
    oldPrice: "300.00",
    newPrice: "300.00",
    sales: 150,
    rating: 5,
    reviews: 45,
  },
  {
    isOnSale: true,
    discount: 30,
    name: "Akıllı Telefon",
    oldPrice: "7000.00",
    newPrice: "4900.00",
    sales: 400,
    rating: 4,
    reviews: 73,
  },
  {
    isOnSale: false,
    discount: 0,
    name: "Bluetooth Hoparlör",
    oldPrice: "450.00",
    newPrice: "450.00",
    sales: 90,
    rating: 3,
    reviews: 10,
  },
  {
    isOnSale: true,
    discount: 20,
    name: "Akıllı Saat",
    oldPrice: "1500.00",
    newPrice: "1200.00",
    sales: 300,
    rating: 4,
    reviews: 60,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Promo3CardSection />
      <CategoryCarouselSection />
      <Product4Promo1Section />
      <TwoColumnLayout
        leftContent={<PromoSidebar />}
        rightContent={
          <>
            <TopSellingSection />
            <PromoGrid products={products} />
            <ProductList
              title="Lorem Ipsum"
              layout="grid"
              products={productList}
            />
            <ProductSwiperSection
              title="Sizin İçin Önerilenler"
              productList={productList}
              swiperName="recommends"
            />
            <PromoCard
              title="Özel Teklif"
              description="Tüm ürünlerde %50 indirim!"
              buttonText="Şimdi Satın Al"
              bgColor="bg-gray-200"
              height="h-48"
            />
            <ProductSwiperSection
              title="Sizin İçin Önerilenler"
              productList={productList}
              swiperName="recommends"
            />
          </>
        }
      />
      <PromoGrid
        products={[
          {
            title: "ÜRÜN ADI",
            description: "100$'dan başlayan fiyatlarla",
            buttonText: "Şimdi al",
            bgColor: "bg-gray-300",
            height: "h-48",
            badge: "Özel Teklif",
          },
        ]}
      />
      <FeatureBenefits />
      <Footer />
    </>
  );
}
