"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import SectionDivider from "@/components/SectionDivider";
import { BsArrowDownRight, BsArrowRight, BsArrowUpLeft, BsArrowUpRight, BsLinkedin } from "react-icons/bs";
import ParallaxTitle from "./ParallaxTitle";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("PROJECTS", 0.5);

  const [isFixed, setIsFixed] = useState(false);

  const checkScroll = () => {
    if (window.scrollY) {
      setIsFixed(false);
    } else {
      setIsFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <section ref={ref} id="projects" className="min-w-[95%] scroll-mt-28 mb-28">
      <SectionDivider className="" />
      <div className="flex py-2 sm:py-10 flex-col sm:flex-row sm:justify-evenly ">
        <div className="flex justify-between sm:flex-col">
          <SectionHeading>
            (MY PROJECTS)
            <BsArrowDownRight className="w-5 ml-2 mt-1 sm:pt-1" />
          </SectionHeading>

          <div className="group bg-gray-900 text-sm sm:text-lg font-medium bg-opacity-20 text-light px-4 sm:py-3 rounded-[5px] flex items-center sm:gap-2  outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105 transition dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:text-dark pl-2 cursor-pointer">
            <p className=""><Link href='/projects' className="">VIEW ALL PROJECTS</Link></p>
            <BsArrowUpRight className="hidden sm:block w-5  group-hover:-translate-y-1 group-hover:translate-x-1" />
            <BsArrowRight className="sm:hidden w-5 ml-2 mt-1 sm:pt-1  group-hover:-translate-y-1 group-hover:-translate-x-1" />
          </div>
        </div>

        <SectionDivider className="sm:w-0.5 sm:h-auto" />
        <div className="mt-8 flex flex-col items-center">
          {projectsData.slice(0, 3).map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
