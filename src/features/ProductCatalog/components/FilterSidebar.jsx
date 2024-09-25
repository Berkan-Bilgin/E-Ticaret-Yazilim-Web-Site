"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Font Awesome Chevron Down ikonu

const filters = [
  {
    title: "Markalar",
    options: ["Asus", "Dell", "HP", "Apple"],
  },
  {
    title: "Fiyat",
    options: ["0 - $500", "$500 - $1000", "$1000 - $1500", "$1500 - $2000"],
  },
  {
    title: "Özellikler",
    options: ["16 GB RAM", "512 GB SSD", "Intel i7", "NVIDIA GTX 1660Ti"],
  },
];

const FilterSidebar = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const handleToggle = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index], // Mevcut menünün durumunu tersine çevir
    }));
  };

  return (
    <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg ">
      <h2 className="text-xl font-semibold mb-4">FİLTRELE</h2>

      {filters.map((filter, index) => (
        <div key={index}>
          <div
            className="flex justify-between items-center p-2 cursor-pointer text-md font-medium"
            onClick={() => handleToggle(index)}
          >
            {filter.title}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transform transition-transform duration-300 ${
                openIndexes[index] ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openIndexes[index] ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-2">
              <ul>
                {filter.options.map((option, idx) => (
                  <li key={idx} className="py-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Çizgi (Separator) */}
          {index < filters.length - 1 && (
            <hr className="my-2 border-gray-300" />
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
