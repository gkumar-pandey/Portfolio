import techTribeImage from "@/public/assets/Tech-Tribe.png";
import restaurantApiImage from "@/public/assets/restaurant-api.png";
import travelApiImage from "@/public/assets/travel-api.png";
import trackpenseImage from "@/public/assets/trackpense.png";
import doclyImage from "@/public/assets/docly.png";
import { FaGithub } from "react-icons/fa";
import {
  c,
  chakraui,
  chartjs,
  cpp,
  css,
  express,
  figma,
  firebase,
  framermotion,
  git,
  github,
  html,
  jest,
  js,
  linux,
  materialui,
  mongodb,
  mongoose,
  nextjs,
  nodejs,
  postman,
  py,
  react,
  reactRouter,
  redux,
  sql,
  tailwind,
  ts,
  vercel,
  vite,
  vscode,
} from "@/public";

export const languageSkillIcons = [
  { skill: "Typescript", icon: ts },
  { skill: "JavaScript", icon: js },
  {
    skill: "CSS",
    icon: css,
  },
  {
    skill: "Html",
    icon: html,
  },
  {
    skill: "Python",
    icon: py,
  },
  {
    skill: "C++",
    icon: cpp,
  },
  {
    skill: "C",
    icon: c,
  },
];
export const FrontendskillsIcons = [
  {
    skill: "NextJs",
    icon: nextjs,
  },
  {
    skill: "ReactJs",
    icon: react,
  },
  {
    skill: "Redux",
    icon: redux,
  },

  {
    skill: "Tailwind",
    icon: tailwind,
  },
  {
    skill: "Jest",
    icon: jest,
  },
  {
    skill: "MaterialUI",
    icon: materialui,
  },
  {
    skill: "React Router",
    icon: reactRouter,
  },
  {
    skill: "ChakraUI",
    icon: chakraui,
  },
  {
    skill: "Framer Motion",
    icon: framermotion,
  },
  {
    skill: "ChartJs",
    icon: chartjs,
  },
];

export const backendSkillsIcons = [
  { skill: "NodeJs", icon: nodejs },
  { skill: "Express", icon: express },
  { skill: "MongoDB", icon: mongodb },
  { skill: "Firebase", icon: firebase },
  { skill: "MySql", icon: sql },
  { skill: "Mongoose", icon: mongoose },
];

export const toolsIcons = [
  { skill: "Linux", icon: linux },
  { skill: "Git", icon: git },
  { skill: "GitHub", icon: github },
  { skill: "Vite", icon: vite },
  { skill: "Vercel", icon: vercel },
  { skill: "Postman", icon: postman },
  { skill: "Vscode", icon: vscode },
  { skill: "Figma", icon: figma },
];

export const projectsData = [
  {
    title: "TechGiz Ecommerce",
    type: "frontend",
    description:
      "Techgiz is web app build with ReactJs and vanilla CSS. Here you can buy variety of headphones of different brands and types",
    img: "https://res.cloudinary.com/dlykup1dh/image/upload/v1690013228/Project%20Gif/Techgiz_big2ck.gif",
    liveLink: "https://techgiz-ecommerce.vercel.app/",
    repoLink: "https://github.com/gkumar-pandey/Techgiz-ecommerce",
    languages: [
      "React",
      "JavaScript",
      "CSS",
      "react-router",
      "react-icons",
      "axios",
      "mockbee",
    ],
  },
  {
    title: "TechTribe Social",
    type: "frontend",
    description:
      "TechTribe is a social media web app for people to connect with each other. Users can share pictures with others, upload, like, comment, and bookmark the posts. Follow each other and be connected.",
    liveLink: "https://tech-tribe-social.vercel.app/",
    repoLink: "https://github.com/gkumar-pandey/TechTribe-social",
    img: techTribeImage,
    languages: [
      "React",
      "JavaScript",
      "react-router",
      "context-api",
      "tailwind",
      "react-icons",
    ],
  },
  {
    title: "Restaurant API | Restaurant Management",
    type: "backend",
    description:
      "A robust and versatile set of endpoints that empower developers to create feature-rich restaurant-centric applications.",
    liveLink:
      "https://documenter.getpostman.com/view/23291498/2s9YsT6os2#095fef73-83be-4e54-b877-d0ecc3b283cf",
    repoLink: "https://github.com/gkumar-pandey/restaurant-api",
    img: restaurantApiImage,
    languages: [
      "nodejs",
      "javaScript",
      "express",
      "mongodb",
      "dotenv",
      "cors",
      "helmet",
    ],
  },
  {
    title: "Travel API | Travel Management",
    type: "backend",
    description:
      "API endpoints to provide users with seamless travel recommendations and destination management.",
    liveLink: "https://documenter.getpostman.com/view/23291498/2s9YsT7UDZ",
    repoLink: "https://github.com/gkumar-pandey/travel-api",
    img: travelApiImage,
    languages: [
      "nodejs",
      "javaScript",
      "express",
      "mongodb",
      "dotenv",
      "cors",
      "postman",
      "helmet",
    ],
  },
  {
    title: "Trackpense",
    type: "full stack",
    img: trackpenseImage,
    description:
      "All-in-one financial companion, offers powerful tools for Income Management, Expense Tracking, Savings, and Detailed Reports.",
    liveLink: "https://trackpense-expense-tracker-app-l8nq.vercel.app/",
    repoLink:
      "https://github.com/gkumar-pandey/Trackpense--Expense-tracker-app",
    languages: [
      "react",
      "react-router",
      "axios",
      "redux-toolkit",
      "nodejs",
      "mongodb",
      "express",
      "react-icons",
      "ChakraUI",
    ],
  },
  {
    title: "Docly | Patient Management system",
    type: "full stack",
    img: doclyImage,
    description:
      "Streamline the management of patient information in a healthcare facility. Offers tools like patient records, view ward-specific data, etc.",
    liveLink: "https://docly-patient-management-system-wjgu.vercel.app/",
    repoLink:
      "https://github.com/gkumar-pandey/Docly-patient-management-system",
    languages: [
      "react",
      "react-router",
      "axios",
      "redux-toolkit",
      "nodejs",
      "mongodb",
      "express",
      "react-icons",
      "ChakraUI",
    ],
  },
];

// work experience details
export const workExperienceDetailsData = [
  {
    position: "Frontend Developer",
    company: "Freelancer",
    start_date: "03/2023",
    end_date: "05/2023",
    descriptions: [
      "Developed the official website of Zippy Crowd using Next.js, TypeScript, and Tailwind CSS",
      "Implemented responsive design and optimized performance for a seamless user experience.",
    ],
  },
];
