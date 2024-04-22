import React from "react";
import {
  Anchor,
  CloudLightning,
  Music,
  Smile,
  Zap,
  Layers,
} from "react-feather";

import SkillCardLg from "../../Cards/SkillCardLg/SkillCardLg";
import SkillCardSml from "../../Cards/SkillCardSml/SkillCardSml";
import SkillCardMd from "../../Cards/SkillCardMd/SkillCardMd";

const mdIconProps = {
  size: 15,
};

const lgIconProps = {
  size: 15,
};

const LG_CARDS = [
  {
    icon: <Zap {...lgIconProps} />,
    title: "Modern",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <Music {...lgIconProps} />,
    title: "Creative",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <Layers {...lgIconProps} />,
    title: "Full Stack",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const SML_CARDS = [
  {
    skill: "javacript",
    icon: "/javascript.png",
  },
  {
    skill: "css",
    icon: "/css.png",
  },
  {
    skill: "html",
    icon: "/html.png",
    width: 32,
    height: 32
  },
  {
    skill: "react",
    icon: "/react.png",
  },
  {
    skill: "next.js",
    icon: "/next.png",
    height: 35,
    width: 35,
  },
  {
    skill: "git",
    icon: "/git.png",
    height: 58,
    width: 58,
  },
  {
    skill: "redux",
    icon: "/redux.png",
  },
  {
    skill: "node",
    icon: "/node.png",
    height: 50,
    width: 50,
  },
  {
    skill: "express",
    icon: "/express.png",
    height: 70,
    width: 70,
  },
  {
    skill: "mongDB",
    icon: "/mongo.png",
  },
  {
    skill: "sass",
    icon: "/sass.png",
    height: 35,
    width: 35,
  },
  {
    skill: "json web token",
    icon: "/jwt.png",
    height: 33,
    width: 33,
  },
  {
    skill: "figma",
    icon: "/figma.png",
  },
  {
    skill: "tailwind css",
    icon: "/tailwind.png",
  },
  {
    skill: "typescript",
    icon: "/typescript.png",
    height: 35,
    width: 35,
  },
  {
    skill: "sanity.io",
    icon: "/sanity.svg",
    width: 60,
    height: 60,
  },
];

const MD_CARDS_1 = [
  {
    icon: <Anchor {...mdIconProps} />,
    title: "Leadership",
    points: [
      "Decisive",
      "Accountable",
      "Manages Resources",
      "Instrinsictly Motivated",
      "Orginized",
    ],
  },
  {
    icon: <CloudLightning {...mdIconProps} />,
    title: "Critical Thinking",
    points: [
      "Problem Solving",
      "Adaptable",
      "Persistent",
      "Skeptical",
      "Reasonable",
    ],
  },
];

const MD_CARDS_2 = [
  {
    icon: <Music {...mdIconProps} />,
    title: "Creativity",
    points: [
      "Out of the box",
      "Intuitive",
      "Commited to cool",
      "Fun Details",
      "Experimental",
    ],
  },
  {
    icon: <Smile {...mdIconProps} />,
    title: "Social",
    points: ["Kind", "Talkative", "Loyal", "Quirky", "Warm"],
  },
];

const Skills = () => {
  return (
    <div className="flex h-full lg:h-[95%] gap-2">
      <div className="flex-[0.5] grid grid-rows-1 lg:grid-rows-3 gap-2 h-full">
        <div className="grid grid-cols-5 lg:grid-cols-8 gap-1 rounded-xl">
          {SML_CARDS.map((card, i) => (
            <SkillCardSml
              card={card}
              i={i}
              height={card.height}
              width={card.width}
              key={i}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-full">
          {MD_CARDS_1.map((card, i) => (
            <SkillCardMd card={card} i={i + 1} key={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-full">
          {MD_CARDS_2.map((card, i) => (
            <SkillCardMd card={card} i={i} key={i} />
          ))}
        </div>
      </div>

      <div className="flex-[0.5] grid grid-rows-3 gap-2 h-full rounded-xl">
        {LG_CARDS.map((card, i) => (
          <SkillCardLg card={card} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
