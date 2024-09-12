import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faShieldAlt,
  faCreditCard,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    icon: faTruck,
    title: "ÜCRETSİZ KARGO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: faShieldAlt,
    title: "GÜVENİLİR ÖDEME",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: faCreditCard,
    title: "KREDİ KARTLARI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: faMobileAlt,
    title: "UYGULAMADAN ALIŞVERİŞ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FeatureBenefits = () => {
  return (
    <>
      <hr />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 text-center">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 py-12
              ${index !== benefits.length - 1 ? "border-r border-gray-300" : ""}`}
            >
              <FontAwesomeIcon
                icon={benefit.icon}
                size="3x"
                className="text-blue-500 mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureBenefits;
