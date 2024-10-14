"use client";
import React, { useState } from "react";
import Image from "next/legacy/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  const [textColor, setTextColor] = useState("text-white");
  const handleDownload = () => {
    const fileUrl = "/YaserAlsamsam.pdf";
    const fileName = "YaserAlsamsam.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5 }}
          className="col-span-7 place-self-center md:self-center text-center sm:text-left z-10"
        >
          <h1
            // className={`${textColor} text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-500 to-primary-700 text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold pb-4`}
            className={`${textColor} text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold pb-4`}
          >
            <span
              // className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 via-primary-500 to-primary-200"
              className="text-primary-500"
            >
              {/* Hello, I'm{" "} */}
              <TypeAnimation
                sequence={["Hello, I'm "]}
                wrapper="span"
                speed={200}
                //   style={{ fontSize: "2em", display: "inline-block" }}
                repeat={0}
                cursor={false}
              />
            </span>
            <br />
            <TypeAnimation
              sequence={[
                1500,
                "Yaser",
                () =>
                  setTextColor(
                    // "text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-500 to-primary-700"
                    "text-primary-500"
                  ),
                2000,
                () => setTextColor("text-white"),
                "Web Developer",
                () =>
                  setTextColor(
                    // "text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-500 to-primary-700"
                    "text-primary-500"
                  ),

                1500,
                () => setTextColor("text-white"),
                "Backend Developer",
                () =>
                  setTextColor(
                    // "text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-500 to-primary-700"
                    "text-primary-500"
                  ),
                1500,
                () => setTextColor("text-white"),
              ]}
              wrapper="span"
              speed={200}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <h5 className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            <TypeAnimation
              sequence={[
                1500,
                "Artificial Intelligence Engineer background in creating and LinkedIn\nexecuting innovative software solutions to enhance business\nproductivity. Highly experienced in all aspects of the software\ndevelopment lifecycle, from concept through to development GitHub\nand delivery, Experience in providing successful solutions and\nsolving problems in less time and less effort.",
              ]}
              wrapper="p"
              speed={80}
              cursor={false}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={0}
            />
          </h5>
          <div className="w-full grid md:grid-cols-2 gap-0">
            <Link
              href="https://www.linkedin.com/in/yaser-alsamsam-47a0b331b"
              target="_blank"
              className="px-10 py-3 max-h-[50px] flex justify-center items-center w-full rounded-full bg-gradient-to-br from-primary-800 via-primary-500 to-primary-200 text-white hover:text-slate-300 outline-none border-none"
            >
              Hire Me
            </Link>
            <button
              onClick={handleDownload}
              className="px-1 py-1 w-full md:ml-2 rounded-full bg-transparent outline-none hover:bg-slate-800 bg-gradient-to-br from-primary-800 via-primary-500 to-primary-200 mt-3 md:mt-0 text-white"
            >
              <span className="block px-5 py-2 w-full h-full rounded-full bg-[#121212] hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5 }}
          className="col-span-5 place-self-center mt-24 lg:mt-4"
        >
          <div className="w-[240px] h-[300px] relative lg:w-[340px] lg:h-[400px] rounded-full">
            <Image
              src="/images/yaser.jpeg"
              // src="/images/hero-image.png"
              alt="moaz avatar"
              // width={500}
              // height={800}
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              // className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
