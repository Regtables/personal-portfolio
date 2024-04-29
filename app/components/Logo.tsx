import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative max-h-[200px] max-w-[200px] h-[50px] w-[200px]">
      <Image src={"/logo.png"} fill alt="Regtables logo" className="object-cover max-w-[200px]" />
    </div>
  );
};

export default Logo;
