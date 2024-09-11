"use client";
import CategoryList from "./components/CategoryList";
import BannerSlide from "./components/BannerSlide";

const HeroSection = () => {
  return (
    <div className="container grid grid-cols-12   ">
      {/* Sol Taraf - Kategoriler */}
      <div className="col-span-3  ">
        <CategoryList />
      </div>

      {/* Sağ Taraf - Hero Section */}
      <div className="col-span-9 ml-4 bg-blue-500 flex justify-center items-center">
        <BannerSlide />
      </div>
    </div>
  );
};

export default HeroSection;
