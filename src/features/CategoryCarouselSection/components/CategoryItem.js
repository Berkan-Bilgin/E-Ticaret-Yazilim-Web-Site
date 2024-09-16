import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 py-3 sm:border-0 border sm:border-none">
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-600  !w-10 !h-10 md:!w-16 md:!h-16 lg:!w-20 lg:!h-20    "
      />
      <span className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-600">
        {label}
      </span>
    </div>
  );
};

export default CategoryItem;
