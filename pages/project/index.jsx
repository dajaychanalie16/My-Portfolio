import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsChevronDown,
  BsPlayCircleFill,
  BsX,
  BsBoxArrowUpRight,
} from "react-icons/bs";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const projectSections = [
  {
    id: "project1",
    title: "Website Development and Deployment — SneakDup",
    step: "PROJECT 1",
    description:
      "A full-stack streetwear and sneaker e-commerce website featuring product catalogs, customer authentication, an administrative POS system, and Google Gemini AI sales analysis.",
    items: [
      {
        title: "SneakDup E-Commerce Website",
        content: [
          [
            "Project Overview",
            "Explore the SneakDup streetwear and footwear storefront, featuring dynamic product filtering, cart management, user authentication, and staff portals."
          ],
          [
            "Source Code",
            "Inspect the complete application architecture, database schemas, and administrative tooling on GitHub."
          ],
          [
            "Live Website",
            "Visit the deployed SneakDup website to test the responsive interface, store catalog, and user journeys."
          ]
        ],
        links: [
          {
            label: "View Website",
            url: process.env.NEXT_PUBLIC_SNEAKDUP_URL || "https://sneakdup-eight.vercel.app"
          },
          {
            label: "GitHub Repository",
            url: "https://github.com/abdulrahmanalsaafinwork-dot/Sneakdup"
          }
        ]
      }
    ]
  },
{
  id: "project2",
  title: "Excel Data Cleaning and Analysis",
  step: "PROJECT 2",
  description:
    "An Excel project showcasing data organization, cleaning, analysis, charts, findings, and recommendations.",
  items: [
    {
      title: "Professional Sales Inventory Analyst",
      content: [
        [
          "Project Overview",
          "Explore my Excel workbook containing the sales and inventory analysis."
        ],
        [
          "Excel Workbook",
          "Open the workbook to review the dataset, analysis, charts, findings, and recommendations."
        ]
      ],
      links: [
        {
          label: "View Excel",
          url: "https://1drv.ms/x/c/389AAAB49D11C2EE/IQCnICWUZUXdS5mwxQfhSiAtAQe_yswd8smMt9sZIgcaG3M?e=uNxE31"
        },
        {
          label: "Download Excel",
          url: "/Professional_Sales_Inventory_Analyst.xlsx",
          download: true
        }
      ]
    }
  ]
}, 
{
  id: "cybersecurity",
  title: "Cybersecurity Specialization — Equifax Case Study",
  step: "PROJECT 3",
  description:
    "A defensive cybersecurity case study examining the 2017 Equifax data breach, its vulnerabilities, causes, risks, and preventive security practices.",

  items: [
    {
      title: "1. Vulnerability Identification",
      content: [
        [
          "Case Background",
          "In 2017, Equifax, a major credit-reporting company, experienced a large-scale data breach that exposed sensitive personal and financial information belonging to millions of people."
        ],
        [
          "Identified Vulnerability",
          "The primary vulnerability was a known security weakness in Apache Struts, a software framework used by an Equifax web application. A security patch was available, but the affected system remained unpatched."
        ],
        [
          "Additional Weaknesses",
          "The incident also revealed inadequate verification of required security patches and poor protection of certain administrative credentials."
        ],
        [
          "Key Lesson",
          "Identifying vulnerabilities is not enough. Organizations must ensure that security updates are successfully installed and that security controls operate as intended."
        ]
      ]
    },

    {
      title: "2. How the Vulnerability Occurred",
      content: [
        [
          "Root Cause",
          "A known vulnerability in Apache Struts was not successfully remediated, leaving the affected web application exposed to attack."
        ],
        [
          "Failed Patch Management",
          "Equifax had been notified about the Apache Struts vulnerability and instructed its personnel to patch affected systems. However, the company did not properly verify that the patch had been applied to the vulnerable system."
        ],
        [
          "Contributing Factors",
          "Weak patch-management procedures, insufficient verification, and incomplete visibility into installed software can allow known vulnerabilities to remain exploitable."
        ],
        [
          "Key Lesson",
          "IT teams should maintain software inventories, track security updates, verify successful installation, and regularly check systems for unresolved vulnerabilities."
        ]
      ]
    },

    {
      title: "3. Risks and Impacts",
      content: [
        [
          "Scale of the Breach",
          "According to the Federal Trade Commission (FTC), the breach affected approximately 147 million people."
        ],
        [
          "Identity Theft",
          "Stolen personal information can be used for identity theft and other fraudulent activities."
        ],
        [
          "Financial Fraud",
          "Exposed financial or payment-card information may be misused for unauthorized transactions and fraud."
        ],
        [
          "Privacy Loss",
          "Sensitive personal information can be exposed to unauthorized parties, affecting the privacy and security of individuals."
        ],
        [
          "Reputational Damage",
          "Customers may lose confidence in an organization that fails to protect their personal information."
        ],
        [
          "Legal and Financial Consequences",
          "Organizations may face investigations, penalties, lawsuits, and expenses related to remediation and recovery."
        ],
        [
          "Exposed Information",
          "The exposed information included names, dates of birth, Social Security numbers, and payment-card information."
        ]
      ]
    },

    {
      title: "4. How Developers Can Prevent It",
      content: [
        [
          "Apply Security Patches Promptly",
          "Address known vulnerabilities within an appropriate risk-based timeframe to reduce opportunities for exploitation."
        ],
        [
          "Verify Patches",
          "Confirm that updates have actually been installed on every affected system instead of relying only on notifications or reports."
        ],
        [
          "Maintain Software Inventories",
          "Keep an accurate record of applications, frameworks, libraries, and versions running throughout the organization."
        ],
        [
          "Protect Credentials",
          "Never store administrative passwords or other sensitive credentials in plain text. Use appropriate secure storage and access controls."
        ],
        [
          "Apply Least Privilege",
          "Give user accounts and applications only the permissions they need to perform their tasks."
        ],
        [
          "Monitor Systems",
          "Review security logs and network activity to identify unusual behavior and potential intrusions."
        ],
        [
          "Test Security Controls",
          "Perform vulnerability scanning and security assessments regularly to identify weaknesses before attackers can exploit them."
        ]
      ]
    },

    {
      title: "5. Security Best Practices",
      content: [
        [
          "Regular Patch Management",
          "Fix known software vulnerabilities through a documented process for evaluating, applying, and verifying updates."
        ],
        [
          "Vulnerability Scanning",
          "Identify weaknesses in applications, systems, and infrastructure through regular security scans."
        ],
        [
          "Security Testing",
          "Detect security problems during development and before deploying applications into production."
        ],
        [
          "Credential Protection",
          "Protect passwords, keys, tokens, and administrative credentials against unauthorized access."
        ],
        [
          "Least-Privilege Access",
          "Limit the permissions granted to users and applications to reduce the impact of compromised accounts."
        ],
        [
          "Network Segmentation",
          "Separate network resources to reduce an attacker's ability to move through the network after an initial compromise."
        ],
        [
          "Security Monitoring",
          "Monitor systems for suspicious activity, unauthorized access, and potential intrusions."
        ],
        [
          "Incident Response Planning",
          "Establish a clear process for identifying, containing, investigating, and recovering from security incidents."
        ],
        [
          "Regular Security Audits",
          "Verify that security policies and controls are operating effectively and address any identified gaps."
        ],
        [
          "Security Awareness Training",
          "Help employees recognize security risks and understand their responsibilities in protecting organizational information."
        ]
      ]
    },

    {
      title: "6. Conclusion and Key Lessons",
      content: [
        [
          "Main Finding",
          "The 2017 Equifax data breach demonstrates how a known software vulnerability can lead to a major cybersecurity incident when patch management and security verification are inadequate."
        ],
        [
          "Lessons for IT Professionals",
          "Timely patching, vulnerability management, credential protection, least-privilege access, security monitoring, and incident response are essential components of defensive cybersecurity."
        ],
        [
          "Developer Responsibility",
          "Security should be considered throughout the software and system lifecycle rather than only after an incident occurs."
        ],
        [
          "Overall Conclusion",
          "Organizations must combine secure development practices, reliable maintenance procedures, effective monitoring, and regular verification to reduce the likelihood and impact of similar incidents."
        ]
      ]
    }
  ]
},
{
    id: "step16",
    title: "Project Documentation",
    step: "STEP 16",
    description:
      "Documentation for the major project, including system design, development, testing, and Hostinger deployment.",
    items: [
      {
        title: "Requirements and Problem Statement",
        content: [
          ["Purpose", "Describe the problem, target users, and purpose of the system."],
          ["Requirements", "Document functional and non-functional requirements."],
        ],
      },
      {
        title: "System Analysis and Design",
        content: [
          ["Analysis", "Explain the existing system and proposed solution."],
          ["Design", "Include use cases, architecture, UML diagrams, ERD, and interface designs where applicable."],
        ],
      },
      {
        title: "Development and Technologies",
        content: [
          ["Development", "Document the implementation and major system features."],
          ["Technologies", "List the actual languages, frameworks, databases, and tools used in the project."],
        ],
      },
      {
        title: "Testing and Corrections",
        content: [
          ["Testing", "Record test cases, expected results, actual results, and test outcomes."],
          ["Corrections", "Document discovered bugs and the fixes applied."],
        ],
      },
      {
        title: "Deployment on Hostinger",
        content: [
          ["Hosting", "Document the hosting environment and deployment process."],
          ["Configuration", "Record relevant installation, configuration, and maintenance information without exposing credentials."],
        ],
      },
    ],
},
{
  id: "step17",
  title: "Problem-Solving Portfolio",
  step: "STEP 17",
  description:
    "Five IT troubleshooting cases demonstrating systematic diagnosis, solutions, and lessons learned across networking, computer performance, web applications, peripherals, and hardware.",

  items: [
    {
      title: "Case Study 1 — Computer Cannot Connect to Wi-Fi",
      content: [
        [
          "Problem",
          "The computer cannot connect to the available Wi-Fi network, or it connects but cannot access the internet."
        ],
        [
          "Possible Causes",
          "The Wi-Fi adapter may be disabled, the network driver may be outdated, IP or DNS settings may be incorrect, the router may have a problem, or the wireless signal may be weak."
        ],
        [
          "Diagnostic Procedure",
          "Check whether Wi-Fi is enabled and the correct network is selected. Test other devices on the same network, restart the computer or router if appropriate, inspect the adapter in Device Manager, and check IP configuration and connectivity."
        ],
        [
          "Solution",
          "Enable the adapter, reconnect to the correct network, restart the router if necessary, update or reinstall the network driver, and correct IP or DNS settings when required."
        ],
        [
          "Lesson Learned",
          "Determine whether the problem affects one computer or the entire network before changing settings. This helps identify whether the cause is local or network-related."
        ]
      ]
    },

    {
      title: "Case Study 2 — Computer Is Running Very Slowly",
      content: [
        [
          "Problem",
          "The computer takes a long time to start applications, responds slowly, or becomes unresponsive during normal use."
        ],
        [
          "Possible Causes",
          "Too many startup applications, excessive background processes, insufficient RAM, low storage space, malware, overheating, or a failing storage drive."
        ],
        [
          "Diagnostic Procedure",
          "Check CPU, memory, disk, and network usage in Task Manager. Review startup applications, inspect available storage, check cooling if overheating is suspected, run a trusted security scan, and check storage-drive health."
        ],
        [
          "Solution",
          "Disable unnecessary startup programs, close unneeded processes, free storage space, remove unwanted software, update the operating system and drivers, improve cooling if needed, and replace an unhealthy drive when diagnostics confirm failure."
        ],
        [
          "Lesson Learned",
          "Use resource monitoring and diagnostic evidence instead of immediately assuming that the computer needs more RAM."
        ]
      ]
    },

    {
      title: "Case Study 3 — Website or Web Application Will Not Load",
      content: [
        [
          "Problem",
          "A website or locally developed web application does not load correctly, displays an error, or shows a blank page."
        ],
        [
          "Possible Causes",
          "The web server may not be running, project configuration or file paths may be incorrect, the database may be unavailable, a port may be conflicting, application code may contain errors, or browser cache may cause issues."
        ],
        [
          "Diagnostic Procedure",
          "Read the browser error message, verify that the web server is running, inspect terminal and server logs, check the URL and port, test database connectivity when applicable, and inspect browser console and network errors."
        ],
        [
          "Solution",
          "Start the required server, correct configuration or file paths, resolve database connection problems, address port conflicts, fix the identified programming error, and clear cached data only when evidence indicates a browser-side issue."
        ],
        [
          "Lesson Learned",
          "Error messages and logs provide useful diagnostic evidence. Understand the cause before changing code to avoid introducing additional problems."
        ]
      ]
    },

    {
      title: "Case Study 4 — Printer Is Not Printing",
      content: [
        [
          "Problem",
          "A computer sends a document to a printer, but the printer does not print or remains stuck in the print queue."
        ],
        [
          "Possible Causes",
          "The printer may be offline or powered off, the wrong printer may be selected, paper or ink may be unavailable, print jobs may be stuck, the driver may be faulty, or the network connection may have failed."
        ],
        [
          "Diagnostic Procedure",
          "Check power, cables, paper, and printer status. Confirm the selected printer, inspect the print queue, print a test page, check the driver and device status, and verify network communication for network printers."
        ],
        [
          "Solution",
          "Restore the printer connection, correct paper or consumable problems, cancel stuck jobs, restart the print service when appropriate, update or reinstall the correct driver, and reconnect the printer if necessary."
        ],
        [
          "Lesson Learned",
          "Printing problems may involve hardware, software, or networking. Check simple physical causes before moving on to driver and operating-system troubleshooting."
        ]
      ]
    },

    {
      title: "Case Study 5 — Laptop Shows Screen Flickering",
      content: [
        [
          "Problem",
          "A laptop display repeatedly flickers, changes color, briefly goes black, or returns to normal after a few seconds."
        ],
        [
          "Possible Causes",
          "A graphics driver problem, loose or damaged display cable, faulty display panel, incorrect refresh-rate settings, overheating graphics hardware, or a software conflict."
        ],
        [
          "Diagnostic Procedure",
          "Observe whether flickering occurs before Windows loads or only after login. Connect an external monitor, update or roll back the graphics driver if appropriate, check display settings, test in Safe Mode when useful, and arrange qualified hardware inspection if necessary."
        ],
        [
          "Solution",
          "Correct display settings, update or roll back the graphics driver when appropriate, resolve software conflicts, and seek hardware inspection if the issue continues. A damaged cable or panel may require repair or replacement."
        ],
        [
          "Lesson Learned",
          "Testing with an external monitor and checking when flickering occurs can help distinguish software problems from hardware faults."
        ]
      ]
    }
  ]
},
{
  id: "step19",
  title: "AI Literacy Evidence",
  step: "STEP 19",
  description:
    "Evidence of responsible AI use, including assistance received, verification, and lessons learned.",
  items: [
    {
      title: "AI Usage Log",
      content: [
        [
          "Purpose",
          "This document records how AI tools were used as a support tool during the development of my portfolio and related academic projects. AI was used for brainstorming, explanations, drafting, coding assistance, research organization, document preparation, and revision. The final decisions, checking of requirements, correction of errors, and acceptance of outputs remained my responsibility.",
        ],
        [
          "September 14, 2026",
          "Data analysis project and hard-copy preparation: I used AI to organize the data-analysis document, explain tables and findings, and help prepare a PDF structure. I checked the Excel values, datasets, graphs, tables, findings, and recommendations against the original file, and requested corrections when spacing or values did not match.",
        ],
        [
          "September 15, 2026",
          "Development methodology and project documentation: I used AI to turn the project requirements and example methodology into clear copy-paste documentation. I compared the wording and sequence with the project's actual development process and adjusted it to fit the project.",
        ],
        [
          "September 17, 2026",
          "Complete data-analysis PDF: I used AI to structure the complete report and explain how formulas such as COUNTIF are used. I verified that the report represented the Excel file accurately and requested larger text and corrected tables where necessary.",
        ],
        [
          "September 19, 2026",
          "Capstone development management: I used AI to create a simple, formal development-management section based on the provided example. I checked that the content matched the capstone and remained easy to copy and present.",
        ],
        [
          "September 21, 2026",
          "Morality reviewer and academic PDF materials: I used AI to organize lesson content into a reviewer and prepare a readable PDF format. I reviewed the generated content, formatting, page spacing, and whether important lesson topics were retained.",
        ],
        [
          "September 23, 2026",
          "Eos game and capstone character and project content: I used AI for character descriptions, roles, strengths, weaknesses, motivations, dialogue, and development documentation. I checked character roles and project details and revised outputs that did not match the desired game style or project concept.",
        ],
        [
          "September 28, 2026",
          "Character design and game-development materials: I used AI to expand character concepts and organize descriptions for the Eos project. I personally selected the desired character style and corrected outputs that did not fit the intended game-character presentation.",
        ],
        [
          "October 7, 2026",
          "Next.js website development and project file management: I used AI for coding explanations, troubleshooting, project setup guidance, and advice about managing node_modules and project files. I ran the project, observed the actual results, checked the file structure, and decided what to keep or remove from the project backup.",
        ],
        [
          "October 8, 2026",
          "Cybersecurity specialization case study: I used AI to identify a suitable real-world cybersecurity case and organize it around the five required questions: vulnerability, cause, risks, prevention, and security practices. I reviewed the case structure, checked that it focused on defensive cybersecurity, and ensured the final PDF answered every required question.",
        ],
      ],
    },
    {
      title: "How AI Helped",
      content: [
        [
          "What did AI help me accomplish?",
          "AI helped me accomplish several parts of my portfolio more efficiently. It helped me organize ideas, turn rough requirements into formal documentation, explain technical concepts, troubleshoot code, prepare academic materials, and structure project information. It was especially useful when I needed to convert information into a clear format that could be reviewed, edited, or included in a final document. AI also helped me identify possible approaches when I was unsure how to begin a task.",
        ],
      ],
    },
    {
      title: "Verification and Limitations",
      content: [
        [
          "What did I personally verify?",
          "I personally verified the information that was important to my submissions. For data-analysis work, I compared numbers, tables, graphs, and findings with the original Excel file. For coding tasks, I checked the actual project behavior and file structure rather than assuming that generated instructions would work. For research and cybersecurity content, I checked whether the material answered the required questions and whether the recommendations were appropriate and defensive. I also reviewed formatting, wording, page spacing, and project-specific details before using the outputs.",
        ],
        [
          "Requirement Misunderstandings",
          "AI can misunderstand project-specific requirements when instructions are incomplete or when an example is interpreted incorrectly.",
        ],
        [
          "Formatting Errors",
          "AI-generated documents may contain formatting problems such as excessive spacing, incorrect page breaks, or tables that need adjustment.",
        ],
        [
          "Technical Limitations",
          "AI can produce technically plausible coding advice that still needs to be tested in the user's actual project environment.",
        ],
        [
          "Factual Limitations",
          "AI can make factual mistakes or provide information that should be checked against reliable sources, especially for real-world incidents and research.",
        ],
        [
          "Required Corrections",
          "AI may generate content that is too general, too detailed, or inconsistent with the user's intended style, requiring revision.",
        ],
        [
          "Context and Verification",
          "AI does not automatically know which project details are correct; the user must provide context and verify the final result.",
        ],
      ],
    },
    {
      title: "Lessons Learned",
      content: [
        [
          "What did I learn from using AI?",
          "I learned that AI is most useful as an assistant rather than a replacement for my own judgment. I learned how to ask clearer and more specific questions, how to provide requirements and examples, and how to revise AI-generated results until they fit the actual project. I also learned that understanding the reason behind an answer is important, especially for programming, cybersecurity, research, and data analysis. Using AI effectively requires knowing enough about the subject to evaluate its suggestions.",
        ],
        [
          "Responsible AI Use Statement",
          "I used AI as a productivity and learning tool while maintaining responsibility for my work. I did not treat AI-generated answers as automatically correct. I reviewed, tested, corrected, and adapted AI-assisted outputs according to my project requirements. The purpose of using AI was to improve my workflow and understanding while still applying my own judgment and verification.",
        ],
        [
          "Conclusion",
          "My experience with AI showed me that responsible AI literacy involves both effective use and critical evaluation. AI can save time and help with difficult tasks, but its outputs require human verification. Through my portfolio activities, I learned to use AI for assistance while remaining responsible for the accuracy, relevance, security, and quality of the final work.",
        ],
      ],
    },
  ],
},
  {
    id: "step21",
    title: "Conduct the Mock Interview",
    step: "STEP 21",
    description:
      "A formal mock interview demonstrating communication skills, technical problem-solving, work ethic, and career aspirations as a BSIT student. Review the 12 interview questions and answers below, or watch the recorded mock interview video.",
    items: [
      {
        title: "1. Tell me about yourself and why did you choose IT.",
        content: [
          ["Question", "Tell me about yourself and why did you choose IT."],
          [
            "My Answer",
            "My name is Chanalie Dajay, and I am an Information Technology student. A beginner, I am still learning about programming, computers, and other technologies. I chose IT because I am interested in technology and how it can solve problems and make our lives easier. I know I still have a lot to learn, but I am willing to improve my skills, gain experience, and accept new challenges.",
          ],
        ],
      },
      {
        title: "2. How do you handle deadlines?",
        content: [
          ["Question", "How do you handle deadlines?"],
          [
            "My Answer",
            "I handle deadlines by managing my time and prioritizing important tasks. I make sure to finish my work on time and avoid distractions. If I encounter difficulties, I stay calm and find solutions. I also ask for help when needed to make sure I can meet the deadline.",
          ],
        ],
      },
      {
        title: "3. What are your strongest and weakest IT skills?",
        content: [
          ["Question", " What are your strongest and weakest IT skills?"],
          [
            "My Answer",
            "My strongest IT skill is problem-solving. I try to understand problems and find solutions. I am also willing to learn new technologies and improve my skills and My weakest skill is programming because I am still a beginner and have a lot to learn. However, I am practicing and studying to improve my coding skills.  ",
          ],
        ],
      },
      {
        title: "4. What Technology are you currently learning?",
        content: [
          ["Question", "What Technology are you currently learning?"],
          [
            "My Answer",
            "I am currently learning programming, especially the basics of Python and how to create simple programs. I am also learning about databases and web development. As a beginner, I want to improve my technical skills and gain more knowledge about different technologies.",
          ],
        ],
      },
    ],
  },
{
  id: "step23",
  title: "IT Career Development Plan",
  step: "STEP 23",
  description:
    "A detailed career roadmap focused on data analytics, including current skills, learning priorities, certifications, professional milestones, and plans for future master's-level study.",
  items: [
    {
      title: "Career Direction",
      content: [
        [
          "Career Goal",
          "My long-term career direction is to specialize in data analytics after completing my BSIT degree. I plan to gain practical IT and data experience first, then pursue a master's degree in data science, analytics, or a closely related field. My goal is to develop both technical and academic expertise so I can work professionally as a data analyst and eventually take on more advanced analytical responsibilities.",
        ],
        [
          "Target Position",
          "Entry-Level Data Analyst / Junior Business Intelligence (BI) Analyst, with the long-term goal of progressing into advanced analytics roles.",
        ],
        [
          "Target IT Field",
          "Data Analytics, with particular interest in data cleaning and preparation, data visualization and dashboards, business intelligence, reporting, and data-driven decision support.",
        ],
      ],
    },
    {
      title: "Current Skills and Areas for Improvement",
      content: [
        [
          "Current Skills",
          "Basic web development, HTML/CSS/JavaScript, programming fundamentals, database concepts, SQL, data analysis, basic networking concepts, troubleshooting, documentation, and experience using AI as a productivity and learning tool.",
        ],
        [
          "Skills to Improve",
          "Advanced SQL, statistics and probability, data cleaning and wrangling, data visualization and storytelling, Excel (advanced), Python for data analysis, dashboard design, business and domain understanding, and communicating insights to non-technical audiences.",
        ],
      ],
    },
    {
      title: "Technologies and Certifications",
      content: [
        [
          "Technologies to Learn",
          "Microsoft Excel (advanced functions, PivotTables), SQL (PostgreSQL/MySQL), Python (pandas, NumPy, Matplotlib), Power BI, Tableau, Jupyter Notebook, Git/GitHub, Google Sheets, and cloud data fundamentals.",
        ],
        [
          "Certifications to Consider",
          "Google Data Analytics Professional Certificate or Microsoft Power BI Data Analyst (PL-300) as an initial credential; later consider certifications aligned with experience and career direction, such as Tableau certifications or other recognized analytics credentials.",
        ],
      ],
    },
    {
      title: "Career Milestones",
      content: [
        [
          "6-Month Goal",
          "Build a stronger data analytics foundation by studying advanced SQL, statistics, Excel, Python, and data visualization. Complete practical projects using real datasets, build a data analytics portfolio with dashboards and written case studies, and begin preparing for an entry-level analytics certification.",
        ],
        [
          "1-Year Goal",
          "Obtain or actively pursue an entry-level data analyst position or internship, strengthen hands-on analytics experience, complete relevant projects and dashboards, and prepare for or begin a recognized data analytics certification.",
        ],
        [
          "3-Year Professional Goal",
          "Become an established data analyst with practical work experience and begin or complete a master's degree in data science, analytics, or a related field. Develop deeper expertise in business intelligence, advanced analytics, data engineering, or another specialized area.",
        ],
      ],
    },
    {
      title: "Personal Development Strategy",
      content: [
        [
          "Development Plan",
          "I will follow a gradual path: strengthen my current BSIT foundation, gain hands-on data analytics experience, obtain relevant certifications, build professional experience, and then pursue master's-level study.",
        ],
        [
          "Learning Approach",
          "I will prioritize practical understanding instead of collecting certifications without experience.",
        ],
        [
          "Portfolio Development",
          "My portfolio will be used to document projects, dashboards, data-cleaning cases, analytical research, and other evidence of my developing skills.",
        ],
      ],
    },
    {
      title: "Career Vision",
      content: [
        [
          "Professional Vision",
          "My ultimate goal is to become a knowledgeable and capable data professional who can turn raw data into clear insights, identify trends and problems, support better decisions, and continuously improve organizational performance.",
        ],
        [
          "Future Education",
          "Pursuing a master's degree in data science or analytics will support my long-term goal of developing deeper technical knowledge, research ability, and professional expertise.",
        ],
      ],
    },
  ],
}, 
{
  id: "step24",
  title: "Final Reflection",
  step: "STEP 24",
  description:
    "A personal reflection on my BSIT journey, the projects I completed, the challenges I overcame, the skills I developed, and my future career goals.",
  items: [
    {
      title: "My Learning Journey",
      content: [
        [
          "Where I Started",
          "Before I joined the BSIT program, I thought of Information Technology mainly as computers, software, websites, and everyday technology use. I knew it involved programming and computer systems, but I had no idea how many different areas made up the field. I was curious about technology, yet I had never gone through the full cycle of planning, building, troubleshooting, documenting, and presenting an IT project from start to finish.",
        ],
        [
          "What I Learned",
          "The biggest lesson I took from BSIT is that IT goes far beyond programming. Along the way I studied databases, web development, networking, data analysis, system troubleshooting, cybersecurity, project development, documentation, and the responsible use of technology. I also found that fixing an IT problem takes patience and a methodical approach. Rather than guessing at an answer, I learned to define the problem, think through its possible causes, collect evidence, test fixes, and confirm that the result actually works. This way of thinking has been the most valuable skill the program gave me.",
        ],
      ],
    },
    {
      title: "Major Projects and Experiences",
      content: [
        [
          "Web Development",
          "The project that taught me the most was my web development work, because it forced me to use many skills together. Building and improving websites showed me how the frontend, backend logic, databases, project files, and development tools fit together. It also exposed me to the everyday realities of keeping a project running: handling dependencies, fixing errors, reviewing the project structure, and confirming that each change really did what I intended.",
        ],
        [
          "Project Development",
          "I came to see that producing a working application takes more than writing code. It needs planning, testing, organization, and steady improvement.",
        ],
      ],
    },
    {
      title: "Challenges and Solutions",
      content: [
        [
          "Technical Challenges",
          "Troubleshooting was the hardest technical challenge I faced in my development projects. Often the real cause of a problem was somewhere other than the code I was staring at, and finding it meant checking configurations, dependencies, files, or the environment itself.",
        ],
        [
          "Problem-Solving Approach",
          "This was sometimes frustrating, but it taught me to work through problems one step at a time instead of changing many things at once. I also learned to treat an error message as a helpful clue rather than something to brush aside.",
        ],
      ],
    },
    {
      title: "Skills and Personal Development",
      content: [
        [
          "Skills Developed",
          "My IT skills have grown a great deal since I began the program. I am more at ease with programming concepts, web development, databases, troubleshooting, technical documentation, and organizing projects. I can break down technical problems more logically and explain my solutions more clearly. Working on a variety of projects has also given me the confidence to pick up unfamiliar technologies.",
        ],
        [
          "Responsible Use of AI",
          "I have learned to use AI tools responsibly, relying on them for brainstorming, explanations, coding help, and documentation while always checking the results myself.",
        ],
        [
          "Areas for Improvement",
          "Still, there is a lot I want to improve. I plan to build up my SQL, statistics, data cleaning, data visualization, and Python skills for data analysis, as well as my ability to handle larger and more complex datasets and systems. I understand that graduating from BSIT does not mean my learning is over. Technology keeps changing, so I will need to keep studying and practicing throughout my career.",
        ],
      ],
    },
    {
      title: "Future Career Goals",
      content: [
        [
          "Career Direction",
          "The kind of IT professional I hope to become is a data analyst. I am especially drawn to turning raw data into clear insights, building reports and dashboards, spotting trends and problems, and helping organizations make better decisions.",
        ],
        [
          "Professional Development",
          "I am prepared to begin in an entry-level role, gain real-world experience, learn from seasoned professionals, and keep building my data analytics skills.",
        ],
        [
          "Long-Term Education",
          "In the long run, I plan to earn a master's degree in data science or analytics to deepen my technical and academic knowledge. I want my career to blend hands-on experience with continuous learning and specialization.",
        ],
      ],
    },
    {
      title: "My Final Reflection",
      content: [
        [
          "Personal Reflection",
          "I feel ready to start my IT career because BSIT gave me more than technical knowledge. It taught me how to learn, troubleshoot, adapt, document my work, and take responsibility for the quality of what I produce. I still have plenty to learn, but I know that a career in IT is a continuous process of growth.",
        ],
        [
          "Conclusion",
          "My BSIT journey has given me a solid foundation, and I am ready to build on it as my professional career begins.",
        ],
      ],
    },
  ],
},
{
  id: "step25",
  title: "Skills Inventory",
  step: "SKILL LEVELS",
  description:
    "An overview of my current technical skills and self-assessed proficiency levels as a BSIT student.",
  items: [
    {
      title: "View My Technical Skills",
      content: [
        [
          "Overview",
          "This skills inventory presents my current knowledge of programming, web development, databases, cybersecurity, networking, data analysis, development tools, cloud deployment, and AI tools. The proficiency levels represent my current self-assessment and the areas I am continuing to develop."
        ]
      ]
    }
  ]
},

];

const Project = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState({});
    const [videoModalOpen, setVideoModalOpen] = useState(false);
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setVideoModalOpen(false);
        }
      };
      if (videoModalOpen) {
        window.addEventListener("keydown", handleKeyDown);
      }
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [videoModalOpen]);

  const toggleSection = (id) => {
    setActiveSection((current) => (current === id ? null : id));
    setActiveItem({});
  };

  const toggleItem = (sectionId, itemIndex) => {
    setActiveItem((current) => ({
      ...current,
      [sectionId]: current[sectionId] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <div className="project-page relative min-h-screen bg-primary/30 py-28 md:py-32">
      <Circles />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            My BSIT Journey
          </p>

          <h1 className="h1 mb-5">
            Project <span className="text-accent">Portfolio.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-white/70">
            Explore my troubleshooting cases, cybersecurity study, project
            documentation, AI literacy, career plan, and final reflection.
            Open a section and select a topic to explore its contents.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto flex max-w-4xl flex-col gap-4"
        >
          {projectSections.map((section, sectionIndex) => {
            const isOpen = activeSection === section.id;

            return (
               <motion.section
                key={section.id}
                layout
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-accent/60 bg-primary/80"
                    : "border-white/10 bg-primary/40 hover:border-white/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xs font-bold tracking-wider text-accent">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {section.step}
                    </span>

                    <span className="block text-base font-semibold text-white sm:text-lg">
                      {section.title}
                    </span>

                    <span className="mt-1 block text-sm text-white/50">
                      {section.items.length} topics
                    </span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 text-accent"
                  >
                    <BsChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="section-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.22 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <p className="mb-5 text-sm leading-7 text-white/60">
                          {section.description}
                        </p>

                        <div className="flex flex-col gap-3">
                          {section.items.map((item, itemIndex) => {
                            const itemIsOpen =
                              activeItem[section.id] === itemIndex;

                            return (
                              <div
                                key={item.title}
                                className="overflow-hidden rounded-xl border border-white/10 bg-black/10"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleItem(section.id, itemIndex)
                                  }
                                  aria-expanded={itemIsOpen}
                                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                                >
                                  <span className="min-w-0 flex-1 text-sm font-medium text-white/90 sm:text-base">
                                    {item.title}
                                  </span>

                                  <motion.span
                                    animate={{
                                      rotate: itemIsOpen ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0 text-accent"
                                  >
                                    <BsChevronDown size={16} />
                                  </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                  {itemIsOpen && (
                                    <motion.div
                                      key="item-content"
                                      initial={{
                                        height: 0,
                                        opacity: 0,
                                        y: -6,
                                      }}
                                      animate={{
                                        height: "auto",
                                        opacity: 1,
                                        y: 0,
                                      }}
                                      exit={{
                                        height: 0,
                                        opacity: 0,
                                        y: -6,
                                      }}
                                      transition={{
                                        height: {
                                          duration: 0.28,
                                          ease: "easeInOut",
                                        },
                                        opacity: { duration: 0.2 },
                                        y: { duration: 0.2 },
                                      }}
                                      className="overflow-hidden"
                                    >
                                      <div className="flex flex-col gap-4 border-t border-white/10 px-4 py-4">
                                        {item.content.map(([label, text]) => (
                                          <div
                                            key={label}
                                            className="flex flex-col gap-1 sm:flex-row sm:gap-5"
                                          >
                                            <h4 className="w-full shrink-0 text-xs font-semibold uppercase tracking-wider text-accent sm:w-36">
                                              {label}
                                            </h4>

                                            <p className="min-w-0 flex-1 text-sm leading-6 text-white/65">
                                              {text}
                                            </p>
                                          </div>
                                        ))}

                                        {item.links &&
                                          item.links.length > 0 && (
                                            <div className="mt-2 flex flex-wrap gap-3">
                                              {item.links.map((link) => (
                                                <a
                                                  key={link.label}
                                                  href={link.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  download={
                                                    link.download
                                                      ? true
                                                      : undefined
                                                  }
                                                  className="inline-flex items-center justify-center rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                                                >
                                                  {link.label}
                                                </a>
                                              ))}
                                            </div>
                                          )}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>

                        {/* Download PDF button for Project 3 */}
                        {section.id === "cybersecurity" && (
                          <div className="mt-6 flex justify-center">
                            <a
                              href="/Project_3_Cybersecurity_Equifax_Case_Study.pdf"
                              download
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              Download Full Case Study PDF
                            </a>
                          </div>
                        )}
                        
{section.id === "step17" && (
  <div className="mt-6 flex justify-center">
    <a
      href="/Step_17_Problem_Solving_Portfolio_Abdulrahman_Alsaafin.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
    >
      View Full Problem-Solving PDF
    </a>
  </div>
)}
{section.id === "step19" && (
  <div className="mt-6 flex justify-center">
    <a
      href="/Step_19_AI_Literacy_Evidence_Chanalie_Dajay.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
    >
      View Full AI Literacy PDF
    </a>
  </div>
)}

{section.id === "step21" && (
                          <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <button
                              type="button"
                              onClick={() => setVideoModalOpen(true)}
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                            >
                              <BsPlayCircleFill size={18} />
                              Watch Interview
                            </button>
                          </div>
                        )}

{section.id === "step23" && (
  <div className="mt-6 flex justify-center">
    <a
      href="/Step_23_IT_Career_Development_Plan_Chanalie_Dajay_Data_Analyst.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
    >
      View Full Career Plan PDF
    </a>
  </div>
)}

{section.id === "step24" && (
  <div className="mt-6 flex justify-center">
    <a
      href="/Step_24_Final_Reflection_Chanalie_Dajayw.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
    >
      View Full Final Reflection PDF
    </a>
  </div>
)}

{section.id === "step25" && (
  <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-primary/60">
    <div className="border-b border-white/10 px-4 py-4">
      <h3 className="text-lg font-bold text-white">
        Technical Skills <span className="text-accent">Inventory</span>
      </h3>
      <p className="mt-1 text-sm leading-6 text-white/50">
        My current skills and proficiency levels.
      </p>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent">
              Area
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent">
              Skill
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-accent">
              Proficiency
            </th>
          </tr>
        </thead>

        <tbody>
          {[
            { area: "Programming", skill: "Programming Fundamentals", level: "Beginner", progress: 15 },
            { area: "Web Development", skill: "HTML / CSS", level: "Beginner", progress: 20 },
            { area: "Web Development", skill: "JavaScript", level: "Beginner", progress: 20 },
            { area: "Database", skill: "SQL / MySQL", level: "Beginner", progress: 15 },
            { area: "Tools", skill: "Git / GitHub", level: "Beginner", progress: 25 },
            { area: "Cybersecurity", skill: "Security Fundamentals", level: "Intermediate", progress: 65 },
            { area: "Networking", skill: "Networking Fundamentals", level: "Beginner", progress: 35 },
            { area: "Data Analysis", skill: "Excel / Data Analysis", level: "Intermediate", progress: 60 },
            { area: "Cloud", skill: "Deployment / Hosting", level: "Beginner", progress: 35 },
            { area: "AI", skill: "AI Tools / Responsible AI Use", level: "Intermediate", progress: 60 },
          ].map((item) => (
            <tr
              key={item.skill}
              className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]"
            >
              <td className="px-4 py-4 text-sm text-white/60">
                {item.area}
              </td>

              <td className="px-4 py-4 text-sm font-medium text-white">
                {item.skill}
              </td>

              <td className="px-4 py-4">
                <div className="min-w-[150px]">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span
                      className={`text-xs font-semibold ${
                        item.level === "Intermediate"
                          ? "text-accent"
                          : "text-white/60"
                      }`}
                    >
                      {item.level}
                    </span>

                    <span className="text-xs text-white/40">
                      {item.progress}%
                    </span>
                  </div>

                  <div
                    className="h-2.5 w-full overflow-hidden rounded-full bg-white/10"
                    role="progressbar"
                    aria-label={`${item.skill} proficiency`}
                    aria-valuenow={item.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="border-t border-white/10 px-4 py-3">
      <p className="text-xs leading-5 text-white/40">
        Progress bars are visual representations of self-assessed proficiency,
        not formal test scores or certifications.
      </p>
    </div>
  </div>
)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/40">
            Learning, troubleshooting, and growing as an IT professional.
          </p>
        </motion.div>
      </div>
      {/* Video Modal for Mock Interview */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-accent/40 bg-[#0e1017] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                    <BsPlayCircleFill size={22} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      STEP 21 — Mock Interview
                    </span>
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      Mock Interview Video Recording
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/mock.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-all duration-200 hover:border-accent hover:text-white"
                    title="Open video in a new tab"
                  >
                    <BsBoxArrowUpRight size={13} />
                    <span className="hidden sm:inline">New Tab</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/70 transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white"
                    aria-label="Close video modal"
                  >
                    <BsX size={24} />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative flex flex-1 items-center justify-center bg-black p-2 sm:p-4">
                <video
                  src="/mock.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[62vh] w-full rounded-lg object-contain shadow-lg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Footer info */}
              <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 bg-primary/40 px-5 py-3 text-xs text-white/60 sm:flex-row sm:px-6">
                <span>BSIT Mock Interview — 12 Technical & Behavioral Questions</span>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="font-semibold text-accent hover:underline"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;