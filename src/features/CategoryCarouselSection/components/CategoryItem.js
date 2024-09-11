import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 bg-blue-500">
      <FontAwesomeIcon icon={icon} className="text-gray-600  w-24 h-24 " />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
};

export default CategoryItem;
