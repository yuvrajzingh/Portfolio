"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";
import { BsArrowDownRight } from "react-icons/bs";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-20 min-w-[95%] sm:mb-40">
      <SectionDivider className="" />
      <div className="flex py-2 sm:py-10 flex-col sm:flex-row sm:justify-evenly">
        <SectionHeading>
          (MY EXPERIENCE)
          <BsArrowDownRight className="w-5 ml-2 mt-1 mr-5 sm:pt-1" />
        </SectionHeading>
        <SectionDivider className="sm:w-0.5 sm:h-auto"/>
        <div className="sm:min-w-[70rem] py-10">
          <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background:
                      theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid black",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    visibility: "visible",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "light"
                        ? "0.4rem solid black"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                    visibility: "visible",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background:
                      theme === "light" ? "white" : "rgba(0,0,0)",
                    fontSize: "1.5rem",
                    visibility: "visible",
                  }}
                >
                  <h3 className="font-semibold text-[1.8rem] capitalize">{item.title}</h3>
                  <h5 className="font-semibold text-[1.2rem] text-2xl !mt-0">{item.subtitle}</h5>
                  <p className="font-semibold text[#78D2DE] text-light dark:text-dark text-2xl !mt-0">{item.oragnization}</p>
                  <p className="font-semibold text-2xl !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}