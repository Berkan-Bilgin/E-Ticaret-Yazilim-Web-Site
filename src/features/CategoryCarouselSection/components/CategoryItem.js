// CategoryItem.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { truncateLabel } from "@/common/utils/textUtils";

const CategoryItem = ({ icon, label }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center  space-y-2 py-2 sm:border-0 border group sm:border-none cursor-pointer overflow-hidden"
      // 'group' sınıfı, hover durumunu alt öğelere iletmek için kullanılır
    >
      {/* Hover ile Gelen Top Border */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></div>

      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-11/12"></div> */}

      {/* <div className="absolute top-0 left-2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-10/12"></div> */}

      {/* Kategori İkonu */}
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-600 text-md !w-10 !h-10 md:!w-16 md:!h-16 lg:!w-16 lg:!h-16 group-hover:text-primary transition-colors duration-200"
      />

      {/* Kategori İsmi */}
      <span className="block sm:hidden text-xs sm:text-sm md:text-md lg:text-md text-center text-text-primary group-hover:text-primary transition-colors duration-200">
        {truncateLabel(label)}
      </span>

      {/* Büyük ekranlarda tam label göster */}
      <span className="hidden sm:block text-xs sm:text-sm md:text-md lg:text-md text-center text-text-primary group-hover:text-primary transition-colors duration-200">
        {label}
      </span>
    </div>
  );
};

export default CategoryItem;
