"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const Projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Project 1",
    description:
      "A web application that retrieves and displays artwork details from the Metropolitan Museum of Art's API, featuring search functionality and categorized collections.",
    stack: [
      {
        name: "ReactJs",
      },
      {
        name: "ExpressJs",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Material UI, Bootstrap",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://github.com/Kush10022/Metropolitan-Museum-of-Art",
    github: "https://github.com/Kush10022/Metropolitan-Museum-of-Art",
  },
  {
    num: "02",
    category: "E-commerce ",
    title: "Project 2",
    description:
      "TicketKart is a platform enabling concert promoters and customers to manage events, sell and purchase tickets, and select preferred seats, including venue information.",
    stack: [
      {
        name: "Django(Python)",
      },
      {
        name: "SQLite",
      },
      {
        name: "HTML/CSS and JavaScript",
      },
      {
        name: "Pipenv",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://github.com/Kush10022/TicketMaster",
    github: "https://github.com/Kush10022/TicketMaster/tree/master",
  },
  {
    num: "03",
    category: "PSW website",
    title: "Project 3",
    description:
      "PSW Support is an online platform connecting individuals in need of personal care with verified Personal Support Workers (PSWs). It provides user registration, appointment booking, secure payments, and geolocation-based PSW availability.",
    stack: [
      {
        name: "NextJs",
      },
      {
        name: "ExpressJs",
      },
      {
        name: "MongoDB and Firebase",
      },
      {
        name: "Google Maps API",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/Kush10022/pswFrontend",
    github: "https://github.com/Kush10022/pswFrontend",
  },
];
const Work = () => {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(Projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex item-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
