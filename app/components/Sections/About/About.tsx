import React from "react";

import { getAboutContent } from "@/app/lib/actions/content";

import Timeline from "../../Timeline/Timeline";
import Profile from "../../Profile/Profile";

const About = async () => {
  const aboutContent = await getAboutContent()
  const { profile, timeline } = aboutContent

  return (
    <div className="w-full h-[90%] flex lg:flex-col gap-16 lg:gap-16 lg:mt-5 mt-0">
      <div>
        <Timeline timeline={timeline} />
      </div>

      <Profile profile={profile} />
    </div>
  );
};

export default About;
