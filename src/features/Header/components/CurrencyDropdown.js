import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CurrencyDropdown = () => {
  const [currencies] = useState([
    { name: "USD", symbol: "$" },
    { name: "TL", symbol: "₺" },
    { name: "EURO", symbol: "€" },
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div className="group relative w-32">
      <span className="flex items-center justify-between cursor-pointer border bg-primary-light text-white border-gray-300 p-2">
        {selectedCurrency.symbol} {selectedCurrency.name}
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-4 transition-transform duration-500 transform group-hover:rotate-180"
        />
      </span>
      <ul className="absolute hidden group-hover:flex flex-col w-full border border-gray-300 z-[1000] top-full left-0 shadow-lg text-white bg-primary">
        {currencies
          .filter((currency) => currency !== selectedCurrency)
          .map((currency, index) => (
            <li
              key={index}
              className="p-2 hover:bg-green-800 cursor-pointer"
              onClick={() => setSelectedCurrency(currency)}
            >
              {currency.symbol} {currency.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;
