import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const CategoryItem = ({ category }) => {
  return (
    <li className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200">
      <FontAwesomeIcon icon={faDesktop} className="text-gray-600" />{" "}
      <span>{category}</span>
    </li>
  );
};

export default CategoryItem;
