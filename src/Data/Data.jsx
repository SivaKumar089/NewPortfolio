// src/Data/Data.jsx
import {
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { TbMessageChatbotFilled } from "react-icons/tb";

export const navItems = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Contact",
];

export const socialLinks = [
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sivakumar-k-208208288/",
    color: "text-blue-500",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    link: "https://github.com/SivaKumar089",
    color: "text-gray-300",
  },
  {
    icon: FaXTwitter,
    title: "Twitter",
    link: "https://x.com/home",
    color: "text-sky-500",
  },
  {
    icon: IoCallSharp,
    title: "Phone",
    link: "tel:+919342474302",
    color: "text-green-500",
  },
  {
    icon: IoMdMail,
    title: "Email",
    link: "mailto:kumarsiva200426@gmail.com",
    color: "text-red-500",
  },
];

import { SiTailwindcss, SiDjango, SiPostgresql } from "react-icons/si";

export const skillsData = [
  {
    name: "HTML",
    level: 90,
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    level: 85,
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: FaJs,
    color: "text-yellow-400",
  },
  {
    name: "React.js",
    level: 85,
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    name: "Python",
    level: 80,
    icon: FaPython,
    color: "text-green-500",
  },
  {
    name: "Django",
    level: 85,
    icon: SiDjango,
    color: "text-emerald-700",
  },

  {
    name: "Git",
    level: 90,
    icon: FaGitAlt,
    color: "text-red-500",
  },
  {
    name: "PostgreSQL",
    level: 80,
    icon: SiPostgresql,
    color: "text-blue-600",
  },
];

import { FaUniversity, FaSchool, FaChalkboardTeacher } from "react-icons/fa";

export const educationData = [
  {
    icon: FaUniversity,
    degree: "B.E - Electronics and Communication Engineering",
    institution: "P.S.R. Engineering College, Sivakasi",
    year: "2025",
    percentage: "7.3",
  },
  {
    icon: FaChalkboardTeacher,
    degree: "HSC - State Board",
    institution: "S.S.H.N Higher Secondary School,Muhavur",
    year: "2021",
    percentage: "82.5",
  },
  {
    icon: FaSchool,
    degree: "SSLC - State Board",
    institution: "S.S.H.N Higher Secondary School,Muhavur",
    year: "2019",
    percentage: "73.8",
  },
];

import { FaBus, FaStore, FaUser, FaTicketAlt } from "react-icons/fa";

export const projects = [
  {
    icon: <FaStore />,
    title: " E-Commerce Website",
    tech: "HTML, CSS, JavaScript",
    description:
      "A front-end e-commerce web page with interactive UI, product listing, and basic cart interface.",
    live: "https://shopping-website-xi-orpin.vercel.app/",
    code: "https://github.com/SivaKumar089/shopping_website.git",
  },
  {
    icon: <FaUser />,
    title: "Personal Portfolio Website",
    tech: "React JS, Tailwind CSS",
    description:
      "A fully responsive and animated portfolio to showcase my skills, resume, and projects.",
    live: "https://sivakumarportfolio.netlify.app/",
    code: "https://github.com/SivaKumar089/NewPortfolio.git",
  },
  {
    icon: <FaTicketAlt />,
    title: "Ticket Booking App",
    tech: "React.js, Django, Tailwind CSS",
    description:
      "A full-stack application for booking movie tickets with seat selection and showtime management.",
    live: "https://bookit-web.netlify.app/",
    code:"https://bookit-web.netlify.app/",
  },
  {
    icon: <TbMessageChatbotFilled />,
    title: "Chat Bot",
    tech: "React.js, Django, Tailwind CSS",
    description:
      "An interactive chatbot integrated into my portfolio that helps visitors explore my projects, skills, and journey in a conversational way.",
    live: "https://chatapp-flow.netlify.app/",
    code:"https://github.com/SivaKumar089/chatapp_frontend.git"
  }

];

