import { label } from "framer-motion/client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A software developer passionate about creating seamless user experiences using React and Tailwind
CSS. I have experience leading technical events and working on diverse technical projects. I enjoy
problem-solving and have participated in cybersecurity challenges like Capture The Flag and I am a
Cyber Security and Augmented and Virtual Reality enthusiast. Motivated by a drive for innovation, I am
eager to explore new opportunities that combine technology with impactful solutions.`;

export const ABOUT_TEXT = `A passionate Web Developer and Cybersecurity Enthusiast. With a strong foundation in web technologies like ReactJS, Tailwind CSS, and Node.js, I enjoy building seamless and interactive web applications.

Alongside development, I’m actively expanding my knowledge in cybersecurity, particularly through CTF competitions, where I explore challenges in areas such as cryptography, forensics, and reverse engineering.

As the former President of the Compete to Compute Club (C2C), I had the opportunity to lead and collaborate with peers on multiple technical events, honing my leadership and teamwork skills.

I’m always eager to learn and embrace new challenges, whether it's securing applications or crafting smooth user experiences. Outside of tech, I’m constantly exploring the latest in cybersecurity trends and technologies.

As a curious soul, I’ve always been fascinated by the vastness of space and the mysteries it holds. From a young age, I’ve found myself gazing at the night sky, marveling at the stars and wondering about the endless possibilities beyond our planet. My passion for space goes beyond just admiration – I believe it connects us to a greater understanding of the universe and our place within it.
`;


export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "President",
    company: "Compete to Compute Club",
    description: `As the President of Compete to Compute Club (C2C), I orchestrated a diverse range of seven events, including seminars, webinars, and technical workshops. Leading these initiatives allowed me to develop and demonstrate my ability to collaborate effectively with team members, manage complex projects, and drive successful outcomes. My experience in organizing and executing these events has strengthened my skills in coordination, communication, and teamwork, reflecting my commitment to fostering a collaborative and innovative environment.`,
    technologies: ["Leadership", "Problem-Solving", "Strategic Thinking", "Conflict Resolution"],
  },
  {
    year: "2023 - 2024",
    role: "PALS Representative",
    company: "PALS",
    description: `As the sole representative of my department in external PALS meetings, I was responsible for advocating our interests and addressing concerns. This role required strong independent communication and negotiation skills. I effectively represented my department's viewpoints, showcasing my ability to work autonomously and influence discussions. This experience highlighted my capacity to handle responsibility and interact professionally with other departments.`,
    technologies: ["Communication","Time Management","Responsibility","Public Speaking"],
  },
  {
    year: "March - 2024",
    role: "Pecan+ Capture The Flag (CTF)",
    company: "Edith Cowan University, Western Australlia",
    description: `I participated in a Capture The Flag (CTF) competition organized by Edith Cowan University and Western Australian University, with Pals and CrossBow Labs as industry partners. The event featured a variety of cybersecurity challenges that tested my skills in areas such as network security, cryptography, and ethical hacking. This experience allowed me to engage deeply with practical cybersecurity problems and enhance my problem-solving abilities in a competitive environment.`,
    technologies: ["Cryptography","Stegnography","Web-Exploitaion","Forensics"],
  },
  {
    year: "2021 - 2022",
    role: "Class Representative",
    company: "First Year",
    description: `As Class Representative, I served as the primary liaison between students and faculty, effectively addressing concerns and facilitating communication. I managed various tasks including organizing meetings and gathering feedback. This role enhanced my leadership and organizational skills, demonstrating my ability to represent and advocate for my classmates while maintaining strong interpersonal relationships. My experience underscores my commitment to effective representation and problem-solving.`,
    technologies: ["Decision-Making", "Communication", "Team-Work","Delegation"],
  },
];

export const PROJECTS = [
  {
    title: "Terrain Recognition",
    image: project1,
    description:
      "Project Overview: Developed a terrain recognition system to categorise terrains as sandy, hard, green, or marshy, providing insights into the characteristics of each terrain type.",
    technologies: ["React","Tailwind CSS", "Framer Motion","Python"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "Project Overview: Developed a personal portfolio website to showcase my skills, projects, and professional achievements in a visually appealing manner.",
    technologies: ["React", "tailwind CSS", "Framer Motion"],
  },
  {
    title: "XT Things Portfolio *",
    image: project3,
    description:
      "Designing a visually captivating photography portfolio website for my client. The site features stunning image galleries, smooth animations, and parallax effects, ensuring a seamless user experience. The responsive design highlights the photographer's work beautifully across devices, while also optimizing performance for fast loading and easy navigation.",
    technologies: ["React", "tailwind CSS", "Framer Motion"],
  },
  {
    title: "CRUD Application",
    image: project4,
    description:
      "a dynamic CRUD application allowing users to Create, Read, Update, and Delete their data effortlessly. The application features a clean user interface by providing an intuitive experience for handling user inputs and operations directly in the browser.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Madipakkam, Chennai",
  //whatThreeword: "///caravans.newspaper.pool",
  phoneNo: "+91 70108 15965",
  email: "chanakiyak@gmail.com",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#aboutme", label: "About Me"},
  { href: "#technologies" ,label: "Technologies"},
  { href: "#experience", label: "Experience"},
  { href: "#projects", label: "Projects"},
  { href: "#contact", label: "Contact"},
];