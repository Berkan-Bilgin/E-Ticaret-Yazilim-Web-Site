import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const FooterMenu = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Sol kısım - Logo ve açıklama */}
        <div className="mx-6  sm:mx-0">
          <div className=" mb-4 flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <h2 className="text-2xl font-bold ml-2">SUPERMART</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Şirket açıklaması lorem ipsum dolor sit amet...
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Address: 1123 sok 456 no</li>
            <li>Phone: 123456789</li>
            <li>Email: info@medical.com</li>
          </ul>
        </div>

        {/* Hakkımızda */}
        <div className="mx-6 sm:mx-0">
          <h3 className="text-xl font-bold mb-4">HAKKIMIZDA</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>

        {/* Politikalarımız */}
        <div className="mx-6 sm:mx-0">
          <h3 className="text-xl font-bold mb-4">POLİTİKALARIMIZ</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>

        {/* Hesabım */}
        <div className="mx-6 sm:mx-0">
          <h3 className="text-xl font-bold mb-4">HESABIM</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
