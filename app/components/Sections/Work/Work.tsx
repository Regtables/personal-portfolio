import React from "react";

import { getWorkContent } from "../../../lib/actions/content";
import { Webiste } from "@/app/lib/types";
import WebsiteCard from "../../Cards/WebsiteCard/WebsiteCard";

const Work = async () => {
  const work = await getWorkContent();

  return (
    <div className="h-[99%] w-full grid grid-cols-3 gap-1" id = 'website-cards'>
      {work.map((website: Webiste, i: number) => (
        <WebsiteCard website={website} i={i} key={i} />
      ))}
    </div>
  );
};

export default Work;
