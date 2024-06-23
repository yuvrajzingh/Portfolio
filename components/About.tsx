"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import ParallaxTitle from "./ParallaxTitle";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionDivider from "@/components/SectionDivider";
import { BsArrowDownLeft, BsArrowDownRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("ABOUT");

  return (
    <motion.section
      ref={ref}
      className="mb-28 min-w-[95%] leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionDivider className="" />

      {/* <ParallaxTitle baseVelocity={-50}>ABOUT</ParallaxTitle> */}

      <div className="flex py-2 text-2xl sm:text-6xl sm:py-10 flex-col-reverse sm:flex-row font-semibold text-lightText dark:text-darkText">
        <div className="max-w-[70rem]">
          <p className="mt-3 sm:mb-3 px-5">
          As a Full Stack Developer, I focus on producing top-notch and impactful Web Applications.
          </p>

          <p className="mb-3 px-5 mt-10">
            I Focus on Simplicity and Aesthetics while 
            Creating Apps.
          </p>
        </div>
        <SectionDivider className="sm:w-0.5 sm:h-auto" />
        <div className="flex items-center justify-between sm:mx-auto sm:flex-col sm:justify-between">
          <SectionHeading>
            <BsArrowDownLeft className="hidden w-5 mr-2 mt-1 sm:block sm:ml-5 sm:pt-1" />
            (ABOUT ME)
            <BsArrowDownRight className="w-5 ml-2 mt-1 sm:hidden" />
          </SectionHeading>

          <div className="flex gap-3 sm:justify-evenly">
            <a
              className="border-none text-2xl rounded-full sm:p-4 text-light dark:text-dark sm:text-3xl flex items-center focus:scale-[1.08] hover:scale-[1.08]  active:scale-105 transition cursor-pointer"
              href="https://www.linkedin.com/in/yuvraj-singh-bhadouria-7b1b8121b/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="border-none text-[1.7rem] text-light dark:text-orange-600 flex items-center sm:text-[2.3rem] rounded-full focus:scale-[1.08] hover:scale-[1.08]  active:scale-105 transition cursor-pointer"
              href="https://github.com/yuvrajzingh"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
