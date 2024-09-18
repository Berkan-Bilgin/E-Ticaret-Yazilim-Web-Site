import React from "react";

const PromoCard = ({ title, description, buttonText, bgColor, height }) => {
  return (
    <div
      className={`p-4 ${bgColor} ${height} my-4 flex flex-col justify-center items-center`}
    >
      <h2 className="text-xl font-bold text-gray-700">{title}</h2>
      <p className="text-gray-500 my-2">{description}</p>
      <button className="bg-teal-500 text-white px-4 py-2 mt-4">
        {buttonText}
      </button>
    </div>
  );
};

export default PromoCard;
