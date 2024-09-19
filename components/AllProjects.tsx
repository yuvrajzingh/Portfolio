import { projectsData as projects } from "@/lib/data";
import Image from "next/image";
import { BsArrowUpRight, BsGithub, BsLink45Deg, BsRobot } from "react-icons/bs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { FaExclamationTriangle } from "react-icons/fa";

function AllProjects() {
  return (
    <div className="overflow-hidden px-4 pb-20 pt-10 sm:pt-52 md:px-10">
      <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-3 lg:grid-cols-2 max-w-[75rem]  mx-auto">
        {projects.map((project) => (
          <HoverCard key={project.title}>
            <HoverCardTrigger asChild>
              <div               
                className="flex flex-col sm:flex-row bg-white/40 border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:bg-white/60 transition dark:text-darkText dark:bg-white/10 dark:border-gray-600 dark:hover:bg-white/5"
              >
                {/* Image Section */}
                <div className="relative w-full h-60 sm:h-auto">
                  <Image
                    src={project.imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between p-5 sm:p-8 w-full">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="leading-relaxed text-gray-700 dark:text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <HoverCardContent>
                    {"undermaintenance" in project &&
                      project.undermaintenance && (
                        <p className="text-yellow-500 text-sm text-center flex items-center justify-center">
                          <FaExclamationTriangle className="mr-2" /> Under
                          Maintenance
                        </p>
                      )}
                    <h3 className="flex items-center justify-center">
                      <BsRobot className="mr-2" />
                      <p className="text-xl font-semibold">Tech Stack</p>
                    </h3>

                    <ul className="flex flex-wrap gap-2 mt-4 justify-center">
                      {project.tags.map((tag, index) => (
                        <li
                          className="bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                          key={index}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </HoverCardContent>

                  <div className="mt-4 flex space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-gray-900 text-sm sm:text-md font-medium bg-opacity-20 text-light px-4 py-2 rounded-lg inline-flex items-center gap-1 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105 transition dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:text-dark "
                    >
                      <BsLink45Deg /> Visit <BsArrowUpRight />
                    </a>
                    <a
                      href={project.gitRepo}
                      target="_blank"
                      className="bg-gray-900 text-sm sm:text-md font-medium bg-opacity-20 text-light px-4 py-2 rounded-lg inline-flex items-center gap-1 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-105 transition dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:text-dark"
                    >
                      <BsGithub /> GitHub <BsArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
