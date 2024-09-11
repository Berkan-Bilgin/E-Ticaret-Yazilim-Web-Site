"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Topbar = () => {
  const [currencies, setCurrencies] = useState([
    { name: "USD", symbol: "$" },
    { name: "TL", symbol: "₺" },
    { name: "EURO", symbol: "€" },
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const [languages, setLanguages] = useState(["English", "Türkçe", "Español"]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="bg-primary border-b border-gray-300 ">
      <div className="flex justify-between items-center bg-orange-500 py-2   container mx-auto">
        <div className="flex space-x-4">
          <button className="text-white">Kayıt Ol / Giriş Yap</button>
          <div className="group relative w-32">
            {/* Sabit genişlik ekledik */}
            {/* Menü Başlığı (Seçili Para Birimi) */}
            <span className="flex items-center justify-between cursor-pointer border bg-primary-light text-white border-gray-300 p-2">
              {selectedCurrency.symbol} {selectedCurrency.name}
              {/* Seçilen para biriminin sembolü */}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-4 transition-transform duration-500 transform group-hover:rotate-180"
              />
            </span>

            {/* Hover olduğunda açılan liste */}
            <ul className="absolute hidden group-hover:flex flex-col w-full border border-gray-300 z-[1000] top-full left-0 shadow-lg text-white bg-primary">
              {currencies
                .filter((currency) => currency !== selectedCurrency) // Seçilen para birimi dışındakileri göster
                .map((currency, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-green-800 cursor-pointer"
                    onClick={() => setSelectedCurrency(currency)} // Seçilen para birimini güncelle
                  >
                    {currency.symbol} {currency.name}{" "}
                    {/* Para biriminin sembolünü göster */}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Destek Linki */}
          <a href="#" className="text-white mr-8 hover:text-gray-300">
            DESTEK
          </a>

          {/* Dil Seçimi Dropdown */}
          <div className="group relative w-32">
            {/* Dil seçimi başlığı */}
            <span className="flex items-center justify-between cursor-pointer border bg-primary-light text-white border-gray-300 p-2">
              {selectedLanguage}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-1 w-4 transition-transform duration-500 transform group-hover:rotate-180"
              />
            </span>

            {/* Hover olduğunda açılan liste */}
            <ul className="absolute hidden group-hover:flex flex-col w-full border border-gray-300 z-[1000] top-full left-0 shadow-lg text-white bg-primary">
              {languages
                .filter((lang) => lang !== selectedLanguage) // Seçilen dili hariç tut
                .map((lang, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-green-800 cursor-pointer"
                    onClick={() => setSelectedLanguage(lang)} // Seçilen dili güncelle
                  >
                    {lang}
                  </li>
                ))}
            </ul>
          </div>

          {/* Uygulama İndir Butonu */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            UYGULAMA İNDİR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
