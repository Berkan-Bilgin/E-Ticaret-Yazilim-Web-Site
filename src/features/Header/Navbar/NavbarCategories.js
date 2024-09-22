// NavbarCategories.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTv,
  faTshirt,
  faHome,
  faDumbbell,
  faBook,
  faShoePrints,
  faLaptop,
  faMobileAlt,
  faUtensils,
  faCar,
  faFutbol,
  faGamepad,
  faHeadphones,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button from "@/common/components/Button"; // Button bileşeninizin doğru yolunu kullandığınızdan emin olun

const NavbarCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hover durumunu yönetmek için fonksiyonlar
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Kategori verilerini ve ikonları içeren bir dizi oluşturuyoruz
  const categories = [
    { name: "Elektronik", href: "/category/electronics", icon: faTv },
    { name: "Moda", href: "/category/fashion", icon: faTshirt },
    { name: "Ev & Yaşam", href: "/category/home", icon: faHome },
    { name: "Spor", href: "/category/sports", icon: faDumbbell },
    { name: "Kitaplar", href: "/category/books", icon: faBook },
    { name: "Ayakkabı & Çanta", href: "/category/shoes", icon: faShoePrints },
    { name: "Bilgisayarlar", href: "/category/computers", icon: faLaptop },
    { name: "Mobil Cihazlar", href: "/category/mobiles", icon: faMobileAlt },
    { name: "Yemek & İçecek", href: "/category/food", icon: faUtensils },
    { name: "Otomotiv", href: "/category/automotive", icon: faCar },
    { name: "Futbol", href: "/category/football", icon: faFutbol },
    { name: "Oyun", href: "/category/games", icon: faGamepad },
    { name: "Kulaklıklar", href: "/category/headphones", icon: faHeadphones },
    { name: "Kameralar", href: "/category/cameras", icon: faCamera },
    { name: "Aksesuarlar", href: "/category/accessories", icon: faTshirt },
  ];

  return (
    <div
      className="relative group col-span-3 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Trigger: Button */}
      <Button
        variant="neutral-outline"
        tabIndex={0}
        className="flex items-center space-x-2 group-hover:text-primary  transition-colors duration-200 w-full justify-start"
      >
        {/* Hamburger Menü İkonu */}
        <FontAwesomeIcon icon={faBars} className="" />

        {/* Tüm Kategoriler Yazısı */}
        <span className="font-bold ">TÜM KATEGORİLER</span>
      </Button>

      {/* Dropdown Menü */}
      {isOpen && (
        <ul className="absolute left-0 mt-0 shadow-lg  bg-white border border-gray-200 rounded w-full max-h-96 overflow-y-auto transition-all duration-300 ease-in-out">
          {categories.map((category, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 flex items-center space-x-2 p-2 rounded transition-colors duration-200"
            >
              {/* Kategori İkonu */}
              <FontAwesomeIcon
                icon={category.icon}
                className="text-lg text-gray-600"
              />

              {/* Kategori İsmi */}
              <Link href={category.href} className="block text-gray-800">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarCategories;
