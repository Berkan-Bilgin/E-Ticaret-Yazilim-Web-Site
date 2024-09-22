import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MobileCart = () => {
  return (
    <div className="flex items-center ml-4 sm:hidden cursor-pointer">
      <Link href="/sepetim" passHref>
        <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
        <span className="ml-2">0 ÜRÜN: $0.00</span>
      </Link>
    </div>
  );
};

export default MobileCart;
