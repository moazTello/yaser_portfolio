'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
// import ProjcetTag from "./ProjcetTag";
import { motion, useInView } from 'framer-motion';

const ProjectsSection = () => {
  const ProjectData = [
    {
      id: 1,
      title: 'Scheduler',
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Schedualing Projects App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A website that helps in scheduling personal projects, tasks and organizing them, where each project has a
              number of tasks that must be carried out and based on which the project status changes
            </li>
          </ul>
        </div>
      ),
      image: '/images/projects/schedular.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/YaserAlsamsamSyr/projects',
      previewUrl: 'https://myprojects.yaseralsamsam.com/',
    },
    {
      id: 2,
      title: 'NFC Cards',
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">NFC Cards App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application that helps to inquire about employees and also allows the entry of a new employee,
              modification of employee information, and deletion of an employee. The application also contains a page
              for each employee to inquire about it through the employee's password, as it is considered as a username{' '}
            </li>
          </ul>
        </div>
      ),
      image: '/images/projects/NFC.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/YaserAlsamsamSyr/NFCcard',
      previewUrl: 'https://nfccard.yaseralsamsam.com/',
    },
    {
      id: 3,
      title: 'Way GO',
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Way GO App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application directed to travel companies between governorates, as it helps a travel company to enter
              new flights and book travelers on flights and also facilitates the process of inquiring about travelers on
              any trip chosen by the travel company, whether the trip is active or finished, and the application also
              helps to cancel the reservation of a traveler from a trip
            </li>
          </ul>
        </div>
      ),
      image: '/images/projects/way_go_group.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/YaserAlsamsamSyr/waygoDesktop',
      previewUrl: 'https://waygodesktop.yaseralsamsam.com/',
    },
    {
      id: 4,
      title: 'Awtart',
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Awtar App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              An online store for the sale of perfumes of Awtar Al-Sultanate Company and to inquire about its products,
              and the store also contains a control panel to enter, modify and delete products. The store also has the
              feature of sending WhatsApp messages to a control panel containing requests sent by customers
            </li>
          </ul>
        </div>
      ),
      image: '/images/projects/Awtar.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/YaserAlsamsamSyr/awtarAlsultanate',
      previewUrl: 'http://awtaralsultanatee.yaseralsamsam.com/',
    },
  ];
  const projectsRef = useRef(null);
  const isInview = useInView(projectsRef, { once: true });
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = ProjectData.filter((project) => project.tag.includes(tag));
  const variants = {
    initial: { scale: 0.5, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* <ProjcetTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        /> */}
        {/* <ProjcetTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjcetTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        /> */}
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
            animate={isInview ? 'animate' : 'initial'}
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
