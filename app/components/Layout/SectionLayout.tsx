"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Section } from "../../lib/types";

import Banner from "../Banner/Banner";
import { useSection } from "../../context/SectionContext";

const SectionLayout = ({ heading, children, hero, left }: Section) => {
  const { inView, ref } = useInView();
  const { handleSectionChange, currentSection } = useSection();

  useEffect(() => {
    if (inView) {
      handleSectionChange(heading);
    }
  }, [inView]);

  return (
    <section
      className="h-screen snap-center relative overflow-hidden px-[6rem]"
      id={heading}
    >
      <Banner left={left!} />

      <div ref={ref} className="absolute top-[50%] h-[1px]" />

      {!hero && (
        <header className="relative z-10 py-[2rem]">
          <h2 className="text-[26px] font-[700]">{heading}</h2>
        </header>
      )}

      <div className="relative z-10 h-[80%]">{children}</div>
    </section>
  );
};

export default SectionLayout;
