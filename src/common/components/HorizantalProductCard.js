import React from "react";

const HorizontalProductCard = ({ product }) => {
  return (
    <div className="border relative rounded-lg shadow-md flex items-center ">
      {/* Resim */}
      <div className="w-32  lg:w-28 md:w-24 h-full">
        <img
          src="https://via.placeholder.com/150"
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Ürün Bilgileri */}
      <div className="flex-1">
        {/* İndirim Rozeti */}
        {product.isOnSale && (
          <span className="bg-red-500 absolute top-0 left-0 text-white px-2 py-1  text-xs font-bold ">
            İndirim -{product.discount}%
          </span>
        )}
        {/* Ürün Adı */}
        <h3 className="text-lg font-bold ml-2">{product.name}</h3>

        {/* Fiyat Bilgisi */}
        <div className="mt-2 ">
          {product.isOnSale && (
            <span className="line-through text-gray-500 ml-2">
              {product.oldPrice}₺
            </span>
          )}
          <span
            className={`ml-2 text-xl font-bold ${
              product.isOnSale ? "text-red-500" : "text-orange-500"
            }`}
          >
            {product.newPrice}₺
          </span>
        </div>

        {/* Satış Bilgisi */}
        <p className="text-sm mt-1 ml-2">Satış: {product.sales}</p>

        {/* Yıldızlar */}
        <div className="flex items-center mt-1 ml-2">
          <span className="text-yellow-500">{"★".repeat(product.rating)}</span>
          <span className="text-gray-300">
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="ml-2 text-gray-500">({product.reviews} Oylama)</span>
        </div>

        {/* Sepete Ekle Butonu */}
        <button className="mt-4  bg-orange-100 text-red-500 p-2  hover:bg-orange-200 w-full">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
