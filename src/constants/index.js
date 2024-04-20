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
  figma,
  carshowcase,
  github,
  sidehustle,
  i4g,
  techathon,
  amazonclone,
  dictionary,
  snapgram,
  threejs,
  nira,
  shecodes,
  weather,
  peachblossoms,
  refine,
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
    name: "figma",
    icon: figma,
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
    company_name: "PeachBlossoms",
    icon: peachblossoms,
    iconBg: "#383E56",
    date: "Sep 2023 - Current",
    points: [
      "Developing and maintaining responsive web applications using React.js, Next.js, TypeScript and Tailwind CSS.",
      "Managing collaboration and version control with Git and GitHub.",
      "Demonstrating problem solving skills in resolving technical issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Support Intern",
    company_name: "NIRA",
    icon: nira,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - May 2023",
    points: [
      "Improved customer relationship by ensuring quick response to emails.",
      "Demonstrated respect, friendliness and willingness to help wherever needed.",
      "Provided technical support to staff of the organization when needed.",
      "Collaborated with other members of the technical team to build projects and solve problems.",
      "Received Professional Training on the Domain Name System (DNS), IP Addressing, Use of Docker, Linux, Git and GitHub.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "SheCodes Foundation",
    icon: shecodes,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Carried out day-to-day duties accurately and efficiently.",
      "Built a weather application using HTML, CSS and JavaScript.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "Techathon",
    icon: techathon,
    iconBg: "#E6DEDD",
    date: "June 2022 - Aug 2022",
    points: [
      "Used critical thinking to break down problems, evaluate solutions and make decisions.",
      "Interacted with fellow community members effectively.",
      "Built several websites using HTML, CSS, Bootstrap and Vanilla JavaScript.",
      "Participated in a team project which consisted of Frontend Developers, UI/UX Designers and Graphic Designers.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "I4G x Zuri Training",
    icon: i4g,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Learnt new skills and applied to daily tasks to improve efficiency and productivity.",
      "Developed team communications.",
      "Recreated the Zuri Website (all pages) with HTML, CSS and JavaScript.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "SideHustle",
    icon: sidehustle,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Created plans and communicated deadlines to complete projects on time.",
      "Participated in a bootcamp training.",
      "Participated in a team project (A Food Application) and worked together with various designers and product managers.",
      "Led the Frontend Development Team from the start to completion of the project phase.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    name: "Car Showcase",
    description:
      "Web-based platform that allows users to search and manage car rentals from various providers, providing an efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carshowcase,
    source_code_link: "https://github.com/Chichay317/car_showcase",
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
      "Our dashboard boasts a dynamic Kanban board for intuitive task management, complemented by real-time data charts that offer live insights for decision-making, with GraphQL's data querying.",
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
];

export { services, technologies, experiences, testimonials, projects };
