import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTypingAnimation } from "@/common/hooks/useTypingAnimation";

const SearchInput = () => {
  const staticText = "Aradığınız ";
  const fullText = "ürün, kategori veya markayı yazınız...";
  const animatedText = useTypingAnimation(fullText);

  return (
    <div className="flex items-center w-full border-2 mr-4 border-yellow-500 bg-white rounded-md shadow-lg">
      <input
        type="text"
        placeholder={staticText + animatedText}
        className="w-full px-4 py-2 rounded-l-md bg-gray-100 outline-none"
      />
      <button className="bg-yellow-500 px-4 py-2 text-gray-100">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchInput;
