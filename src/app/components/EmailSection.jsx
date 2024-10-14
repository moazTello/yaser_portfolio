"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import WhatsApp from "../../../public/whatsapp.svg";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";
const EmailSection = () => {
  const emailRef = useRef(null);
  const isInview = useInView(emailRef, { once: true });
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    try {
      await fetch(`${process.env.NEXT_PUBLIC_TELEGRAM_BOT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
          text: `Sender : ${data.email} \nSubject : ${data.subject} \nMessage : ${data.message}`,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  const variants = {
    initial: { opacity: 0, scale: 0.5, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
  };
  const variants2 = {
    initial: { opacity: 0, scale: 0.5, y: -50 },
    animate: { opacity: 1, scale: 1, y: 0 },
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div
        ref={emailRef}
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
      ></div>
      <motion.div
        variants={variants2}
        initial="initial"
        animate={isInview ? "animate" : "initial"}
        transition={{ duration: 3 }}
        className="z-10"
      >
        <h5 className="text-xl font-bold text-white my-2">
          Lest&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link target="_blank" href="https://github.com/moazTello">
            <Image src={GithubIcon} alt="Github" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/mmt-tello-9b0a4026a/"
          >
            <Image src={LinkedInIcon} alt="Linked in" />
          </Link>
          <Link target="_blank" href="https://wa.me/+963968767511">
            <Image src={WhatsApp} alt="Linked in" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isInview ? "animate" : "initial"}
        transition={{ duration: 3 }}
      >
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="mohamad@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
