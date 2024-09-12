import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SectionNavigation = ({ swiperName }) => {
  return (
    <div className="flex items-center space-x-2">
      <button className={`${swiperName}-prev px-2 py-1 border border-gray-500`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className={`${swiperName}-next px-2 py-1 border border-gray-500`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default SectionNavigation;
