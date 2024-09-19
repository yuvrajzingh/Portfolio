"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";
import { BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("SKILLS");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 min-w-[95%] scroll-mt-28 text-center "
    >

      <SectionDivider className=""/>
      <div className="flex py-2 sm:py-10 flex-col-reverse sm:flex-row sm:justify-evenly">
      <ul className="flex flex-wrap mt-8 max-w-[40rem] justify-center gap-2 text-lg text-gray-800">
  {skillsData.map((skill, index) => (
    <motion.li
      className="bg-white/40 border border-gray-300 rounded-[5px] px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:border-gray-600 flex items-center"
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      custom={index}
    >
      <div className="flex items-center">
        <Image src={skill.icon} alt={skill.name} width={40} height={40} /> 
        <p className="mt-1 font-medium ml-2">{skill.name}</p>
      </div>
    </motion.li>
  ))}
</ul>

        <SectionDivider className="sm:w-0.5 sm:h-auto"/>
        <SectionHeading>
          <BsArrowDownLeft className="hidden w-5 mr-2 mt-1 sm:block sm:pt-1 "/>
          (MY SKILLS)
          <BsArrowDownRight className="w-5 ml-2 mt-1  sm:hidden"/>
        </SectionHeading>
      </div>
    </section>
  );
}