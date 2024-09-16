"use client";
import CategoryList from "./components/CategoryList";
import BannerSlide from "./components/BannerSlide";

const HeroSection = () => {
  return (
    <div className="container grid grid-cols-12">
      {/* Sol Taraf - Kategoriler */}
      <div className="lg:col-span-3 md:block hidden">
        {/* <CategoryList /> */}
      </div>

      {/* Sağ Taraf - Hero Section */}
      <div className="col-span-12 lg:col-span-9 mt-4 md:block hidden flex justify-center items-center">
        <BannerSlide />
      </div>
    </div>
  );
};

export default HeroSection;
