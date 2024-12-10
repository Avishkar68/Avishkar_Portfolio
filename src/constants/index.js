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
    gpm,
    dmce,
    scrollhack,
    escout,
    todesktopclone,
    twogoodco,
    threejs,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "UI/UX Design",
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
    
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Hackathon 2.0, Datta Meghe College of Engineering",
      icon: dmce, 
      iconBg: "#383E56",
      date: "March 20-21, 2024",
      points: [
        "Developed 'Meeting Mastery,' an AI-powered web application designed to enhance meeting integrity, productivity, and inclusivity, as part of the MERN Marvels team.",
        "Collaborated with team members Aryan Patil, Ayush Sonawane, and Tejas Babar to create a seamless and intuitive user experience using the MERN stack.",
        "Participated in a highly engaging and educational environment, gaining invaluable experience in networking, skill development, and collaborative problem-solving.",
      ],
    },
    
    {
      title: "Full-Stack Developer",
      company_name: "Scroll Hacks 2024",
      icon: scrollhack, 
      iconBg: "#383E56",
      date: "September 27-29, 2024",
      points: [
        "Participated in Scroll Hacks 2024, showcasing innovative solutions and collaborating with peers to create impactful projects.",
        "Contributed to the development of a full-stack web application using the MERN stack, focusing on functionality and user experience.",
        "Demonstrated creativity, dedication, and problem-solving skills, earning a Certificate of Appreciation for outstanding participation.",
      ],
    },
    
    {
      title: "Full-Stack Developer",
      company_name: "eScout - College Major Project",
      icon: gpm,
      iconBg: "#383E56",
      date: "August 2024 - October 2024",
      points: [
        "Led the development of eScout, a search engine platform designed to aggregate and extract relevant information from multiple websites.",
        "Implemented dynamic URL selection and query-based web crawling using Cheerio and Node.js for data extraction.",
        "Built the frontend using React.js with Axios for API integration, ensuring a responsive and user-friendly interface.",
        "Developed a MongoDB-based system to store user-specific search histories, offering a personalized experience.",
        "Collaborated with a team to refine the project based on feedback, enhancing features like history storage and dynamic crawling.",
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
      name: "eScout",
      description:
        "A search engine platform designed to aggregate and extract relevant information from multiple websites, providing users with efficient, summarized, and accurate results based on their queries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: escout, // Replace 'escout' with your actual image variable or path
      source_code_link: "https://github.com/Avishkar68/eScout", // Replace with your actual GitHub repository link
    },
    
    {
  name: "ToDesktop ",
  description:
    "A web-based clone of the ToDesktop platform that replicates its design and functionality, allowing users to experience converting web applications into desktop apps with a seamless interface.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
    {
      name: "node.js",
      color: "orange-text-gradient",
    },
  ],
  image: todesktopclone, // Add your image path here
  source_code_link: "https://github.com/Avishkar68/ToDesktop-Frontend-Clone", // Replace with your actual GitHub repository link
},

{
  name: "TwoGoodCo",
  description:
    "A visually appealing web-based clone of the Twogoodco website, featuring smooth animations and interactive scrolling effects using GSAP and Locomotive Scroll for an enhanced user experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "gsap",
      color: "green-text-gradient",
    },
    {
      name: "locomotive",
      color: "orange-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
  ],
  image: twogoodco, // Add your image path here
  source_code_link: "https://github.com/Avishkar68/twogoodco_clone", // Replace with your actual GitHub repository link
},

  ];
  
  export { services, technologies, experiences, testimonials, projects };