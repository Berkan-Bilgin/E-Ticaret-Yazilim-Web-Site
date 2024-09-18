import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Sepetim = () => {
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: "$1299.99",
      category: "Laptop",
      image: "https://picsum.photos/200/200?random=1", // Lorem Picsum mock image
    },
    {
      id: 2,
      name: "iPhone 13",
      price: "$999.99",
      category: "Smartphone",
      image: "https://picsum.photos/200/200?random=2", // Lorem Picsum mock image
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: "$249.99",
      category: "Accessories",
      image: "https://picsum.photos/200/200?random=3", // Lorem Picsum mock image
    },
    {
      id: 4,
      name: "Samsung Galaxy S21",
      price: "$799.99",
      category: "Smartphone",
      image: "https://picsum.photos/200/200?random=4", // Lorem Picsum mock image
    },
    {
      id: 5,
      name: "Sony WH-1000XM4",
      price: "$349.99",
      category: "Headphones",
      image: "https://picsum.photos/200/200?random=5", // Lorem Picsum mock image
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">ALIŞVERİŞ LİSTESİ</h1>

      {/* Masaüstü ekran için tablo */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ÜRÜN</th>
              <th className="py-2 px-4 border-b text-left">FİYAT</th>
              <th className="py-2 px-4 border-b text-left">KATEGORİ</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="mr-4"
                    />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b text-red-700 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faTimes}
                    size="lg"
                    className="hover:text-red-800 transition duration-300 ease-in-out transform hover:scale-125 "
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobil ekran için düzenlenmiş kartlar */}
      <div className="md:hidden">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 mb-4 p-4">
            <div className="flex items-center justify-between">
              {/* Sol bölüm: Resim ve ürün bilgileri */}
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{product.name}</span>

                  <span className="mr-4">Fiyat: {product.price}</span>
                  <span>Kategori: {product.category}</span>
                </div>
              </div>

              {/* Sağ bölüm: X butonu */}
              <div className="cursor-pointer text-red-700 scale-125">
                {" "}
                <FontAwesomeIcon
                  icon={faTimes}
                  className="hover:text-red-800 transition duration-300 ease-in-out transform hover:scale-125 "
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ödemeye geç butonu */}
      <div className="flex justify-end mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          ÖDEMEYE GEÇ
        </button>
      </div>
    </div>
  );
};

export default Sepetim;
