import {
  niit,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  next,
  sidehustle,
  faceRecognition,
  chatbot,
  dictionary,
  threejs,
  nira,
  weather,
  refine,
  matplotlib,
  duolingo,
  fate,
  python,
  pandas,
  java,
  scikit,
  numPy,
  tensorflow,
  django,
  objectDetect,
  retailEtl,
  fakeNews,
  timeSeries,
  kafka,
  nyc,
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
    title: "Creative",
    icon: web,
  },
  {
    title: "Analytical",
    icon: creator,
  },
  {
    title: "Collaborative",
    icon: creator,
  },
  {
    title: "Driven",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Pandas",
    icon: pandas,   
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
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Scikit-Learn",
    icon: scikit,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "NumPy",
    icon: numPy,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Next.js",
    icon: next,
  },
];

const experiences = [
  {
    title: "Programming Instructor",
    company_name: "NIIT",
    icon: niit,
    iconBg: "#383E56",
    date: "Feb 2025 - Current",
    points: [
      "I mentor over 80 students in Python and Java, helping them build confidence through structured lessons and live coding sessions that have improved their proficiency and course completion outcomes.",
      "Through hackathons and peer-learning sessions, I build environments that encourage teamwork, creative problem-solving and continuous learning.",
      "I supervise undergraduate trainees through their industrial training and guide them as they work on real projects in a professional setting.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Fate Foundation",
    icon: fate,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Oct 2024",
    points: [
      "I worked with a team to build SOAR, a customer relationship management platform that supports students, administrators, volunteers and vendors. The system makes it possible to track activities, progress and grant distribution in real time.",
      "I built dashboards that helped the management see how programs were performing and made reports easier to understand. I also worked on making the platform faster and more stable during busy grant periods.",
      "Over time, I added event and job-application features so entrepreneurs and volunteers could register for programs, join online sessions and find opportunities through the Foundation’s network.",
    ],
  },
  {
    title: "IT Support Personnel",
    company_name: "NIRA",
    icon: nira,
    iconBg: "#383E56",
    date: "Feb 2023 - July 2023",
    points: [
      "I was part of the technical team that maintained the .ng domain registry, supporting thousands of domains across Nigeria’s digital network.",
      "I handled system backups, restored test environments, and applied security checks to reduce the risk of data loss and downtime.",
      "During my time there, I also contributed to outreach efforts that helped more people understand how the .ng domain works and why it matters for Nigeria’s online identity.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SideHustle",
    icon: sidehustle,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - May 2022",
    points: [
      "I led the frontend team for Dietri, a web application that recommends balanced meal options and helps users learn about nutritional value.",
      "I grew stronger at working within a team environment by contributing to code reviews, refining features together, and staying aligned during each sprint.",
    ],
  },
];

const projects = [
  {
    name: "Face Recognition System",
    description:
      "Face recognition system that verifies whether two uploaded images belong to the same individual by detecting facial regions and comparing face embeddings.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: faceRecognition,
    source_code_link: "https://github.com/Chichay317/Face-Recognition-System",
  },
  {
    name: "Study Chatbot",
    description:
      "A Chatbot offering basic programming Q&A with dynamic explanations powered by Google Generative AI, featuring user authentication and chat history.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Chichay317/Study_Chatbot",
  },
  {
    name: "Object Detection System",
    description:
      "A real-time object detection system that identifies and labels multiple objects in images and video using a pre-trained deep learning model.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "deep-learning",
        color: "pink-text-gradient",
      },
    ],
    image: objectDetect,
    source_code_link: "https://github.com/Chichay317/Object-Detection-System",
  },
  {
    name: "Retail Sales Data Pipeline",
    description:
      "End-to-end data pipeline that processes retail sales data into a dimensional warehouse and delivers analytical insights through an interactive dashboard.",
    tags: [
      {
        name: "data-engineering",
        color: "blue-text-gradient",
      },
      {
        name: "ETL",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: retailEtl,
    source_code_link: "https://github.com/Chichay317/retail-sales-data-engineering-pipeline",
  },
  {
    name: "Fake News Detection",
    description:
      "A machine learning system that identifies news articles as fake or real using NLP preprocessing, TF-IDF features, and multiple classifiers.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "text-classification",
        color: "pink-text-gradient",
      },
    ],
    image: fakeNews,
    source_code_link: "https://github.com/Chichay317/Fake-News-Detection-System",
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
    name: "Time Series Forecasting",
    description:
      "A time series forecasting project that predicts gold prices from historical monthly data using exploratory analysis and multiple forecasting models for performance evaluation.",
    tags: [
      {
        name: "forecasting",
        color: "blue-text-gradient",
      },
      {
        name: "data-analysis",
        color: "green-text-gradient",
      },
      {
        name: "time-series",
        color: "pink-text-gradient",
      },
    ],
    image: timeSeries,
    source_code_link: "https://github.com/Chichay317/Time-Series-Forecasting",
  },
  {
    name: "Kafka Streaming Pipeline",
    description:
      "This project processes sensor events in real time using Kafka, stores aggregated metrics in PostgreSQL, and presents live insights through an interactive analytics dashboard interface.",
    tags: [
      {
        name: "data-engineering",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "streaming",
        color: "pink-text-gradient",
      },
    ],
    image: kafka,
    source_code_link: "https://github.com/Chichay317/kafka-streaming-pipeline",
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
    name: "NYC Taxi Data Lake",
    description:
      "A batch data lake pipeline that processes large-scale NYC taxi trip data with PySpark and generates aggregated metrics and visual summaries over hourly and daily periods.",
    tags: [
      {
        name: "big-data",
        color: "blue-text-gradient",
      },
      {
        name: "pyspark",
        color: "green-text-gradient",
      },
      {
        name: "data-engineering",
        color: "pink-text-gradient",
      },
    ],
    image: nyc,
    source_code_link: "https://github.com/Chichay317/nyc-taxi-data-lake",
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
