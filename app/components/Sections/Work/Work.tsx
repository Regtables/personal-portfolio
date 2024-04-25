"use client";

import React, { useState } from "react";
import { Webiste } from "@/app/lib/types";
import { cn } from "@/app/lib/utils";

import WebsiteCard from "../../Cards/WebsiteCard/WebsiteCard";

const Work = ({ work } : { work: Webiste[] }) => {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="h-full w-full overflow-hidden" id="website-cards">
      <div
        className="flex gap-1 h-[95%] w-full transition-all duration-1000 pb-4"
        style={{ transform: `translateX(-${100 * index}%)` }}
      >
        <div className="h-full lg:h-full min-w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-1">
          {work.map((website: Webiste, i: number) => (
            <WebsiteCard website={website} i={i} key={i} />
          ))}
        </div>
        <div className="h-full lg:h-full min-w-full w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-1">
          {work.map((website: Webiste, i: number) => (
            <WebsiteCard website={website} i={i} key={i} />
          ))}
        </div>
      </div>

      <div className="flex items-center h-[5%] justify-center gap-2 text-black ">
        <div
          onClick={() => setIndex(0)}
          className={cn(
            `h-6 w-6 text-[12px] flex justify-center bg-transparent transition-all duration-1000 items-center border-2 text-white border-white rounded-md shadow-[0 0 20px rgba(255, 255, 255, 0.666)] backdrop-blur-[50px] glowing`,
            index === 0 && "bg-white text-black"
          )}
        >
          1
        </div>
        <div
          onClick={() => setIndex(1)}
          className={cn(
            `h-6 w-6 text-[12px] flex justify-center items-center border-2 transition-all duration-1000 text-white border-white rounded-md shadow-[0 0 20px rgba(255, 255, 255, 0.666)] backdrop-blur-[50px] glowing`,
            index === 1 && "bg-white text-black"
          )}
        >
          2
        </div>
      </div>
    </div>
  );
};

export default Work;
