import {
  edumart,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  next,
  bootstrap,
  git,
  password,
  carshowcase,
  github,
  sidehustle,
  caesar,
  firewall,
  amazonclone,
  dictionary,
  snapgram,
  threejs,
  nira,
  shecodes,
  weather,
  port,
  refine,
  iphonepro,
  duolingo,
  fate,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Product Manager",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
  {
    title: "Team Lead",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "next",
    icon: next,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Fate Foundation",
    icon: fate,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Oct 2024",
    points: [
      "Contributed to the development of SOAR, a CRM-style platform designed to enhance student recruitment, progress tracking, grant management, volunteer database upkeep, and task assignment.",
      "Managed collaboration and version control with Git and GitHub.",
      "Conducted live demonstrations for clients to showcase project features.",
    ],
  },
  {
    title: "IT Support Personnel",
    company_name: "NIRA",
    icon: nira,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Improved customer relationship by ensuring quick response to emails.",
      "Provided technical support to staff of the organization when needed.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SheCodes Foundation",
    icon: shecodes,
    iconBg: "#383E56",
    date: "July 2021 - Oct 2022",
    points: [
      "Built a weather application showing your current location’s weather, humidity, wind and forecast for the next six days.",
      "Developed team communications.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SideHustle",
    icon: sidehustle,
    iconBg: "#E6DEDD",
    date: "May 2020 - May 2021",
    points: [
      "Participated in a team project (A Food Application) and worked together with various designers and product managers.",
      "Led the Frontend Development Team from the start to completion of the project phase.",
    ],
  },
];

const projects = [
  {
    name: "Caesar Cipher",
    description:
      "A graphical application for encrypting and decrypting text using the Caesar Cipher technique, featuring a user-friendly interface built with Tkinter.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "encryption",
        color: "pink-text-gradient",
      },
    ],
    image: caesar,
    source_code_link: "https://github.com/Chichay317/Caesar_Cipher_GUI",
  },
  {
    name: "Weather Application",
    description:
      "Web application that empowers users to effortlessly check current weather conditions, including humidity, wind speed, and a six-day forecast, for any desired location.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Chichay317/Weather-app",
  },
  {
    name: "Firewall Server",
    description:
      "A simple firewall server built with Python that filters incoming connections based on IP and port rules, and implements rate limiting to prevent abuse.",
    tags: [
      {
        name: "firewall",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "socketprogramming",
        color: "pink-text-gradient",
      },
    ],
    image: firewall,
    source_code_link: "https://github.com/Chichay317/Firewall_Tool",
  },
  {
    name: "Password Manager",
    description:
      "A password manager built with Python's Tkinter library, allowing users to generate strong passwords, save them securely in a file, and retrieve stored passwords.",
    tags: [
      {
        name: "cybersecurity",
        color: "blue-text-gradient",
      },
      {
        name: "safepassword",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: password,
    source_code_link: "https://github.com/Chichay317/Password-Manager",
  },
  {
    name: "Port Scanner",
    description:
      "A Python multithreaded port scanner that scans a target host for open ports and retrieves service banners to identify the services running for security assessment.",
    tags: [
      {
        name: "queue",
        color: "blue-text-gradient",
      },
      {
        name: "threading",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/Chichay317/Port_Scanner",
  },
  {
    name: "Amazon Clone",
    description:
      "Web application offering users the ability to purchase products. Features include user accounts, shopping cart functionality, and simulated checkout processes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: amazonclone,
    source_code_link: "https://github.com/Chichay317/amazon_clone",
  },
  {
    name: "Dictionary App",
    description:
      "Web application providing users with a comprehensive tool for quick and easy word definitions. Users can access detailed definitions, as well as explore related synonyms and examples.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dictionary,
    source_code_link: "https://github.com/Chichay317/Dictionary-Application",
  },
  {
    name: "SnapGram",
    description:
      "Social media-inspired web application powered by Appwrite backend, facilitating post creation, updates, likes, and bookmarks. Users can authenticate securely and explore a dynamic feed of posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "reactquery",
        color: "pink-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/Chichay317/snapgram",
  },
  {
    name: "EduMart",
    description:
      "Ecommerce platform facilitating the sale of used materials with Clerk.js authentication and Firebase database integration. Users can list products, search, and filter by price across categorized pages.",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "clerkjs",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: edumart,
    source_code_link: "https://github.com/Chichay317/edumart",
  },
  {
    name: "React Dashboard",
    description:
      "A dashboard which includes a dynamic Kanban board for intuitive task management, complemented by real-time data charts that offer live insights for decision-making, with GraphQL's data querying.",
    tags: [
      {
        name: "antDesign",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "refine",
        color: "pink-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/Chichay317/refine-dashboard",
  },
  {
    name: "iPhone 15 Pro",
    description:
      "A clone of the iPhone fifteen pro website built with React, Vite, Three.js, GSAP and Tailwind. It contains different models and exciting animations as seen in the real website.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: iphonepro,
    source_code_link: "https://github.com/Chichay317/iPhone-fifteen-clone",
  },
  {
    name: "Duolingo Clone",
    description:
      "A personal project that replicates Duolingo with minimal features, focusing on interactive lessons and basic progress tracking. It is a simple and engaging platform for language learning.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: duolingo,
    source_code_link: "https://github.com/Chichay317/Duolingo-Clone",
  },
];

export { services, technologies, experiences, projects };
