import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
    <div className="bg-primary-light">
      <div className="flex items-center bg-purple-500  justify-between container bg">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold">MEDICAL</div>
        </div>

        {/* Search Input */}
        <div className="flex items-center w-1/2 bg-white rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-l-md border-none outline-none"
          />
          <button className="bg-yellow-500 px-4 py-2 rounded-r-md text-white">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Categories Dropdown */}
        <div className="ml-4">
          <select className="p-2 border rounded bg-gray-100 text-gray-700">
            <option>KATEGORİLER</option>
            <option>Elektronik</option>
            <option>Sağlık</option>
            <option>Kozmetik</option>
          </select>
        </div>

        {/* Cart */}
        <div className="flex items-center ml-4 text-white">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
          <span className="ml-2">0 ÜRÜN: $0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
