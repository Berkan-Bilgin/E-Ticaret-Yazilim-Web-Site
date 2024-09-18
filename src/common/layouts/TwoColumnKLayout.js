import React from "react";

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  return (
    <div className="container grid grid-cols-12 space-x-4 mt-4">
      {/* Left Content (e.g., Sidebar) */}
      <div className="col-span-3 ">{leftContent}</div>

      {/* Right Content (e.g., Product Cards) */}
      <div className="col-span-9">{rightContent}</div>
    </div>
  );
};

export default TwoColumnLayout;
