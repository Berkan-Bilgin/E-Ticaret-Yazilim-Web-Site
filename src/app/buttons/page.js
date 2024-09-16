"use client";
import React from "react";
import Button from "@/common/components/Button";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ButtonPage = () => {
  return (
    <>
      <div>
        <div className="btn">Merhaba</div>
        <Button variant="primary" size="lg">
          Delete
        </Button>

        <Button
          className="bg-red-500"
          variant="primary"
          size="lg"
          onClick={() => alert("Clicked!")}
        >
          Click Me
        </Button>

        <Button
          className="bg-red-500"
          variant="primary-outline"
          size="lg"
          onClick={() => alert("Clicked!")}
        >
          Click Me
        </Button>
        <div className="flex">
          <div className="hidden  sm:flex border-primary-light border-2 text-primary-light  items-center px-4 py-2 rounded-lg space-x-2">
            <FontAwesomeIcon icon={faShop} className="text-2xl" />
            <span className="ml-2">Sepetim</span>
          </div>

          <div
            tabIndex={0}
            className="border-2 text-primary-light border-primary-light flex items-center px-4 py-2 rounded-lg space-x-2   "
          >
            <FontAwesomeIcon icon={faUser} className="text-md" />
            <span className=" whitespace-nowrap">Giriş Yap</span>
          </div>
          <Button variant="primary-outline" className="" size="md">
            <FontAwesomeIcon icon={faUser} className="text-md" />
            <span>Merhaba</span>
          </Button>
        </div>
        <Button>Merhaba</Button>
      </div>

      <div>
        <Button
          variant="primary"
          className="ml-4 bg-red-500 text-black !important"
        >
          {" "}
          <FontAwesomeIcon icon={faShop} className="text-2xl" />
          <span className="ml-2">Sepetim Deneme</span>
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
