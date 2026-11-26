/**
 * Portfolio Data for Maithilee Bhatkar
 * Keep all personal information, links, projects, skills, and timeline entries organized here.
 */

export const personalInfo = {
  name: "Maithilee Bhatkar",
  title: "Full-Stack Developer",
  status: "Final-year Computer Engineering student",
  location: "Mumbai, India",
  graduationYear: "2027",
  cgpa: "8.43/10 (through Semester VI)",
  availabilityText: "Available for internships & full-time roles",
  email: "maithileebhatkar1702@gmail.com",
  resumePath: "/resume.pdf",
  resumeFileName: "Maithilee_Bhatkar_Resume.pdf",
  socialLinks: {
    github: {
      label: "GitHub",
      url: "https://github.com/maithilee17",
      username: "maithilee17",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/maithilee17/",
      username: "maithilee17",
    },
    leetcode: {
      label: "LeetCode",
      url: "https://leetcode.com/u/maithileeb/",
      username: "maithileeb",
    },
    email: {
      label: "Email",
      url: "mailto:maithileebhatkar1702@gmail.com",
      address: "maithileebhatkar1702@gmail.com",
    },
  },
};

export const heroData = {
  intro: "Hello, I'm Maithilee Bhatkar.",
  headlinePrimary: "Full-Stack Developer.",
  headlineAccent: "Building with purpose.",
  description:
    "Final-year Computer Engineering student building reliable web applications and exploring the possibilities of AI.",
};

export const aboutData = {
  sectionLabel: "ABOUT ME",
  heading: "Curious mind. Developer mindset.",
  description:
    "I'm a final-year Computer Engineering student with a passion for full-stack development, AI and solving real-world problems through technology. I enjoy building practical applications and continuously exploring new technologies.",
  highlight:
    "Looking for my next opportunity to learn, contribute and build something meaningful.",
};

export const educationData = {
  sectionLabel: "EDUCATION",
  heading: "My academic journey.",
  institution: "Usha Mittal Institute of Technology",
  university: "SNDT Women's University, Mumbai",
  degree: "B.Tech in Computer Engineering",
  duration: "2023 – 2027",
  minor: "Embedded Systems",
  cgpa: "8.43/10 (through Semester VI)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Software Engineering",
    "Computer Architecture",
  ],
};

export const skillsData = {
  sectionLabel: "TECHNOLOGIES",
  heading: "My tech stack.",
  supportingText:
    "Technologies I've worked with across development, databases and AI-powered applications.",
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      icon: "Code",
      skills: ["Java", "Python", "JavaScript", "SQL", "C/C++ (Basic)"],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: "Layout",
      skills: [
        "React.js",
        "HTML",
        "CSS",
        "Vite",
        "Axios",
        "Chart.js",
        "WebSocket",
        "STOMP",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: "Server",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "FastAPI",
        "Flask",
        "REST APIs",
        "SQLAlchemy",
        "JWT",
        "BCrypt",
        "CSRF Protection",
      ],
    },
    {
      id: "databases",
      title: "Databases & Data Analytics",
      icon: "Database",
      skills: ["PostgreSQL", "ChromaDB", "Pandas", "Tableau"],
    },
    {
      id: "ai",
      title: "AI & Emerging Technologies",
      icon: "Sparkles",
      skills: [
        "Generative AI",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Ollama",
        "Qwen3",
        "Vector Embeddings",
        "Hybrid Search",
        "Natural Language Processing (NLP)",
        "Machine Learning",
      ],
    },
    {
      id: "tools",
      title: "Developer Tools & Technologies",
      icon: "Wrench",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Linux",
      ],
    },
    {
      id: "embedded",
      title: "Embedded Systems",
      icon: "Cpu",
      skills: ["Embedded C","Embedded C++", "Verilog", "Linux"],
    },
  ],
};

export const projectsData = {
  sectionLabel: "SELECTED WORK",
  heading: "Selected projects.",
  supportingText:
    "A collection of projects exploring full-stack development, artificial intelligence and secure software solutions.",
  projects: [
    {
      id: "timechat",
      title: "TimeChat",
      subtitle: "Real-Time and Scheduled Messaging Application",
      category: "Full-Stack Web Development",
      duration: "September 2025 – November 2026",
      description:
        "A full-stack messaging application designed for real-time communication and reliable, timezone-aware scheduled message delivery.",
      keyFeatures: [
        "Real-time messaging using WebSocket and STOMP.",
        "Timezone-aware message scheduling.",
        "Automated retries and idempotency for reliable message delivery.",
        "Transactional outbox implementation.",
        "Secure authentication and authorization using JWT and Spring Security.",
        "BCrypt and CSRF protection.",
      ],
      primaryTags: [
        "React.js",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "WebSocket",
        "JWT",
      ],
      fullTechStack: [
        {
          group: "Programming Languages & Markup",
          items: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
        },
        {
          group: "Frontend",
          items: ["React.js", "Axios", "WebSocket", "STOMP"],
        },
        {
          group: "Backend",
          items: [
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "REST APIs",
            "JWT",
            "BCrypt",
            "CSRF Protection",
          ],
        },
        {
          group: "Database",
          items: ["PostgreSQL"],
        },
        {
          group: "Developer Tools",
          items: ["Git", "GitHub", "GitHub Actions", "Docker", "Nginx"],
        },
      ],
      githubUrl: "https://github.com/maithilee17/TimeChat-RealTime-Messaging",
      liveUrl: null,
      image: "/images/timechat.png",
      placeholder: {
        icon: "MessagesSquare",
        tintClass: "placeholder-lavender",
        name: "TimeChat",
      },
    },
    {
      id: "finassist",
      title: "FinAssist AI",
      subtitle:
        "Adaptive and Evidence-Aware Financial Question Answering System",
      category: "Artificial Intelligence & Full-Stack Development",
      duration: "2026",
      description:
        "An AI-powered financial document question-answering system that analyzes and compares multiple financial PDF reports using natural language queries and evidence-aware retrieval.",
      keyFeatures: [
        "Financial PDF analysis using Retrieval-Augmented Generation.",
        "Adaptive retrieval and hybrid search.",
        "Natural language question answering.",
        "Source-grounded responses with page-level citations.",
        "Evidence verification and confidence scores.",
        "Insufficient-evidence detection.",
      ],
      primaryTags: [
        "Python",
        "React.js",
        "FastAPI",
        "RAG",
        "ChromaDB",
        "Ollama",
        "Qwen3",
      ],
      fullTechStack: [
        {
          group: "Programming Languages",
          items: ["Python", "JavaScript", "SQL"],
        },
        {
          group: "Frontend",
          items: ["React.js", "Vite", "HTML", "CSS"],
        },
        {
          group: "Backend",
          items: ["FastAPI", "REST APIs", "SQLAlchemy", "JWT"],
        },
        {
          group: "Databases",
          items: ["PostgreSQL", "ChromaDB"],
        },
        {
          group: "AI Technologies",
          items: [
            "Generative AI",
            "LLMs",
            "RAG",
            "Ollama",
            "Qwen3",
            "Vector Embeddings",
            "Hybrid Search",
            "NLP",
          ],
        },
        {
          group: "Developer Tools",
          items: ["Git", "GitHub", "Docker", "Docker Compose", "Nginx"],
        },
      ],
      githubUrl: "https://github.com/maithilee17/FinAssist_AI",
      liveUrl: null,
      image: "/images/finassist.png",
      placeholder: {
        icon: "FileSearch",
        tintClass: "placeholder-softgreen",
        name: "FinAssist AI",
      },
    },
    {
      id: "agentshield",
      title: "AgentShield",
      subtitle:
        "Zero-Trust Security and Memory Integrity Platform for Autonomous LLM Agents",
      category: "AI & Cybersecurity",
      duration: "October 2026",
      projectTypeBadge: "Final-Year Group Project",
      awardBadge: "First Prize — Final Year Project Exhibition",
      description:
        "A zero-trust AI security platform designed to protect autonomous LLM agents against prompt injection and memory poisoning attacks.",
      keyFeatures: [
        "Memory trust scoring and risk assessment.",
        "Protection against prompt injection and memory poisoning.",
        "Human approval workflows.",
        "Audit logging.",
        "Ollama integration.",
        "Evaluation against adversarial attack scenarios.",
      ],
      primaryTags: [
        "Python",
        "Zero-Trust AI",
        "LLM Security",
        "Ollama",
        "Adversarial Defense",
      ],
      fullTechStack: null, // As specified: Do not invent a detailed tech stack or individual contributions
      githubUrl: null, // As specified: No public repo, do not display inactive/fake button
      liveUrl: null,
      image: "/images/agentshield.png",
      placeholder: {
        icon: "ShieldCheck",
        tintClass: "placeholder-softpurple",
        name: "AgentShield",
      },
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      subtitle: null,
      category: "Frontend Development",
      duration: "October 2026",
      description:
        "A clean, responsive personal portfolio website designed to showcase technical skills, projects and professional achievements.",
      keyFeatures: [],
      primaryTags: ["HTML", "CSS", "JavaScript"],
      fullTechStack: null,
      githubUrl: null, // No repo supplied yet: hide buttons
      liveUrl: null,
      image: "/images/portfolio.png",
      placeholder: {
        icon: "PanelsTopLeft",
        tintClass: "placeholder-neutral",
        name: "Personal Portfolio Website",
      },
    },
  ],
};

export const achievementData = {
  sectionLabel: "ACHIEVEMENT",
  heading: "A milestone worth sharing.",
  achievement: {
    title: "First Prize — Final Year Project Exhibition and Competition",
    institution:
      "Usha Mittal Institute of Technology, SNDT Women's University",
    date: "October 2026",
    description:
      "Awarded first prize for AgentShield: A Zero-Trust Security and Memory Integrity Platform for Autonomous LLM Agents at the Final Year Project Exhibition and Competition.",
  },
};

export const leadershipData = {
  sectionLabel: "LEADERSHIP",
  heading: "Beyond the code.",
  supportingText:
    "Contributing to student-led innovation, collaboration and community initiatives.",
  positions: [
    {
      title: "Social Media and Marketing Head",
      organization: "IIC-UMIT, Usha Mittal Institute of Technology",
      duration: "October 2024 – October 2025",
      description:
        "Led digital outreach, marketing and social media initiatives to enhance institute visibility and student engagement. Planned and promoted innovation, entrepreneurship and student-focused activities through digital platforms.",
    },
    {
      title: "IIC Representative",
      organization: "IIC-UMIT, Usha Mittal Institute of Technology",
      duration: "October 2023 – October 2024",
      description:
        "Represented the Institution's Innovation Council, encouraged student participation and supported the coordination and promotion of innovation and entrepreneurship initiatives.",
    },
  ],
};

export const certificationsData = {
  sectionLabel: "CERTIFICATIONS",
  heading: "Always learning.",
  certifications: [
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      organization: "Tata, Forage",
      date: "November 2026",
      certificateUrl: "/certificates/tata-genai.png",
    },
    {
      title: "ByteBlitz Campaign – 4 Days of Code & Mini Hackathon",
      organization: "GDG-UMIT",
      date: "December 2025",
      certificateUrl: "/certificates/byteblitz.png",
    },
    {
      title: "Google Cloud Study Jam Campaign",
      organization: "GDG-UMIT",
      date: "November 2025",
      certificateUrl: "/certificates/google-cloud.png",
    },
  ],
};

export const contactData = {
  sectionLabel: "GET IN TOUCH",
  heading: "Let's build something meaningful.",
  description:
    "I'm currently open to internships and full-time opportunities. If you're looking for a curious developer who enjoys learning, solving problems and building practical solutions, I'd love to connect.",
  ctaText: "Contact",
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Maithilee Bhatkar`,
  tagline: "Designed & built with React.",
};
