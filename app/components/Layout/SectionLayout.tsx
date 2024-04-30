"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Section } from "../../lib/types";
import { useSection } from "../../context/SectionContext";

import Banner from "../Banner/Banner";

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
      className="min-h-screen section lg:h-screen snap-center relative lg:overflow-hidden overflow-x-hidden overflow-y-visible lg:px-[6.5rem] px-[1rem]"
      id={heading}
      // style= {heading === 'home' ? { scrollMarginTop: '80px'} : { scrollMarginTop: '0px' }}
    >
      <div id = 'banner'>
        <Banner left={left!} />
      </div>

      <div ref={ref} className="absolute left-0 top-[50%] h-[1px]" />

      {!hero && (
        <header className="relative z-10 py-[0.5rem] pb-[1rem] lg:py-[2rem] lg:pb-[1rem]">
          <h2 className="text-[26px] font-[700]">{heading}</h2>
        </header>
      )}

      <div className="relative z-10 h-[87%] lg:h-[85%]">{children}</div>
    </section>
  );
};

export default SectionLayout;
