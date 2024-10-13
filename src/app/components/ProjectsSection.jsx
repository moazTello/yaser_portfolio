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
              the business owner&apos;s Telegram account, and printed via a
              thermal printer using ESC/POS.
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
          <p className="mt-4 text-primary-500">Taxi Booking App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This mobile application facilitates the process of booking taxis,
              providing a seamless interaction between clients, drivers, and
              admins.
            </li>
            <li>
              It allows clients to search for available drivers, track their
              location, and manage trips, while drivers can accept requests and
              handle multiple rides.
            </li>
            <li>
              Admins oversee the entire ecosystem, managing users and resolving
              issues.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              User Authentication: Clients, drivers, and admins can sign up and
              sign in securely.
            </li>
            <li>
              Driver Availability & Request Handling: Clients can search for
              available taxi drivers, send ride requests, and drivers can either
              accept or reject them.
            </li>
            <li>
              Real-Time Location Tracking: Both clients and drivers can view
              each other’s locations on a map during a trip.
            </li>
            <li>
              Trip Management: Clients can select a destination, see the
              estimated cost, and track the driver’s location. Drivers can mark
              trips as completed, enabling them to receive new requests.
            </li>
            <li>
              Issue Reporting: Both drivers and clients can report problems
              encountered during trips.
            </li>
            <li>
              Order & History Tracking: Clients and drivers can view their past
              trips and order history.
            </li>
            <li>
              Admin Dashboard: Admins can manage users clients and drivers,
              approve driver requests to join, and view reports on issues from
              both clients and drivers.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              React Native: Ensures a smooth and responsive user interface for
              mobile devices.
            </li>
            <li>Expo-Router: Facilitates navigation within the application.</li>
            <li>
              Maps Integration: Allows real-time location tracking and
              destination selection for clients and drivers.
            </li>
            <li>
              useContext: Manages global state across different components.
            </li>
            <li>Axios: Efficient handling of API requests.</li>
            <li>
              Nativewind: Provides styling solutions for the mobile interface.
            </li>
            <li>
              Expo Image Picker: Enables users to upload images, such as driver
              documents or profile photos.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Real-Time Tracking: Ensuring accurate, real-time location updates
              for both clients and drivers.
            </li>
            <li>
              Request Flow: Managing the lifecycle of ride requests, from
              searching to trip completion, while maintaining smooth
              interactions between clients and drivers.
            </li>
            <li>
              User Management: Efficiently handling driver approvals, client
              requests, and issue tracking within the admin panel.
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
          <p className="mt-4 text-primary-500">Tour Booking Web App</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This web application offers users the ability to explore exciting
              tours to destinations around the world.
            </li>
            <li>
              Clients can browse tours, view key details such as dates,
              locations, and pricing, and easily connect with trip organizers
              for booking.
            </li>
            <li>
              The platform also provides personalized tour recommendations based
              on users’ previous bookings, ensuring a tailored travel
              experience.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Tour Listings: Clients can browse tours to various destinations,
              with details on the date, location, and cost of each tour.
            </li>
            <li>
              Organizer Connection: Clients can directly connect with tour
              organizers to book trips and ask questions.
            </li>
            <li>
              Personalized Recommendations: The app suggests trips based on the
              client&apos;s past travel history, helping them discover new
              destinations that suit their preferences.
            </li>
            <li>
              Multi-Language Support: The app offers multilingual support,
              allowing users to switch between languages via i18-next
              integration.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>React.js: Provides a fast and interactive user interface.</li>
            <li>
              useEffect, useState, useMemo: Handle application lifecycle, state
              management, and performance optimization.
            </li>
            <li>
              Custom Hooks: Improve reusability and functionality across
              components.
            </li>
            <li>
              useContext: Streamlines state management for global components.
            </li>
            <li>
              react-router-dom: Manages navigation between different sections of
              the app.
            </li>
            <li>
              Axios: Handles API requests for fetching tour details and
              recommendations.
            </li>
            <li>
              i18-next: Enables multi-language support, ensuring the app is
              accessible to a global audience.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Recommendation Engine: Providing accurate and relevant trip
              recommendations based on past bookings.
            </li>
            <li>
              Seamless Booking: Ensuring smooth and intuitive interactions
              between clients and organizers for a hassle-free booking
              experience.
            </li>
            <li>
              Scalability: Supporting multiple languages and handling large
              amounts of tour data without compromising performance.
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
          <p className="mt-4 text-primary-500">
            Design Company Portfolio Website
          </p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              This portfolio website showcases the services and expertise of a
              design company, offering a sleek and visually appealing platform
              for potential clients to explore their work and connect via social
              media.
            </li>
            <li>
              The website is designed with a strong focus on aesthetics and user
              experience, ensuring that visitors can easily navigate and
              discover the company's offerings.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Key Features:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Service Showcase: The website highlights the company's range of
              design services in a visually engaging format.
            </li>
            <li>
              Social Media Integration: Direct links to the company’s social
              media accounts, allowing visitors to follow and connect with the
              brand.
            </li>
            <li>
              Responsive Design: Optimized for both desktop and mobile devices,
              ensuring a seamless experience across different screen sizes.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Tech Stack:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Bootstrap 5: Provides a responsive, mobile-first layout with
              built-in components and a modern design.
            </li>
            <li>
              HTML & CSS: Customizes the structure and style of the website,
              creating a unique and visually appealing design.
            </li>
            <li>
              Beautiful Design: Focused on clean, modern aesthetics that reflect
              the professionalism of the design company.
            </li>
          </ul>
          <p className="mt-4 text-slate-100">Challenges:</p>
          <ul className="list-disc px-2 mt-2 ml-2">
            <li>
              Aesthetic Consistency: Ensuring the design is both visually
              appealing and functional across various devices and screen sizes.
            </li>
            <li>
              Responsive Layout: Leveraging Bootstrap 5 to create a smooth,
              responsive experience without sacrificing design quality.
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
