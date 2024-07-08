"use client";

import Image from "next/image";
import portpic from "../public/port_pic.jpg";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("HOME", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 sm:pt-5 relative scroll-mt-[100rem]"
    >
      <div className="w-[85vw]  mt-2 sm:py-12 sm:mb-[5rem] sm:flex sm:justify-center sm:items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-10">
          <div className="relative text-[3.3rem] sm:text-[7.5rem] font-normal leading-none text-left ml-3 sm:ml-0 text-lightText dark:text-darkText">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
              className="block"
            >
              YUVRAJ
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
              className="block text-light dark:text-dark sm:ml-[15rem] italic"
            >
              SINGH
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
              className="block"
            >
              BHADOURIA.
            </motion.div>
            <motion.p
              className="absolute top-16 right-8 sm:top-40 sm:left-10 sm:text-lg text-xs"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="italic">SOFTWARE DEVELOPER</span>
              <br />
              <span className="">BASED IN INDIA</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mx-auto sm:mx-0"
          >
            <Image
              src={portpic}
              alt="Yuvraj Photo"
              quality="100"
              priority={true}
              className="object-cover shadow-xl w-[20rem] sm:w-[23rem] sm:h-[30rem] "
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex mt-12 flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 bg-opacity-20 text-light px-7 py-3 rounded-[5px] flex items-center gap-2  outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105 transition dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:text-dark"
          onClick={() => {
            setActiveSection("CONTACT");
            setTimeOfLastClick(Date.now());
          }}
        >
          CONTACT ME HERE{" "}
          <BsArrowDownRight className="opacity-70 group-hover:translate-x-1 transition " />
        </Link>

        <a
          className="group  hover:text-light  px-7 py-3 text-gray-500 flex items-center gap-2 border-none focus:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:text-white dark:hover:text-dark"
          href="/CV_Yuvraj.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
