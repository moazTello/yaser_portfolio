"use client";
import React, { useState, useTransition } from "react";
import Image from "next/legacy/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const TAB_DATA = [
    {
      id: "skills",
      title: "Skills",
      content: (
        <div className="flex text-[#edf1f4] w-full">
          <div className="flex flex-col md:flex-row">
            <ul className="list-disc pl-2 mr-8">
              <li>NLP</li>
              <li>Data Analysis</li>
              <li>Neural Networks</li>
              <li>Machine Learning</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
            <ul className="list-disc pl-2 mr-8">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <ul className="list-disc pl-2 mr-8">
            <li>MySQL</li>
            <li>Java Script</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      ),
    },
    {
      id: "education",
      title: "Education",
      content: (
        <ul className="list-disc text-[#edf1f4] pl-1">
          <li>
            <p className="text-lg font-semibold">
              Bachelor’s degree in Artificial Intelligence Engineering
            </p>
            <p className="text-md text-primary-500 font-bold">
              Arab International University
            </p>
            <p className="text-sm text-[#ADB7BE]">2018 - 2024</p>
          </li>
          <li className="mt-5">
            <p className="text-lg font-semibold">
              React.js, Java Script, HTML, CSS
            </p>
            <p className="text-md text-primary-500 font-bold">New Horizons</p>
            <p className="text-sm text-[#ADB7BE]">2020 - 2023</p>
          </li>
        </ul>
      ),
    },
    {
      id: "certifications",
      title: "Certifications",
      content: (
        <ul className="list-disc text-[#edf1f4] pl-1">
          <li>
            <p className="text-lg font-semibold">Java Script, HTML, CSS</p>
            <p className="text-md text-primary-500 font-bold">New Horizons</p>
            <p className="text-sm text-[#ADB7BE]">2020 - 2021</p>
          </li>
          <li className="mt-5">
            <p className="text-lg font-semibold">React.js Development</p>
            <p className="text-md text-primary-500 font-bold">New Horizons</p>
            <p className="text-sm text-[#ADB7BE]">2022 - 2023</p>
          </li>
        </ul>
      ),
    },
    {
      id: "experience",
      title: "Experience",
      content: (
        <ul className="list-disc text-[#edf1f4] pl-2">
          <li>
            <p className="text-lg font-semibold">
              React.js, HTML, CSS, JavaScript
            </p>
            <p className="text-md text-primary-500 font-bold">GrayScale</p>
            <p className="text-sm text-[#ADB7BE]">2020 - 2021</p>
          </li>
          <li className="mt-5">
            <p className="text-lg font-semibold">React.js Developer</p>
            <p className="text-md text-primary-500 font-bold">Orkabit</p>
            <p className="text-sm text-[#ADB7BE]">2023 - present</p>
          </li>
        </ul>
      ),
    },
  ];
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="mt-5">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 5 }}
          className="mt-4 md:mt-0 text-left order-first md:order-last flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-[#ADB7BE] lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Next.js, React, Redux, Node.js, Express,
            PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and
            I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8 mb-10 md:mb-0">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
        <motion.div
          className="md:order-first order-last"
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <Image
            src="/images/About_macbook_port.jpg"
            width={500}
            height={650}
            // objectFit="cover" objectPosition="center"
            // layout="fill"
            alt="About"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
