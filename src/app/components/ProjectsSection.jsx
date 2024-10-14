"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjcetTag from "./ProjcetTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const ProjectData = [
    {
      id: 1,
      title: "WAYGO",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Bus Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to streamline the booking process for
              bus trips across the Syrian Arab Republic.
            </li>
            <li>
              The platform offers bilingual support Arabic and English and
              integrates electronic payment systems to provide users with a
              seamless and efficient booking experience.
            </li>
            <li>
              Users can easily search for available bus routes, select their
              preferred travel times, and secure their tickets online.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Bilingual Support: Full support for Arabic and English languages
              to accommodate a diverse user base.
            </li>
            <li>
              Secure Payments: Integrated electronic payment gateway for quick
              and secure transactions.
            </li>
            <li>
              Real-Time Availability: Users can view real-time bus schedules and
              seat availability.
            </li>
            <li>
              Responsive Design: Optimized for various screen sizes and devices
              for easy access from anywhere.
            </li>
            <li>
              Tech Stack: Built with React.js, ensuring fast rendering, smooth
              performance.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              useContext: Ensures efficient state management across components.
            </li>
            <li>
              Zustand: Lightweight state management for better scalability and
              performance.
            </li>
            <li>
              Firebase: Used for backend services, including data storage and
              authentication.
            </li>
            <li>Axios: Handles API requests efficiently.</li>
            <li>
              i18-next: Enables full multilingual support for an international
              user base.
            </li>
            <li>
              useRef: Facilitates direct DOM manipulation and better handling of
              form inputs and other interactive elements.
            </li>
            <li>
              react-icon: Adds icons for a more intuitive user experience.
            </li>
            <li>
              react-router-dom: Manages seamless navigation between pages.
            </li>
            <li>
              useEffect, useState, useMemo: Manage application lifecycle and
              performance optimizations.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Ensuring a seamless experience across different languages and RTL
              right-to-left support for Arabic.
            </li>
            <li>
              Implementing secure and reliable electronic payment integration.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/way_go_group.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/waygo_page",
      previewUrl: "https://moaztello.github.io/waygo_page",
    },
  ];
  const projectsRef = useRef(null);
  const isInview = useInView(projectsRef, { once: true });
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );
  const variants = {
    initial: { scale: 0.5, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjcetTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjcetTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjcetTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
        {/* <ProjcetTag
          name="Design"
          onClick={handleTagChange}
          isSelected={tag === "Design"}
        /> */}
      </div>
      {/* <ul ref={projectsRef} className="grid md:grid-cols-4 gap-2 md:gap-12"> */}
      <ul ref={projectsRef}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={variants}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 1, delay: index * 0.8 }}
          >
            <ProjectCard
              // ref={projectsRef}
              // key={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
