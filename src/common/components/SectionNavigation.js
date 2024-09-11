import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SectionNavigation = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="swiper1-button-prev px-2 py-1 border border-gray-500"></button>

      <button className="swiper1-button-next px-2 py-1 border border-gray-500"></button>
    </div>
  );
};

export default SectionNavigation;
