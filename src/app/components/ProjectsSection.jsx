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
              The platform offers bilingual support (Arabic and English) and
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
              (right-to-left) support for Arabic.
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
    {
      id: 2,
      title: "YAMAN CACHIER",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Sales Management Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This web application is designed to streamline the management of
              sales, cash flow, and inventory for businesses.
            </li>
            <li>
              It offers a comprehensive suite of features that help users track
              transactions, monitor profits, and manage inventory, all within an
              intuitive and responsive interfaces.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Cashbox Management: Users can add cash to the cashbox and charge
              items to the store. The system calculates the price with and
              without profit, helping businesses track their earnings.
            </li>
            <li>
              Profit Calculation: Automatic monthly profit calculation based on
              sales. Every transaction is recorded and contributes to the
              overall profit report.
            </li>
            <li>
              Real-Time Inventory Management: When items are sold, the system
              automatically reduces the stock amount, ensuring up-to-date
              inventory levels.
            </li>
            <li>
              Invoice Generation: Invoices are generated for every sale, sent to
              the business owner’s Telegram account, and printed via a thermal
              printer using ESC/POS.
            </li>
            <li>
              Admin Dashboard: Admins can export invoices to an Excel file, view
              all past invoices, monitor profits, and see the total cash in the
              cashbox.
            </li>
            <li>
              Editable Items: Users can adjust the quantity and prices of items
              to keep inventory data accurate.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast, dynamic user interface.</li>
            <li>
              useContext: Ensures efficient state management across components.
            </li>
            <li>
              Firebase: Used for backend services, including data storage and
              authentication.
            </li>
            <li>Axios: Handles API requests efficiently.</li>
            <li>
              ESC/POS: Integrated for printing invoices via thermal printers.
            </li>
            <li>
              useEffect, useState, useMemo: Manage application lifecycle and
              performance optimizations.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Inventory and Cash Tracking: Ensuring accurate updates
              to inventory levels and cashbox amounts in real time.
            </li>
            <li>
              Seamless Invoice Generation: Sending invoices to Telegram and
              printing with thermal printers efficiently.
            </li>
            <li>
              Data Accuracy: Ensuring accurate calculations for monthly profits
              and cash flow management across the system.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/yaman_cashier.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/yaman_project",
      previewUrl: "https://moaztello.github.io/yaman_project/",
    },
    {
      id: 3,
      title: "TELLO TOK",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Social Media Mobile App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This mobile application, inspired by TikTok, is designed for users
              to create, share, and discover short-form videos with ease.
            </li>
            <li>
              The app provides a platform for creative expression and social
              interaction through video content.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              User Authentication: Users can sign up and sign in to manage their
              profiles.
            </li>
            <li>
              Video Upload and Management: Users can upload videos from their
              device, using the built-in video picker, and delete their own
              content if needed.
            </li>
            <li>
              Favorite Videos: Users can mark videos as favorites and easily
              access them in their personal list.
            </li>
            <li>
              Recommended Videos: The app suggests videos tailored to the user’s
              preferences, ensuring a personalized content experience.
            </li>
            <li>
              Profile Editing: Users can update their account information and
              preferences.
            </li>
            <li>
              Smooth Animations and Performance: Integrated animations provide a
              smooth and engaging user experience.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React Native Expo: Ensures cross-platform compatibility and ease
              of development.
            </li>
            <li>expo-router: Simplifies navigation across app screens.</li>
            <li>
              expo-image-picker & expo-document-picker: Enable users to upload
              videos from their devices.
            </li>
            <li>expo-av: Handles video playback functionality.</li>
            <li>
              useFonts: Adds custom fonts to enhance the app’s appearance.
            </li>
            <li>
              useContext, useState, useEffect: Manage state and handle app
              lifecycle efficiently.
            </li>
            <li>
              react-native-appwrite: Provides backend services such as
              authentication and file storage.
            </li>
            <li>
              react-native-animatable: Adds smooth, engaging animations for an
              enhanced user experience.
            </li>
            <li>
              MongoDB: Serves as the database for managing user data and video
              content.
            </li>
            <li>
              nativewind: For styling and ensuring a responsive, modern UI.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/tello_app.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "MOAZ CHAT APP",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Chat Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This chat application, inspired by WhatsApp, allows users to
              communicate in real time, manage their profiles, and enjoy music
              streaming directly within the app.
            </li>
            <li>
              Designed for a seamless and interactive messaging experience, it
              incorporates various modern technologies to ensure speed,
              security, and scalability.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Messaging: Users can send and receive messages instantly
              using socket.io for real-time communication.
            </li>
            <li>
              User Authentication: Secure sign-up and sign-in functionalities
              powered by JWT for token-based authentication.
            </li>
            <li>
              Profile Management: Users can edit their profile settings,
              ensuring a personalized experience.
            </li>
            <li>
              Music Streaming: Integrated music player for users to listen to
              music while using the app.
            </li>
            <li>
              Responsive Design: Tailwind CSS ensures a clean and modern UI that
              is responsive across devices.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React.js: Frontend framework for building a dynamic user
              interface.
            </li>
            <li>Zustand & useContext: Efficient state management solutions.</li>
            <li>socket.io: Handles real-time messaging and communication.</li>
            <li>
              Node.js & Express.js: Backend for managing user data, messaging,
              and API requests.
            </li>
            <li>
              MongoDB & Mongoose: Database and ORM for handling user profiles,
              messages, and settings.
            </li>
            <li>JWT: Secure authentication for user sessions.</li>
            <li>Vite: Fast build tool for optimized app performance.</li>
            <li>Tailwind CSS: Provides a responsive, modern user interface.</li>
            <li>
              useMemo, useRef, useEffect, useState: Ensure optimized performance
              and state management.
            </li>
            <li>react-router-dom: Navigation between different app pages.</li>
            <li>bcryptjs: Ensures secure password encryption.</li>
            <li>Multer: For file uploads, such as profile pictures.</li>
            <li>cookie-parser: Handles user session data in cookies.</li>
            <li>
              react-hot-toast: Delivers smooth, non-intrusive notifications.
            </li>
            <li>
              Deployed on Render: Ensures scalable and reliable app deployment.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/chat_app.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/moazChatApp",
      previewUrl: "https://moaztello-chat-app.onrender.com/",
    },
    {
      id: 5,
      title: "WASSELNY",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Bus Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to streamline the booking process for
              bus trips across the Syrian Arab Republic.
            </li>
            <li>
              The platform offers bilingual support (Arabic and English) and
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
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Ensuring a seamless experience across different languages and RTL
              (right-to-left) support for Arabic.
            </li>
            <li>
              Implementing secure and reliable electronic payment integration.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/taxi.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "FUSHA",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Bus Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to streamline the booking process for
              bus trips across the Syrian Arab Republic.
            </li>
            <li>
              The platform offers bilingual support (Arabic and English) and
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
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Ensuring a seamless experience across different languages and RTL
              (right-to-left) support for Arabic.
            </li>
            <li>
              Implementing secure and reliable electronic payment integration.
            </li>
          </ul>
        </div>
      ),
      image: "/images/projects/fusha.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/moazTello/demo",
      previewUrl: "https://moaztello.github.io/demo/",
    },
    {
      id: 7,
      title: "SPACE TIME",
      description: (
        <div className="flex w-full md:pl-4 flex-col">
          <p className="mt-4 text-primary-500">Bus Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              A web application designed to streamline the booking process for
              bus trips across the Syrian Arab Republic.
            </li>
            <li>
              The platform offers bilingual support (Arabic and English) and
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
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Ensuring a seamless experience across different languages and RTL
              (right-to-left) support for Arabic.
            </li>
            <li>
              Implementing secure and reliable electronic payment integration.
            </li>
          </ul>
        </div>
      ),
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
      {/* <ul ref={projectsRef} className="grid md:grid-cols-2 gap-8 md:gap-12"> */}
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
