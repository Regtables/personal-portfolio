import React from "react";

import { getAboutContent } from "@/app/lib/actions/content";

import Timeline from "../../Timeline/Timeline";
import Profile from "../../Profile/Profile";

const About = async () => {
  const aboutContent = await getAboutContent()
  const { profile, timeline } = aboutContent

  return (
    <div className="w-full flex flex-col gap-20 mt-5">
      <div>
        <Timeline timeline={timeline} />
      </div>

      <Profile profile={profile} />
    </div>
  );
};

export default About;
