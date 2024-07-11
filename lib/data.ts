import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sociopedia from "@/public/sociopedia.png";
import cartify from "@/public/cartify.png";
import dropboxv2 from "@/public/dropboxv2.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "HOME",
    hash: "#home",
  },
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "PROJECTS",
    hash: "#projects",
  },
  {
    name: "SKILLS",
    hash: "#skills",
  },
  {
    name: "EXPERIENCE",
    hash: "#experience",
  },
  {
    name: "CONTACT",
    hash: "#contact",
  },
] as const;  // as const make the above read-only 

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern",
    subtitle: "",
    location: "Kanpur, India",
    oragnization: "C3iHub, IIT Kanpur",
    description:
      "I worked as a FullStack developer for C3iHub and handled important projects.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - July 2023",
  },
  {
    title: "Bachelor of Technology",
    subtitle: "Computer Science and Engineering",
    location: "Bhubaneswar, India",
    oragnization: "Kalinga Institute of Industrial Technology",
    description:
      "CGPA - 8.69 ",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  }
] as const;

export const projectsData = [
  {
    title: "Sciopedia",
    description:
      "A niche community-focused Social Networking and Microblogging application.",
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind"],
    link: "https://sociopedia-yuzi.vercel.app/",
    gitRepo: "https://github.com/yuvrajzingh/Sociopedia",
    imageUrl: sociopedia,
  },
  {
    title: "Dropbox 2.0",
    description:
      "A file storage system to keep your files synchronized and make them accessible from anywhere.",
    tags: ["Next.JS", "TypeScript", "Firestore", "Clerk", "Redux"],
    link: "https://dropbox-v2.vercel.app/",
    gitRepo: "https://github.com/yuvrajzingh/Dropbox-2.0",
    imageUrl: dropboxv2,
  },
  {
    title: "Cartify",
    description:
      "A platform that provides businesses a way to manage, visualize, and analyze their data.",
    tags: ["React", "Tailwind", "Syncfusion EJ2"],
    link: "/",
    gitRepo: "https://github.com/yuvrajzingh/cartify-admin-dashboard",
    imageUrl:  cartify,
  },
] as const;


export const skillsData = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
  },
  {
    name: "Solidity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
  },

]