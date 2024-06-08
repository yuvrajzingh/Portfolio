"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative w-screen h-24 ">
      <a href="/">
        <motion.h3
          className="fixed hidden px-4 top-6 left-4 text-gray-700 border-y bg-transparent backdrop-blur-[0.5rem] border-gray-700 sm:flex sm:justify-center dark:text-white dark:border-white"
          initial={{ y: -100, x: "-0.5%", opacity: 0 }}
          animate={{ y: 0, x: "-0.5%", opacity: 1 }}
        >
          YUVRAJ SINGH
        </motion.h3>
      </a>

      <motion.div
        className="fixed top-0 right-0 h-[4.5rem] w-full rounded-[5px] bg-transparent bg-opacity-10 shadow-lg  backdrop-blur-[0.5rem] sm:top-3  sm:border-white sm:h-[3.25rem] sm:w-[40rem] sm:right-9 dark:bg-opacity-30 dark:shadow-gray-500/10"
        initial={{ y: -100, x: "-0.5%", opacity: 0 }}
        animate={{ y: 0, x: "-0.5%", opacity: 1 }}
      >
        <nav className="flex fixed top-[0.15rem] right-1/2 translate-x-1/2   h-12  py-2 sm:top-[0.22rem] sm:h-[initial] sm:py-0 sm:right-80 ">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center  gap-y-1 text-[0.9rem] font-medium text-gray-900 dark:text-white sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center relative"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-500 transition  dark:hover:text-gray-300 ",
                    {
                      "text-light dark:text-dark":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-900  rounded-full absolute inset-0 -z-10 sm:rounded-[5px] dark:bg-gray-400 dark:bg-opacity-30"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
