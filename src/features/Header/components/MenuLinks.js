import React from "react";
import Link from "next/link";

const MenuLinks = () => {
  return (
    <>
      <Link href="#" className="hover:text-primary">
        Siparişlerim
      </Link>
      <Link href="#" className="hover:text-primary">
        Kampanyalar
      </Link>
      <Link href="#" className="hover:text-primary">
        Hakkımızda
      </Link>
      <Link href="#" className="hover:text-primary">
        Çözüm Merkezi
      </Link>
    </>
  );
};

export default MenuLinks;
