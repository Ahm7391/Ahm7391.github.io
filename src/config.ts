export const siteConfig = {
  name: "Antonio Hazman",
  title: "Full-stack Data Scientist",
  description: "Portfolio website of Antonio Hazman",
  accentColor: "#1d4ed8",
  social: {
    email: "antonio_hazman@yahoo.com",
    linkedin: "https://www.linkedin.com/in/antonio-h-261b76135",
    github: "https://github.com/Ahm7391",
  },
  aboutMe:
    "Full-Stack Data Scientist with a strong quantitative foundation in Mechanical Engineering and 5+ years of manufacturing project leadership. Proven track record of designing and deploying end-to-end production systems—from self-hosted LLMs (Ollama) for marketing intelligence and resilient market scraping to deep learning forecasting (Attention RNNs, Multi-Armed Bandits) and full Laravel/PostgreSQL backends. Combines systematic engineering rigor, Linux infrastructure management, and AI-augmented workflows to deliver scalable solutions used by C-suite executives. Open to global opportunities.",
  skills: ["Python", "Laravel", "PostgreSQL", "Linux", "MLOps", "Docker"],
  projects: [
    {
      name: "Full-stack Business Inteligence Dashboard",
      description:
        "Engineered end-to-end ETL and Laravel/PostgreSQL backend APIs powering executive dashboards used daily by C-suites and revenue teams.",
      link: "https://github.com/Ahm7391/Real-Case",
      skills: ["Python", "Laravel/PostgreSQL", "Linux"],
    },
    {
      name: "Property Dynamic Pricing & Demand Forecasting",
      description:
        "Built production ML pipelines combining Attention-based RNNs and Contextual Multi-Armed Bandits (LinTS) with Optuna tuning to optimize 1 year room pricing and maximize occupancy.",
      link: "https://github.com/Ahm7391/Real-Case",
      skills: ["Tensorflow", "Laravel/PostgreSQL", "Linux", "MLOps"],
    },
    {
      name: "Scraping Competitor Price Pipeline",
      description:
        "Developed a robust Selenium pipeline, doing ethical scraping on multiple competitor properties across multiple OTAs.",
      link: "https://github.com/Ahm7391/Real-Case",
      skills: ["Selenium", "Laravel/PostgreSQL", "Linux"],
    },
  ],
  experience: [
    {
      company: "PT Ecommerceloka Solusi Bangsa",
      title: "Full-stack Data Scientist",
      dateRange: "November 2025 - Present",
      bullets: [
        "Reduced pricing decision latency from 24-hour reactive cycles to hourly adjustments",
        "Increased Business Insight of Revenue Team and C-suites.",
        "Engineered an in-house competitor intelligence pipeline, saving expenses in recurring annual SaaS subscriptions.",
      ],
    },
    {
      company: "Pan Era Group",
      title: "Technical Supervisor",
      dateRange: "February 2022 - February 2025",
      bullets: [
        "Leader of several strategic CAPEX projects.",
        "Mentored and leading team of 5 Project Engineers.",
        "Worked together with international manufacturers to improve machineries design according to company demands.",
      ],
    },
    {
      company: "Pan Era Group",
      title: "Industrial Engineer",
      dateRange: "October 2020 - February 2022",
      bullets: [
        "Create an automatic system to detect abnormality in any utilities monthly resource usage based on historic log.",
        "Utilizing MTBF Analysis to create better and efficient Maintenance Schedule.",
        "Collaborated with multiple divisions to create turnkey solutions for production problem.",
      ],
    },
  ],
  education: [
    {
      school: "Koding-Akademi, Denpasar",
      degree: "Data Scientist Certificate",
      dateRange: "2025",
      achievements: [
        "Built 10+ portfolio projects.",
        "Specialized in Machine Learning Development using Tensorflow, PyTorch, and Scikit-learn.",
      ],
    },
    {
      school: "Universitas Kristen Petra, Surabaya",
      degree: "Bachelor of Mechanical Engineering",
      dateRange: "2012 - 2016",
      achievements: [
        "Graduated Cum Laude with 3.71 GPA",
        'Published a Research Journal in Fluid Dynamics (<a href="https://doi.org/10.1063/1.5049961" target="_blank" rel="noopener noreferrer" class="underline hover:opacity-80">doi.org/10.1063/1.5049961</a>)',
      ],
    },
  ],
};
