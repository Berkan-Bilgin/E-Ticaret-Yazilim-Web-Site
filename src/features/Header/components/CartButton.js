import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "@/common/components/Button";

const CartButton = () => {
  const cartItemCount = 3; // Sepetteki ürün sayısını buradan belirleyin

  return (
    <Link href="/sepetim" passHref>
      <Button variant="primary" className="hidden sm:flex">
        <div className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-md" />

          {/* Counter */}
          {cartItemCount > 0 && (
            <span className="absolute top-0 -right-2  transform translate-x-1/4 -translate-y-1/4 bg-white text-black text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          )}
        </div>
        <span className="px-1">Sepetim</span>
      </Button>
    </Link>
  );
};

export default CartButton;
