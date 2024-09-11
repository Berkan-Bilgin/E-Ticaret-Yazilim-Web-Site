import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary-light">
      <nav className="grid grid-cols-12 items-center  container ">
        {/* Sol Tarafta Kategoriler (3 birim) */}
        <div className="col-span-3 bg-yellow-500">
          <button className=" text-black py-2 px-4 font-bold">
            KATEGORİLER
          </button>
        </div>

        {/* Sağ Tarafta Menü ve Telefon Numarası (9 birim) */}
        <div className="col-span-6 flex justify-between items-center">
          {/* Menü Öğeleri */}
          <ul className="flex items-center space-x-4 bg-gray-800 text-white py-2 px-4 w-full">
            <li className="hover:text-yellow-500 cursor-pointer">ANASAYFA</li>
            <li className="hover:text-yellow-500 cursor-pointer">HAKKIMIZDA</li>
            <li className="hover:text-yellow-500 cursor-pointer">ÜRÜNLER</li>
            <li className="hover:text-yellow-500 cursor-pointer">MEDICAL1</li>
            <li className="hover:text-yellow-500 cursor-pointer">MEDICAL2</li>
            <li className="hover:text-yellow-500 cursor-pointer">SSS</li>
            <li className="hover:text-yellow-500 cursor-pointer">BLOG</li>
          </ul>
        </div>

        {/* Telefon Numarası */}
        <div className="col-span-3 bg-yellow-500 text-black font-bold py-2">
          BİZİ ARAYIN: 1-800-777-7889
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
