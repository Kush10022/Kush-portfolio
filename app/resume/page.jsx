"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaChartBar,
  FaFileExcel
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDocker, SiExpress, SiMongodb, SiGithub, SiPython, SiFirebase } from "react-icons/si";

const about = {
  title: "About Me",
  Description: `I am Kush Patel, a financial data analyst and software development graduate. At Compass Group Canada, I analyze financial performance across multiple dining units, prepare forecasts and variance reports, and build Excel reports for business decisions. I also develop full-stack projects and use SQL and Power BI to make data easier to understand.`,
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
      fieldname: "Focus:",
      fieldvalue: "Analytics & web development",
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
    "My professional work focuses on financial analysis, reporting, and data quality. My software projects demonstrate my full-stack development skills.",
  items: [
    {
      company: "Compass Group Canada",
      position: "Financial Data Analyst",
      duration: "May 2025 - Present",
      details: "Support FP&A, budgeting and forecasting across dining units. Analyze P&L results, sales and expense variances; prepare financial reports and reconcile records across CIMS, Orbit and Transact.",
    },
    {
      company: "Genious Infotech",
      position: "Data Analyst - Co-op",
      duration: "September 2024 - May 2025",
      details: "Developed SQL reporting, validated datasets, and worked with stakeholders to improve recurring reports using Python, Excel and Power BI.",
    },
  ],
};

const Education = {
  icon: "🎓",
  title: "My Education",
  description:
    "Completed an Honours Bachelor of Technology in Software Development at Seneca Polytechnic.",
  items: [
    {
      institution: "Seneca Polytechnic",
      degree: "Honours Bachelor of Technology - Software Development",
      duration: "September 2021 - August 2025",
    },
  ],
};
const Skills = {
  title: "My Skills",
  description:
    "Tools I use for financial reporting, data analysis and full-stack projects.",
  skillList: [
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
      name: "Node js",
      icon: <FaNodeJs />,
    },
    {
      name: "Next js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Docker",
      icon: <SiDocker />,
    },
    {
      name: "Express js",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
    },
    {
      name: "SQL",
      icon: <FaDatabase />,
    },
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "Power BI",
      icon: <FaChartBar />,
    },
    {
      name: "Excel",
      icon: <FaFileExcel />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase/>,
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
                <ScrollArea className="h-[430px]">
                  <ul className="grid grid-cols-1 gap-[20px] pr-4">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        <p className="text-sm text-white/60 text-center lg:text-left">{item.details}</p>
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-center items-center xl:justify-start gap-4"
                    >
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
