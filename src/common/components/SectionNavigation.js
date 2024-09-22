import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SectionNavigation = ({ swiperName }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`${swiperName}-prev px-1 py-1 hover:text-primary-light  `}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
      </button>

      <button
        className={`${swiperName}-next px-1 py-1 hover:text-primary-light  `}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
      </button>
    </div>
  );
};

export default SectionNavigation;
