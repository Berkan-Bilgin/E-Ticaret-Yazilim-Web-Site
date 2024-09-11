import React from "react";
import Image from "next/image";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm  relative">
      {/* İndirim veya Yeni Rozeti */}
      {product.isOnSale && (
        <span className="absolute top-0 left-0 z-10 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          İndirim -{product.discount}%
        </span>
      )}
      {product.isNew && !product.isOnSale && (
        <span className="absolute top-0 left-0 z-10 bg-yellow-500 text-white px-2 py-1 text-xs font-bold rounded">
          Yeni
        </span>
      )}

      {/* Ürün Görseli */}
      <div className="relative">
        <Image
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Product image"
          height={72}
          width={72}
          layout="responsive"
          className="rounded-md transform transition-transform duration-300 ease-in-out md:hover:scale-110"
        />
      </div>

      {/* Fiyat Bilgisi */}
      <div className="mt-2 text-center">
        {product.isOnSale && (
          <span className="line-through text-gray-500">
            {product.oldPrice}₺
          </span>
        )}
        <span
          className={`ml-2 text-xl font-bold ${product.isOnSale ? "text-red-500" : "text-orange-500"}`}
        >
          {product.newPrice}₺
        </span>
        <div className="text-sm mt-1">Satış: {product.sales}</div>
      </div>

      {/* Rating */}
      <div className="text-center mt-1">
        <span className="text-orange-500">
          {"★".repeat(product.rating)} {/* Dolu yıldızlar */}
        </span>
        <span className="text-gray-400">
          {"☆".repeat(5 - product.rating)} {/* Boş yıldızlar */}
        </span>
        <span className="ml-2 text-gray-500">({product.reviews} Oylama)</span>
      </div>

      {/* Sepete Ekle Butonu */}
      <button className="mt-4 w-full bg-orange-100 text-red-500 p-2 rounded-md hover:bg-orange-200">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
