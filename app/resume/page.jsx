"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  Description:
    "I am a software developer with a passion for web development. I am excel at crafting elegent digital experience and I do have the knowledge of different programming language and I am always ready to learn new things.",

  info: [
    {
      fieldname: "Name:",
      fieldvalue: "Kush Patel",
    },
    {
      fieldname: "Phone:",
      fieldvalue: "+1 (647)-773-2116",
    },
    {
      fieldname: "Projects:",
      fieldvalue: "10+",
    },
    {
      fieldname: "Email:",
      fieldvalue: "kushpatel11100@gmail.com",
    },
    {
      fieldname: "Languages:",
      fieldvalue: "English, Hindi, Gujarati",
    },
  ],
};

const experience = {
  icon: "👨‍💻",
  title: "My Experience",
  description:
    "I have worked on multiple projects and have experience in web development.",
  items: [
    {
      company: "Seneca Polytechnic",
      position: "Peer tutor(Part Time)",
      duration: "September 2024 - Present",
    },
    {
      company: "Seneca Polytechnic",
      position: "SLG Leader(Intern)",
      duration: "Winter 2025",
    },
    {
      company: "Seneca Polytechnic",
      position: "SLG Leader(Intern)",
      duration: "Summer 2024",
    },
  ],
};

const Education = {
  icon: "🎓",
  title: "My Education",
  description:
    "Completed my Bachelor degree in Software Development from Seneca polytechnic. ",
  items: [
    {
      institution: "Seneca Polytechnic",
      degree: "BSD (Hounours Bachelor of technology - Software Development)",
      duration: "September 2021 - Present",
    },
  ],
};
const Skills = {
  title: "My Skills",
  description:
    "I have the knowledge of different programming languages and tools.",
  skillList: [
    {
      name: "HTML 5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS 3",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Node js",
      icon: <FaNodeJs />,
    },
    {
      name: "Next js",
      icon: <SiNextdotjs />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-6 xl:px-0">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience" className="rounded h-8">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="rounded h-8">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded h-8">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="rounded h-8">
              About me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-h-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              {/*Education*/}
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Education.title}</h3>
                <p className="max-h-[600px] text-white/60 mx-auto xl:mx-0">
                  {Education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-sm max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {Skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldname}</span>
                      <span className="text-xl">{item.fieldvalue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
