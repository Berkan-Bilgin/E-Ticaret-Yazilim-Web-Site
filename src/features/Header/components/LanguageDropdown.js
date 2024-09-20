import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import "flag-icons/css/flag-icons.min.css";

const languages = [
  { code: "EN", name: "English", flag: "fi-us" },
  { code: "TR", name: "Türkçe", flag: "fi-tr" },
  { code: "DE", name: "Deutsch", flag: "fi-de" },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "EN";

  const handleLanguageChange = (languageCode) => {
    localStorage.setItem("selectedLanguage", languageCode);
    window.location.reload();
  };

  const sortedLanguages = languages.sort((a, b) =>
    a.code === selectedLanguage ? -1 : b.code === selectedLanguage ? 1 : 0
  );

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    console.log("Dropdown menu closed."); // Konsol mesajı
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="relative z-[21] flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none"
        >
          <span
            className={`fi ${
              languages.find((lang) => lang.code === selectedLanguage)?.flag
            } mr-2`}
          ></span>
          {selectedLanguage}
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
      </div>

      {/* Background Overlay her zaman DOM'da, sadece görünürlüğü kontrol ediyoruz */}
      <div
        className={`fixed inset-0 z-[20] bg-black transition-opacity duration-500 ${
          isOpen
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
        onClick={handleMouseLeave}
      ></div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 z-[21]  w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="py-1" role="menu" aria-orientation="vertical">
          <div className="px-4 py-2 text-sm font-bold text-gray-900">
            Change Language
          </div>
          {sortedLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div className="flex items-center">
                <span className={`fi ${language.flag} mr-2`}></span>
                {language.name} - {language.code}
              </div>
              {selectedLanguage === language.code && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="ml-auto text-green-500"
                />
              )}
            </button>
          ))}
          <hr className="my-2 border-t border-gray-200" />
          <div className="px-4 py-2 text-sm font-bold text-gray-900">
            Change Currency
          </div>
          <div className="px-4 py-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>$ - USD - US Dollar</span>
              <span className="text-blue-600 cursor-pointer">Change</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
