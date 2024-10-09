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
      description: "project WayGo",
      image: "/images/projects/way_go_group.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/waygo_page",
      previewUrl: "https://moaztello.github.io/waygo_page",
    },
    {
      id: 2,
      title: "YAMAN CACHIER",
      description: "project WayGo",
      image: "/images/projects/yaman_cashier.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/yaman_project",
      previewUrl: "https://moaztello.github.io/yaman_project/",
    },
    {
      id: 3,
      title: "TELLO TOK",
      description: "project WayGo",
      image: "/images/projects/tello_app.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "CHAT APP",
      description: "project WayGo",
      image: "/images/projects/chat_app.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/moazChatApp",
      previewUrl: "https://moaztello-chat-app.onrender.com/",
    },
    {
      id: 5,
      title: "WASSELNY",
      description: "project WayGo",
      image: "/images/projects/taxi.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "FUSHA",
      description: "project WayGo",
      image: "/images/projects/fusha.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/demo",
      previewUrl: "https://moaztello.github.io/demo/",
    },
    {
      id: 7,
      title: "SPACE TIME",
      description: "project WayGo",
      image: "/images/projects/space_time.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/space_time",
      previewUrl: "https://moaztello.github.io/space_time/",
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
    initial: { x: 100, y: 50, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
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
      <ul 
      ref={projectsRef} 
      className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={variants}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 1, delay: index * 0.8 }}
          >
            <ProjectCard
              // key={project.id}
              title={project.title}
              imageUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
