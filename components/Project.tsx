"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  link,
  gitRepo,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
  ref={ref}
  style={{
    scale: scaleProgess,
    opacity: opacityProgess,
  }}
  className="group mb-3 sm:mb-8 last:mb-0"
>
  <section className="group bg-white/40 max-w-[22rem] sm:max-w-[42rem] border border-gray-300 rounded-[5px] overflow-hidden cursor-pointer sm:pr-8 relative sm:h-[20rem] hover:bg-white/60 rounded-t-xl transition sm:group-even:pl-8 dark:text-darkText dark:bg-white/10 dark:border-gray-600 dark:hover:bg-white/20">
    <Link href={link} target="_blank">
      {/* Image for mobile screens */}
      <div className="relative w-full pb-[75%] sm:hidden">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          layout="fill"
          objectFit="cover"
          quality={95}
          className="absolute top-0 left-0 w-full h-full rounded-t-lg shadow-2xl"
        />
      </div>
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 overflow-hidden text-ellipsis sm:whitespace-normal">
          {description}
        </p>

        <div className="mt-4 mb-6">
          <a
            href={gitRepo}
            target="_blank"
            className="bg-gray-900 text-sm sm:text-lg font-medium bg-opacity-20 text-light px-4 py-1 rounded-[5px] inline-flex items-center gap-1 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105 transition dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:text-dark pl-2 cursor-pointer"
          >
            <BsGithub /> GitHub <BsArrowUpRight />
          </a>
        </div>

        <ul className="flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Image for small screens and above */}
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block top-8 h-full object-cover -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
      />

      {/* Banner */}
      <motion.div
  initial={{ opacity: 0, x: '-50%' }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.3 }}
  className="absolute top-2 left-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 sm:opacity-0 sm:group-even:right-2 sm:group-even:left-auto sm:left-2 
    px-3 py-1 bg-gray-900 dark:bg-gray-100 dark:text-gray-700 text-gray-300 text-sm font-semibold rounded-md shadow-lg
    sm:block hidden
    before:content-[''] before:absolute before:top-1/2 before:-left-2 before:w-0 before:h-0 before:border-4 before:border-transparent before:border-r-gray-900 dark:before:border-r-gray-100"
>
  Visit
</motion.div>

    </Link>
  </section>
</motion.div>



  );
}
