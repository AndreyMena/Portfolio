import {
    mobile,
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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    gbsys,
    ride,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    GhoticvaniaL1,
    GhoticvaniaL2,
    GhoticvaniaL3,
    GhoticvaniaMenu,
    InvestigaUCR1,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Application Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer intern",
      company_name: "GBSYS",
      icon: gbsys,
      iconBg: "#383E56",
      date: "Aug 2023 - Dec 2021 (5 months)",
      points: [
        "Developing and maintaining web applications using Java (with Maven and Spring) and other related technologies.",
        "Collaborate with cross-functional teams, including QA, IT, product owners, direct customers, and other developers, to create high-quality products.",
        "Participation in meetings with direct clients for the design of functional and non-functional requirements and their subsequent conversion to user stories",
        "Work under scrum framework",
        "Use of technologies such as: Java Maven, Spring Boot, Oracle SQL, AWS S3, XHTML, CSS, JavaScript, JQuery, Hibernate, Java Prime Faces, Bootstrap, TomCat, Linux (debian)",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "RIDE mensajería écologica",
      icon: ride,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Jul 2023 (5 months)",
      points: [
        "Development of mobile applications (android) mainly using React, NodeJS and other related technologies.",
        "Publication of APKs in the play store for test environments, (apk generation with Android Studio)",
        "Collaboration and work under agile methodologies, scrum framework with multiple scrum teams working on the project",
        "Use of technologies such as: React, NodeJS, JavaScript, HTML, CSS, Bootstrap, sass, Google Firebase, Google Maps API, AXIOS, JSON, JQuery",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Testimonials bsbjadbaskdasdasd sasad asd ads.",
      name: "Luis Emilio Ramírez",
      designation: "Administrator",
      company: "GBSYS",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Testimonials bsbjadbaskdasdasd sasad asd ads.",
      name: "Luis Emilio Ramírez",
      designation: "Administrator",
      company: "GBSYS",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Testimonials bsbjadbaskdasdasd sasad asd ads.",
      name: "Luis Emilio Ramírez",
      designation: "Administrator",
      company: "GBSYS",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "InvestigaUCR",
      description:
        "The Centro de Investigaciones en Tecnologías de la Información y Comunicación (CITIC) from the Universidad de Costa Rica (UCR) has the objective of promoting the research in ICT related areas. This project consists of a website that meets the needs of researchers through a page where they can manage research groups, publications, news, statistics, people and more.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET Core",
          color: "green-text-gradient",
        },
        {
          name: "SQL (MSSQL)",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Mudblazor",
          color: "green-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
      ],
      image: InvestigaUCR1,
      source_code_link: "https://github.com/AndreyMena/InvestigaUCR",
    },
    {
      name: "Video Game Engine",
      description:
        "This project is a video game engine built in C++ that allows you to create 2D video games. Through scripting with Lua we can modify the characteristics of the video game, adding enemies in the coordinates we want, with different sizes, powers, sprites, and characteristics according to a series of generic components contained in the engine. In addition, we can also modify the conditions of the map and the powers of our main character.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Lua",
          color: "green-text-gradient",
        },
        {
          name: "SDL",
          color: "pink-text-gradient",
        },
      ],
      image: GhoticvaniaL1,
      source_code_link: "https://github.com/AndreyMena/GameDevelopment/tree/main/Tareas/Tarea03_game_engine",
    },
    {
      name: "CITIC",
      description:
        "Description of citic project",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: GhoticvaniaL3,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };