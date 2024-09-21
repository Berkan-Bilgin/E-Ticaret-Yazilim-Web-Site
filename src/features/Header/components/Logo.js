import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Link href="/" passHref>
        <div className="text-primary-light text-2xl font-bold cursor-pointer">
          MEDICAL
        </div>
      </Link>
    </div>
  );
};

export default Logo;
