import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <h2 className="text-lg  sm:text-xl md:text-2xl lg:text-3xl font-semibold">
      {title}
    </h2>
  );
};

export default SectionHeader;
