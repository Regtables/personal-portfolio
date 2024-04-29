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
    text: "Although coding websites in React can be quite labour intensive, It has always been the only way I wanted to work. I believe in the next generation of the web and creating websites that can translate a feeling that is only possible with modular design.",
  },
  {
    icon: <Music {...lgIconProps} />,
    title: "Creative",
    text: "I believe that writing code is as creative as writing music. In both these enviroments I feel at home. Expressing my feelings and figuring out how to creatively and uniquely realize the concpets that are in my mind gives me great purpose and joy.",
  },
  {
    icon: <Layers {...lgIconProps} />,
    title: "Full Stack",
    text: "Since 2023 I have started writing basic backend code like authentication, e-commerce and CRUD applications. Although most of the work I do is front facing, figuring out how to elegantly and gracefully connect the frontend and backend gives me great sastifaction.",
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
      "Orginised",
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
      "Unique",
      "Tasteful",
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
