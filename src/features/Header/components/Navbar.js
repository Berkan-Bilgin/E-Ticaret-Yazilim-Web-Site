import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary-light">
      <nav className="grid grid-cols-12 items-center container mx-auto">
        {/* Sol Tarafta Kategoriler (3 birim büyük ekranlarda, tam ekran küçük ekranlarda) */}
        <div className="col-span-12 lg:col-span-3 bg-yellow-500">
          <h1 className="w-full text-black py-4 px-4 font-bold">KATEGORİLER</h1>
        </div>

        {/* Menü Öğeleri */}
        <div className="col-span-12 lg:col-span-6 sm:flex justify-center md:justify-start items-center overflow-hidden hidden">
          <ul className="flex flex-nowrap items-center space-x-2 justify-center bg-gray-700 text-white py-4 w-full whitespace-nowrap">
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
        <div className="col-span-12 lg:col-span-3 bg-gray-700 flex justify-center lg:justify-end items-center text-black font-bold py-4 px-4 space-x-2 overflow-hidden">
          <span className="text-xs text-gray-400">BİZİ ARAYIN:</span>
          <p className="bg-yellow-500 px-2  ">1-800-777-7889</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
