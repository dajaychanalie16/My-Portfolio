
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaServer,
  FaMicrochip,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiHostinger,
  SiMysql,
  SiPhp,
  SiArduino,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          FaNodeJs,
        ],
      },
      {
        title: "Tools & Version Control",
        icons: [
          FaGitAlt,
          FaGithub,
        ],
      },
      {
        title: "Hardware",
        icons: [
          SiArduino,
          FaMicrochip,
        ],
      },
      {
        title: "Deployment",
        icons: [
          SiHostinger,
          FaServer,
        ],
      },
    ],
  },

  {
    title: "certificates",
    info: [
      {
        title: "Ethical Hacking 101: Think Like a Hacker Defend Like a Pro",
        stage: "on Social Media",
        file: "/certi1.jpg",
      },
      {
        title: "CMD Warrior: Master the Command Prompt",
        stage: "on Social Media",
        file: "/certi2.jpg",
      },
      {
        title: "Azure Unlocked your Gateway to Cloud Computing",
        stage: "on Social Media",
        file: "/certi3.jpg",
      },
      {
        title: "Connected but Protected IOT Security Essential for Safer Smart World",
        stage: "on Social Media",
        file:"/certi4.jpg",
      },
      {
      title: "Cybersecurity Quality Assurance Detect, Test, Secure",
      stage: "on Social Media",
      file: "/certi5.jpg",
      }
    ],
  },


];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />



      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">

          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building{" "}
            <span className="text-accent">skills</span>{" "}
            Through Learning and Practice
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am an Information Technology student who is 
            continuously learning and developing my technical skills.
            I have basic knowledge of data analysis, computer hardware, 
            and other areas of technology. Through school projects and hands-on activities, 
            I am gaining experience in solving problems, exploring new tools, 
            and understanding how different systems work.
            I am eager to improve my abilities, gain practical experience, 
            and apply what I learn to real-world challenges.
          </motion.p>

        </div>

        {/* Information */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >

          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <button
                type="button"
                key={itemI}
                onClick={() => setIndex(itemI)}
                className={`capitalize xl:text-lg relative cursor-pointer
                  after:content-[''] after:absolute after:left-0
                  after:-bottom-1 after:h-[2px] after:transition-all
                  after:duration-300
                  ${
                    index === itemI
                      ? "text-accent after:w-full after:bg-accent"
                      : "text-white after:w-8 after:bg-white"
                  }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Information */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-5 items-center xl:items-start overflow-y-auto">

            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row max-w-full gap-x-2 items-center text-center text-white/60"
              >

                {/* Clickable certificate or experience text */}
                {item.file ? (
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title} - ${item.stage}`}
                    className="group flex flex-col md:flex-row items-center gap-x-2 cursor-pointer transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <span className="font-light mb-1 md:mb-0 group-hover:underline">
                      {item.title}
                    </span>

                    <span className="hidden md:inline">
                      -
                    </span>

                    <span className="text-sm group-hover:underline">
                      {item.stage}
                    </span>
                  </a>
                ) : (
                  <>
                    {/* Regular title */}
                    <div className="font-light mb-2 md:mb-0">
                      {item.title}
                    </div>

                    <div className="hidden md:flex">
                      -
                    </div>

                    {/* Regular description */}
                    <div className="text-sm">
                      {item.stage}
                    </div>
                  </>
                )}

                {/* Skill icons */}
                {item.icons && (
                  <div className="flex gap-x-4 mt-2 md:mt-0">
                    {item.icons.map((Icon, iconI) => (
                      <div
                        key={iconI}
                        className="text-2xl text-white"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
