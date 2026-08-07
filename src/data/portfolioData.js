import profileImg from '../assets/images/profile.png';
import projectAccidentImg from '../assets/images/project_accident.png';
import projectAgriImg from '../assets/images/project_agrimitra.png';
import projectJobImg from '../assets/images/project_jobshield.png';
import projectLabImg from '../assets/images/project2.png';
import projectResumeImg from '../assets/images/project_resumereview.png';
import projectMeshImg from '../assets/images/project_meshweb.png';
import projectShadowImg from '../assets/images/project_shadow.png';
import flyRankImg from '../assets/images/flyrank_internship.png';
import alfidoOfferImg from '../assets/images/alfido_offer_letter.png';

export const internshipsData = [
  {
    id: 1,
    role: "Backend AI Engineering Intern",
    company: "FlyRank AI",
    type: "Internship",
    duration: "Jul 2026 – Present",
    location: "Chicago, Illinois, United States · Remote",
    description: "Currently interning at FlyRank AI as an AI intern, focusing on Backend AI Engineering, intelligent model APIs, and machine learning infrastructure.",
    skills: ["Backend AI Engineering", "Python", "API Integration", "AI/ML Workflows"],
    image: flyRankImg,
    proofTitle: "LinkedIn Internship Verification"
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Alfido Tech",
    type: "Internship (6 Months)",
    duration: "Aug 2026 – Present",
    location: "Hyderabad, Telangana, India",
    description: "Engaged in hands-on task-based learning model, building real-world web applications, component architecture, and responsive user interfaces.",
    skills: ["Frontend Web Development", "React.js", "JavaScript", "HTML5 & CSS3"],
    image: alfidoOfferImg,
    proofTitle: "Official Internship Offer Letter (Candidate ID: BS/REG/125802)"
  }
];

export const personalDetails = {
  name: "Syed Umair Ahmed",
  role: "Computer Science Engineering Student",
  subtitle: "Computer Science Engineering Student | Full-Stack & Web Developer",
  typingRoles: [
    "Computer Science Engineer",
    "Web Developer",
    "AI & ML Enthusiast",
    "Problem Solver"
  ],
  bio: "Computer Science Engineering student with skills in web development and programming. Passionate about building user-friendly applications and solving real-world problems. Eager to contribute to real-world projects through a software development internship while continuously learning and improving.",
  aboutText: "Computer Science Engineering student passionate about building user-friendly applications and solving real-world problems. Experienced in modern web development, AI integration, and core software engineering concepts.",
  careerObjective: "Eager to contribute to real-world projects through a software development internship while continuously learning and improving.",
  tagline: "Eager to learn, build and contribute to impactful projects.",
  location: "Hyderabad, Telangana, India",
  email: "syedumairahmed9999@gmail.com",
  phone: "+91 8688381782",
  github: "https://github.com/Syedumair05",
  linkedin: "https://www.linkedin.com/in/syedumair05/",
  resumeUrl: "/resume.html"
};

export const skillsData = {
  Languages: [
    { name: "Java", icon: "FaJava", level: 90, color: "#f89820" },
    { name: "Python", icon: "SiPython", level: 85, color: "#3776AB" },
    { name: "C (Basic)", icon: "SiC", level: 75, color: "#A8B9CC" }
  ],
  WebTech: [
    { name: "HTML", icon: "SiHtml5", level: 95, color: "#E34F26" },
    { name: "CSS", icon: "SiCss3", level: 90, color: "#1572B6" },
    { name: "JavaScript", icon: "SiJavascript", level: 90, color: "#F7DF1E" }
  ],
  Tools: [
    { name: "Git", icon: "SiGit", level: 88, color: "#F05032" },
    { name: "GitHub", icon: "SiGithub", level: 92, color: "#181717" },
    { name: "VS Code", icon: "SiVisualstudiocode", level: 95, color: "#007ACC" }
  ],
  Concepts: [
    { name: "Object-Oriented Programming (OOP)", icon: "FaCode", level: 90, color: "#38bdf8" },
    { name: "Data Structures & Algorithms", icon: "FaProjectDiagram", level: 88, color: "#818cf8" },
    { name: "Database Fundamentals", icon: "FaDatabase", level: 85, color: "#34d399" },
    { name: "AI Fundamentals", icon: "FaBrain", level: 82, color: "#f472b6" },
    { name: "Machine Learning Basics", icon: "FaRobot", level: 80, color: "#fbbf24" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "AI Resume Reviewer",
    category: "AI / Web App",
    description: "An AI-powered resume analysis system that evaluates resumes against job descriptions, calculates ATS compatibility scores, extracts key skills, and generates personalized recommendations.",
    image: projectResumeImg,
    techStack: ["TypeScript", "React", "Gemini AI", "TailwindCSS"],
    githubUrl: "https://github.com/Syedumair05/Resume-Review",
    liveUrl: "https://github.com/Syedumair05/Resume-Review",
    bullets: [
      "AI-driven resume evaluation with ATS compatibility scoring.",
      "Extracts key technical skills and suggests tailored resume improvements."
    ],
    featured: true
  },
  {
    id: 2,
    title: "AI Accident Detection Dashboard V2",
    category: "AI / Computer Vision",
    description: "Developed an AI-powered dashboard V2 to detect road accidents and provide real-time alerts using computer vision models and interactive live incident visualization feeds.",
    image: projectAccidentImg,
    techStack: ["Python", "AI/ML", "Computer Vision", "JavaScript"],
    githubUrl: "https://github.com/Syedumair05/ai-accident-detection-dashboard-v2",
    liveUrl: "https://github.com/Syedumair05/ai-accident-detection-dashboard-v2",
    bullets: [
      "Utilized AI models and video feeds to identify road accidents and trigger real-time alerts.",
      "Built an interactive dashboard V2 to visualize incident data and camera feeds."
    ],
    featured: true
  },
  {
    id: 3,
    title: "AgriMitra – AI Crop Market Intelligence",
    category: "AI / Agriculture",
    description: "An intelligent, multilingual agricultural market advisor that helps Indian farmers maximize crop profits through real-time mandi price analysis, smart price predictions, and personalized selling recommendations.",
    image: projectAgriImg,
    techStack: ["JavaScript", "HTML", "CSS", "Chart.js", "Google Maps API", "Weatherstack API"],
    githubUrl: "https://github.com/Syedumair05/AgriMitra-",
    liveUrl: "https://github.com/Syedumair05/AgriMitra-",
    bullets: [
      "Real-time mandi prices, smart price prediction & profit calculator.",
      "Advanced analytics with trend charts, market comparison & what-if analysis.",
      "Multilingual & voice support (English, Hindi, Telugu) with auto-detection.",
      "Live weather integration and government schemes engine with Google Maps directions."
    ],
    featured: true
  },
  {
    id: 4,
    title: "Job Shield",
    category: "Web Security",
    description: "Built a platform focused on job-related safety and security features, helping users manage job-related risks and information efficiently with secure data handling and user authentication.",
    image: projectJobImg,
    techStack: ["JavaScript", "HTML", "CSS", "GitHub"],
    githubUrl: "https://github.com/Syedumair05/Job-Shield",
    liveUrl: "https://github.com/Syedumair05/Job-Shield",
    bullets: [
      "Implemented user authentication and secure data handling.",
      "Designed responsive UI for better user experience and risk management."
    ],
    featured: true
  },
  {
    id: 5,
    title: "Virtual Lab Experience",
    category: "Web Simulation",
    description: "Created a virtual lab platform to simulate practical experiments and provide interactive learning for science students in a digital environment with real-time interaction.",
    image: projectLabImg,
    techStack: ["TypeScript", "React", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Syedumair05/virtual-lab-experience",
    liveUrl: "https://github.com/Syedumair05/virtual-lab-experience",
    bullets: [
      "Simulated experiments with real-time interaction.",
      "Focused on improving practical understanding for students."
    ],
    featured: true
  },
  {
    id: 6,
    title: "MeshWeb Interactive Platform",
    category: "Web Network / UI",
    description: "Interactive mesh web networking platform showcasing dynamic interconnected node graphs, real-time visual data processing, and custom canvas rendering.",
    image: projectMeshImg,
    techStack: ["JavaScript", "HTML5", "CSS3", "Canvas"],
    githubUrl: "https://github.com/Syedumair05/MeshWeb",
    liveUrl: "https://github.com/Syedumair05/MeshWeb",
    bullets: [
      "Interactive node mesh network graph rendering.",
      "Optimized 2D canvas animation and real-time visual feedback."
    ],
    featured: false
  }
];

export const educationData = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "Lords Institute of Engineering and Technology",
    period: "2024 – 2028",
    details: "Currently pursuing Bachelor of Engineering degree with a focus on Computer Science, Web Technologies, Data Structures, OOP, and AI Fundamentals."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Shaheen Junior College",
    period: "2022 – 2024",
    details: "Completed Higher Secondary Education in Mathematics, Physics, and Chemistry."
  },
  {
    degree: "SSC (Class X)",
    institution: "St. Aristotle School",
    period: "2022",
    details: "Completed Secondary School Certificate with strong foundational education."
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "NPTEL – Java Programming",
    issuer: "NPTEL",
    skills: ["Java", "OOP", "Data Structures"]
  },
  {
    id: 2,
    title: "JP Morgan – Software Engineering Job Simulation",
    issuer: "Forage / JP Morgan Chase & Co.",
    skills: ["Software Engineering", "Agile", "System Design"]
  },
  {
    id: 3,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    skills: ["AI Foundations", "Oracle Cloud Infrastructure", "Machine Learning"]
  },
  {
    id: 4,
    title: "C Beginner Course Completion Certificate",
    issuer: "Great Learning",
    skills: ["C Programming", "Basics & Logic"]
  },
  {
    id: 5,
    title: "Data Structures – Course Completion Certificate",
    issuer: "Great Learning",
    skills: ["Data Structures", "Algorithms"]
  },
  {
    id: 6,
    title: "Ethical Generative AI in Software Engineering",
    issuer: "Simplilearn | Skills Up",
    skills: ["Generative AI", "AI Ethics", "Prompting"]
  },
  {
    id: 7,
    title: "Fundamentals of Database: What is SQL?",
    issuer: "Simplilearn",
    skills: ["Database Fundamentals", "SQL Queries", "DBMS"]
  },
  {
    id: 8,
    title: "Machine Learning for Beginners",
    issuer: "Simplilearn",
    skills: ["Machine Learning", "Supervised Learning", "Data Analysis"]
  }
];

export const courseworkData = [
  "Data Structures",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Artificial Intelligence Fundamentals"
];

export const achievementsData = [
  "Completed 8+ industry-recognized certifications in programming, AI, cloud, and databases.",
  "Actively participated in coding challenges and technical events.",
  "Built and deployed multiple real-world projects using modern web technologies.",
  "Consistent academic performance with strong problem-solving skills."
];

export const extraCurricularData = [
  "Actively participate in technical fests and hackathons.",
  "Collaborate in team projects and group assignments.",
  "Continuously learning new technologies and improving practical skills."
];

export const spokenLanguages = ["English", "Hindi", "Telugu"];
