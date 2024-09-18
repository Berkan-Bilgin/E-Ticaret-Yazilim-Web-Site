import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@/common/components/Button";
import { useEffect } from "react";

const Searchbar = () => {
  useEffect(() => {
    console.log("search bar component güncellendi");
  }, []);

  return (
    <div className="bg-white ">
      <div className="flex items-center sm:space-x-4    px-4 py-2 justify-between container bg">
        {/* Logo */}
        <div className="hidden md:flex items-center">
          <Link href="/" passHref>
            <div className="text-primary-light text-2xl font-bold cursor-pointer">
              MEDICAL
            </div>
          </Link>
        </div>

        {/* Search Input */}
        <div className="flex items-center w-full border-2 mr-4 border-yellow-500 bg-white rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Aradığınız ürün,kategori veya markayı yazınız..."
            className="w-full px-4 py-2 rounded-l-md bg-gray-100  outline-none"
          />
          <button className="bg-yellow-500 px-4 py-2 text-gray-100">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Giriş Yap Dropdown */}
        <div className="dropdown dropdown-hover">
          {/* <div
            tabIndex={0}
            className="border-2 text-primary-light border-primary-light flex items-center px-4 py-2 rounded-lg space-x-2   "
          >
            <FontAwesomeIcon icon={faUser} className="text-md" />
            <span className=" whitespace-nowrap">Giriş Yap</span>
          </div> */}

          <Button variant="primary-outline" tabIndex={0} className="  ">
            <FontAwesomeIcon icon={faUser} className="text-md" />
            <span className=" whitespace-nowrap">Giriş Yap</span>
          </Button>

          {/* Dropdown Menü */}
          <ul className="dropdown-content bg-white z-[100] menu p-4 shadow rounded-box w-40">
            <li className="border bg-primary-light text-white border-primary-light rounded-md mb-2 hover:bg-primary hover:text-white transition-colors">
              <Link href="/login" className="flex items-center px-4 py-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Giriş Yap
              </Link>
            </li>
            <li className="border text-primary-light border-primary-light rounded-md hover:bg-primary-light hover:text-white transition-colors">
              <Link href="/register" className="flex items-center px-4 py-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Üye Ol
              </Link>
            </li>
          </ul>
        </div>

        {/* Cart */}
        {/* <div className="hidden  sm:flex border-primary-light border-2 text-primary-light  items-center px-4 py-2 rounded-lg space-x-2">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
          <span className="ml-2">Sepetim</span>
        </div> */}

        <Link href="/sepetim" passHref>
          <Button variant="primary-outline" className="hidden  sm:flex ">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
            <span className="ml-2">Sepetim</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
