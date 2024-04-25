"use client";

import { LINKS } from "@/app/lib/constants";
import { Menu } from "lucide-react";
import { Instagram, Mail, X } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname()

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    handleToggle()
  }, [pathname])

  const renderLinkColor = (link: string) => {
    console.log(link);
    if (link === "home") {
      return "var(--color-red)";
    } else if (link === "about") {
      return "var(--color-green)";
    } else if (link === "work") {
      return "var(--color-lilac)";
    } else if (link === "skills") {
      return "var(--color-blue)";
    }
  };

  return (
    <div className="w-full">
      <div onClick={handleToggle} className="relative z-40">
        <Menu size={25} />
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#2b2a2a9c] backdrop-blur-[20px] h-screen z-[100] w-full flex flex-col"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            initial = {{opacity: 0}}
            exit={{ opacity: [1, 0]}}
          >
            <h1 className="font-bold text-center text-[30px] pt-10">Regtables</h1>
            <div className="grid grid-cols-1 gap-4 mt-8 w-full">
              {LINKS.map((link, i) => (
                <a href={`#${link.slug}`} key={i} onClick={handleToggle}>
                  <motion.div
                    className={`p-3 text-[25px] font-bold rounded-r-md relative z-50 opacity-100`}
                    whileInView={{
                      width: ["0%", `${90 - 10 * i}%`],
                      opacity: [0, 1],
                    }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    style={{
                      backgroundColor: renderLinkColor(link.slug),
                      width: `${90 - 10 * i}%`,
                    }}
                    initial={{ width: "0%", opacity: 0 }}
                    exit={{ width: '0%', transition: { delay: 0.1*-i, duration: 0.5 }}}
                  >
                    {link.link}
                  </motion.div>
                </a>
              ))}
              <motion.div
                className={`p-3 text-[25px] font-bold rounded-r-md relative z-50 opacity-100`}
                whileInView={{ width: ["0%", `50%`], opacity: [0, 1] }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{
                  backgroundColor: "var(--color-yellow)",
                  width: "50%",
                }}
                initial={{ width: "0%", opacity: 0 }}
                exit={{ width: '0%', transition: { delay: -0.1, duration: 0.5 }}}
                onClick={handleToggle}
              >
                contact
              </motion.div>
            </div>

            <div className="flex-grow-[1] flex items-center mb-5">
              <div
                className="h-[60px] w-[60px] mx-auto text-[40px] font-[300] flex justify-center items-center border-[2px] my-6 border-white rounded-full"
                onClick={handleToggle}
              >
                <X size={35} />
              </div>
            </div>

            <div className="flex gap-4 absolute bottom-5 justify-center w-full">
              <Instagram size={20} />
              <Mail size={20} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
