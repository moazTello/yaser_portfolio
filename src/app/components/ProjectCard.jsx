import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import Image from "next/image";
import Image from "next/legacy/image";
const ProjectCard = ({
  imageUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tag,
}) => {
  return (
    <div className="mb-8">
      <div
        className="h-52 max-h-52 md:max-h-72 w-full md:min-h-72 md:h-72 rounded-t-xl relative group"
      >
        <Image className="rounded-t-xl" src={imageUrl} objectFit="cover" objectPosition="center" layout="fill" alt={title}/>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000">
          <Link
            href={gitUrl}
            target="_blank"
            className="mr-3 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="w-8 h-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {!tag.includes("Mobile") ? (
            <Link
              href={previewUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="w-8 h-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 ">
        <h5 className="text-xl mb-2 md:ml-4 font-semibold ">{title}</h5>
        <div className="text-[#ADB7BE] md:pl-2">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
