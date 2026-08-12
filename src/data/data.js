export const menuData = [
  { title: "Experience", link: "#experience" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
  { title: "Distinctions", link: "#distinctions" },
]

export const headerLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jamesdinh-me/",
    size: 30,
  },
  {
    name: "GitHub",
    url: "https://github.com/jamesvdinh",
    size: 27,
  },
]

export const experienceData = [
  {
    img: "Collective-logo.jpg",
    title: "Collective",
    subtitle: "Software Engineer",
    date: "Aug 2026 – present",
    description: [
      "Joining the engineering team to build agentic AI as native, in-platform functionality on Collective's financial accounting product, replacing dependence on third-party integrations",
      "Focused on full-stack architecture and UI design to embed applied AI workflows directly into core product surfaces"
    ],
    link: [
      {
        name: "Website",
        url: "https://www.collective.com/",
      }
    ],
  },
  {
    img: "distillery_logo.gif",
    title: "Distillery",
    subtitle: "Software Engineer Intern",
    date: "Jun 2026 – present",
    description: [
      "Designing and building Proof Engine, a web platform that automates AI-generated brand assets (CEO headshots, quote cards, customer stories) for partner startups via a Gemini API image generation pipeline on Google Cloud",
      "Built an agentic company research pipeline using Python, Playwright, and web search to scrape and screenshot 75+ partner companies via a GCP service account, with threaded bulk processing and SQLite-backed screenshot retrieval",
      "Engineered a Streamlit HITL review interface displaying scraped data side-by-side with Playwright screenshots, with a hard approval gate blocking all Google Sheet writes until human verification",
    ],
    link: [
      {
        name: "Website",
        url: "https://www.wearedistillery.com/",
      }
    ],
  },
  {
    img: "prompt_opinion_logo.jpg",
    title: "Prompt Opinion",
    subtitle: "Software Engineer",
    date: "Sep – Dec 2025",
    description: [
      "Built an MCP server and AI agent tools enabling chatbot integration, orchestrating retrieval of multimodal patient data from an EHR, PostgreSQL database, and open health portals into unified FHIR-compliant REST API workflows",
      "Designed, developed, and tested full-stack features across a C# (.NET 9) backend and a TypeScript front end, collaborating with Product and Design through the full development lifecycle from user stories to deployment",
      "Wrote unit tests validating MCP tool inputs and outputs and integration tests in GitHub Actions verifying MCP tool structure, catching regressions before deployment",
    ],
    link: [
      {
        name: "Website",
        url: "https://www.promptopinion.ai/",
      },
      {
        name: "Community Repo",
        url: "https://github.com/prompt-opinion/po-community-mcp",
      },
    ],
  },
  {
    img: "funginstitute_logo.jpg",
    title: "Fung Institute for Engineering Leadership",
    subtitle: "Full Stack Developer Intern",
    date: "Aug 2025 – Jul 2026",
    description: [
      "Cleaned, aggregated, and analyzed student pulse‑survey data using Python and automated quality checks, producing reliable program metrics that informed Capstone Project resource allocation for 450+ MEng students",
      "Built an interactive keyword-frequency map component in React and D3.js that visualizes live data 225+ Capstone projects, enabling students to identify trending topics and inform their project rankings at a glance",
      "Developed a comprehensive MAS-E course-planning tool with automated prerequisite checks and forecasting logic, and integrated its data flows with Salesforce Data Cloud to unify advising and reporting across the program"
    ],
    link: [
      {
        name: "Website",
        url: "https://funginstitute.berkeley.edu/",
      },
    ],

  },
  {
    img: "darenasolutions_logo.jpg",
    title: "Darena Health",
    subtitle: "Software Engineer Intern",
    date: "Jun – Aug 2025",
    description: [
      "Built an MCP server and retrieval pipeline connecting an LLM-powered clinical chatbot to a FHIR-compliant EHR, enabling real-time patient data retrieval to power CVD risk scoring models and clinical trial matching",
      "Containerized and deployed the MCP server and data-integration pipeline using Docker and Kubernetes, providing consistent, isolated environments for bidirectional FHIR data exchange and improving stability for new features",
    ],
    link: [
      {
        name: "Website",
        url: "https://darena.health/",
      },
      {
        name: "Project Repo",
        url: "https://github.com/jamesvdinh/cardiovascular-disease-mcp",
      },
    ],
  },
  {
    img: "digitalnest.png",
    title: "Digital NEST",
    subtitle: "Frontend Web Developer Intern",
    date: "Aug 2023 – Aug 2024",
    description: [
      "Coordinated with clients in education and recreation to produce, develop, and maintain websites using WordPress, JS, PHP, and SEO optimization, boosting page visits by 200% and sustaining an average 36% bounce rate",
      "Developed a dynamic feature map using MapBox for ParkRX Monterey County to bolster park-going activity from Monterey County residents",
      "Delegated development workloads on Asana, GitHub, and Figma ",
    ],
    quote: {
      author: "Alex Rodriguez",
      title: "Web Development Manager | DevOps Engineer",
      text: [
        "I had the pleasure of working with James Dinh during his internship as his direct supervisor, and I can't emphasize enough how critical he was to our team. James consistently came through in clutch moments, regardless of the project or the tech stack. His ability to dive into unfamiliar technologies and deliver outstanding results is a testament to his adaptability and quick learning skills.",
        "Beyond his technical prowess, James, along with his cat, brought a fantastic sense of humor and a strong work ethic to our team. He was always the one to lighten the mood while also being one of the most dependable team members. James has a rare combination of skills and personality that makes him an invaluable asset to any team. I have no doubt that he'll continue to excel in his career.",
      ],
      attr: "Personal Recommendation (LinkedIn), Aug 2024",
    },
    link: [
      {
        name: "Website",
        url: "https://digitalnest.org/",
      },
    ],
  },
  {
    img: "catalyzesv.jpg",
    title: "Catalyze SV",
    subtitle: "Frontend Web Developer",
    date: "Jun – Sep 2023",
    description: [
      "Developed an HTML/CSS and JS sort-through filter menu to easily locate nearby projects via Mapbox forward geocoding, which improved user traffic to the site threefold",
      "Worked closely with backend developers to fetch data from the Shape SV database and resolve security issues",
      "Participated in weekly meetings to provide input and expertise which facilitated team productivity",
    ],
    link: [
      {
        name: "Website",
        url: "https://www.catalyzesiliconvalley.org/",
      },
    ],
  },
]

export const educationData = [
  {
    img: "ucberkeley.png",
    title: "UC Berkeley",
    subtitle: ["B.A. in Data Science"],
    date: "Aug 2024 – May 2026",
    description: [
      "GPA - 3.68",
      "Concentration in Applied Mathematics and Modeling",
      "Relevant Coursework - ML, Data Engineering, Data Structures, Probability Theory, Numerical Analysis",
      "Clubs/Orgs: Cal VSA Lion Dance (Music Lead)",
    ],
  },
  {
    img: "deanza.png",
    title: "De Anza College",
    subtitle: ["Computer Science Transfer"],
    date: "Sep 2023 – Jun 2024",
    description: [
      "GPA - 3.95",
      "Relevant Coursework - Calculus, Statistics, Microeconomics, Data Abstraction & Structures, Discrete Mathematics, R Programming, Python Programming, Differential Equations, Linear Algebra",
      "Clubs - VSA, Badminton Club, Developer's Guild, DA Web Developers",
    ],
  },
  {
    img: "gavilan.png",
    title: "Gavilan College",
    subtitle: [
      "A.S. in Computer Programming",
      "A.A. in Natural Science",
      "A.A. in Liberal Arts: Multiple Subjects",
    ],
    date: "Aug 2019 – May 2023",
    description: [
      "GPA - 3.95",
      "Dual Enrollment while in High School",
      "Relevant Coursework - Art, C#, C++, Calculus, Discrete Structures, General Chemistry, HTML, Human Anatomy & Physiology, Humanities, Java, Photoshop, Physics, Psychology, Public Speaking, Python, Spanish, UNIX/Linux",
      "Clubs - Computer Science Club (president), GEAR Club",
    ],
  },
  {
    img: "geca.jpg",
    title: "Dr. TJ Owens Gilroy Early College Academy",
    subtitle: ["High School Diploma"],
    date: "Aug 2019 – May 2023",
    description: [
      "GPA - 3.95 (Unweighted), 4.72 (Weighted)",
      "5 AP-level courses, 7 Honors-level courses, 27 College-level courses",
      "National Blue Ribbon School (2022)",
      "Outstanding Student Achievement - Integrated Math 1+, Integrated Math 2+",
      "Clubs - STEM Club, Debate Club, Finance Club, Math Club",
    ],
  },
]

export const projectData = [
  {
    title: "Travel Planner AI: Claude Code-Inspired Trip Planner",
    url: "https://jamesvdinh.github.io/buildwithgemini-travel-planner/",
    subtitle: "An autonomous ReAct travel agent powered by Gemini 3.6 Flash and Google ADK",
    tags: ["Python", "FastAPI", "JavaScript", "Leaflet", "GCP", "Vertex AI"],
    img: ["travel-planner-ai-1.png", "travel-planner-ai-2.png"],
    description:
      "This is a little project I've been vibe-coding that bridges Markdown trip planners like myself to a Claude Code-inspired agent. It features a dedicated chat window with itinerary context, access to Google Maps data, real-time map plotting, live tool observability, and human-in-the-loop file approvals, just like in Claude Code!",
    link: [
      {
        name: "Demo",
        url: "https://jamesvdinh.github.io/buildwithgemini-travel-planner/",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/buildwithgemini-travel-planner",
        size: 22,
      },
    ],
  },
  {
    title: "Spotify Music Trend Analytics Pipeline",
    url: "https://github.com/jamesvdinh/spotify-trend-dashboard",
    subtitle: "Real-Time Streaming Pipeline for Music Trend Analysis on GCP",
    tags: ["Kafka", "PySpark", "Airflow", "BigQuery", "dbt", "D3.js", "GCP", "Python"],
    img: ["spotify-dashboard.png"],
    description:
      "Built an end-to-end real-time analytics pipeline ingesting Spotify API data via Kafka, processing streams with PySpark, orchestrating batch jobs with Airflow, and transforming data in BigQuery using dbt, serving trend insights through an interactive D3.js dashboard deployed on GCP.",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/spotify-trend-dashboard",
        size: 22,
      },
    ],
  },
  {
    title: "LLM Stock Trading Benchmarker",
    url: "https://github.com/vkethana/calhacks-24",
    subtitle: "Cal Hacks 11.0 Submission",
    tags: ["Flask", "Python", "React", "TypeScript", "NodeJS", "Groq", "Sass"],
    img: ["llm_stock_trading.png"],
    description:
      "Built a full-stack React/Flask app integrating multiple LLM APIs (Groq) into a code-execution pipeline, applying React state memoization and performance tuning to handle 300+ queries per period while minimizing render overflow; developed AI-assisted with Claude and Cursor.",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/vkethana/calhacks-24",
        size: 22,
      },
    ],
  },
  {
    title: "Internal bizzNEST Career Harvest Job Database",
    url: "",
    subtitle:
      "Job Board that Filters Relevant Internship Opportunities for Digital NEST Interns",
    tags: ["React", "TypeScript", "Node.js", "Docker", "SQLite", "Firebase"],
    img: [],
    description:
      "Built a filterable internship search database in React, TypeScript, and Node.js, collating 200+ listings from LinkedIn and Indeed, containerized with Docker over an SQLite backend. Implemented Firebase OAuth authentication with Captcha and email verification security checks.",
    link: [],
  },
  {
    title: "MIMIC-IV-Ext Unsupervised Phenotyping of Diabetes Progression",
    url: "https://github.com/jamesvdinh/diabetes-prog-phenotyping",
    subtitle:
      "Data Pipeline Utilizing K-Means & UMAP to Phenotype Diabetic Patients – Research Paper",
    tags: ["Python", "ETL", "K-Means", "UMAP", "Unsupervised Learning"],
    img: ["full_cohort_patient_umap_clusters.png", "cluster_comorbidity_heatmap.png"],
    description:
      "Designed and implemented a scalable ETL pipeline in Python to extract, clean, and transform heterogeneous clinical records across 46k+ diabetes patients from MIMIC-IV, engineering features for downstream unsupervised segmentation models (K-Means, UMAP) to identify clinically meaningful clusters.",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/diabetes-prog-phenotyping",
        size: 22,
      },
    ],
  },
  {
    title: "ParkRX Monterey County Search Feature Map",
    url: "https://parkrxmontereycounty.org/#parks",
    subtitle: "Custom-coded Map with Search Filters",
    tags: [
      "Mapbox",
      "WordPress",
      "JavaScript",
      "jQuery",
      "PHP",
      "XML",
      "AJAX",
      "HTML/CSS",
    ],
    img: ["blueparkrx.png"],
    description:
      "A custom map that displays park information and allows Monterey County residents to search parks in a radius, by name, by hours, alphabetically, by park features, and give public transit routes.",
    link: [
      {
        name: "Demo",
        url: "https://parkrxmontereycounty.org/#parks",
        size: 22,
      },
      {
        name: "Website",
        url: "https://parkrxmontereycounty.org/",
        size: 22,
      },
    ],
  },
  {
    title: "ASL Hand Recognition App",
    url: "https://jamesvdinh.github.io/asl-translator/",
    subtitle: "Computer Vision Sign Lanugage Translator",
    tags: [
      "MediaPipe",
      "TensorFlow",
      "OpenCV",
      "Jupyter Notebook",
      "Python",
      "JavaScript",
    ],
    img: ["asl-pic-1.png", "asl-pic-2.jpg"],
    description:
      "Implemented a feedforward neural network (CNN) with 128-unit and 256-unit ReLU layers that classified inputs across 29 categories on a live camera feed input; Used binary cross-entropy loss & SGD to achieve an AUC of 0.97.",
    link: [
      {
        name: "Demo",
        url: "https://jamesvdinh.github.io/asl-translator/",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/asl-translator",
        size: 22,
      },
      {
        name: "Research Paper",
        url: "https://docs.google.com/document/d/1g73K_jQwfBhyOlLoQQG9i2JNmKlebSzt9dzH-WRfLMQ/edit?usp=sharing",
        size: 22,
      },
      {
        name: "Slides Presentation",
        url: "https://docs.google.com/presentation/d/1s4tyiZyS0UuMa0Vl-X4qmB4Aot7Keay6WYfPSoVRJEA/edit?usp=sharing",
        size: 22,
      },
    ],
  },
  {
    title: "Catalyze SV Project Filter Search Tool",
    url: "https://www.shapesv.org/projects",
    subtitle: "Dynamic Search Menu using Fetch API and JS",
    tags: ["Wix", "Velo", "HTML/CSS", "JavaScript"],
    img: ["catalyzesv-1.png"],
    description:
      "A search tool designed for users to specify filters and display a list of queried projects for Shape SV. Used GET fetch to retrieve data from Google Sheets database to display list of dynamic projects using iframe.",
    link: [
      {
        name: "Demo",
        url: "https://www.shapesv.org/projects",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/catalyze-sv",
        size: 22,
      },
    ],
  },
  {
    title: "College Roommate Finder App",
    url: "https://jamesvdinh.github.io/roomie-finder/",
    subtitle: "Criteria-based Attribute Sort using Flask API and React",
    tags: ["Flask API", "Python", "React", "JavaScript", "NodeJS"],
    img: ["roomie-finder.png"],
    description:
      "An app that takes user-input criteria and outputs potential roomates that closely matches that criteria using a scoring-based algorithm. Team submission for De Anza Hacks 2023.",
    link: [
      {
        name: "Demo",
        url: "https://jamesvdinh.github.io/roomie-finder/",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/roomie-finder",
        size: 22,
      },
    ],
  },
  {
    title: "Custom Arduino Accelerometer",
    url: "https://nextcloud.andrewkdinh.com/s/3JKxDdw9NeM234r",
    subtitle: "Accelerometer Mount on Water-Powered Rocket",
    tags: ["Arduino", "TinyDuino", "C++"],
    img: ["internship-1.jpg", "internship-2.png"],
    description:
      "Constructed a water-powered rocket that saves accelerometer circuit data to an onboard SSD in order to analyze changes in temperature, height, and pressure. Physics and Arduino Programming Internship, advised by Dr. Sewan Fan (Gavilan Physics Dept.).",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/custom-accelerometer",
        size: 22,
      },
      {
        name: "Poster Summary",
        url: "https://nextcloud.andrewkdinh.com/s/3JKxDdw9NeM234r",
        size: 22,
      },
    ],
  },
  {
    title: "Principal Component Analysis Research Project",
    url: "https://github.com/jamesvdinh/PCA",
    subtitle: "Mathematical Concept Explanation",
    tags: ["MatPlotLib", "Jupyter Notebook", "Python"],
    img: ["pca-1.png", "pca-2.png"],
    description:
      "A mathematical concept explanation on Principal Component Analysis (PCA), advised by Professor El Ghaoui (UC Berkeley EECS Dept.). Authored a concise article that explains the concept of PCA and examples of real-world applications.",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/PCA",
        size: 22,
      },
    ],
  },
  {
    title: "Gilroy Hacks Website",
    url: "https://gilroyhacks.com/",
    subtitle: "501(c)(3) Local Hackathon Organization",
    tags: ["HTML/CSS", "JavaScript"],
    img: ["gilroyhacks.png"],
    description:
      "Official website for my 501(c)(3) hackathon organization, Gilroy Hacks, built entirely from scratch.",
    link: [
      {
        name: "Website",
        url: "https://gilroyhacks.com/",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/gilroy-hacks",
        size: 22,
      },
    ],
  },
  {
    title: "Kronos",
    url: "https://github.com/jamesvdinh/Kronos",
    subtitle: "Student-focused Time Manager",
    tags: ["C#", ".NET"],
    img: ["kronos-1.png", "kronos-2.png"],
    description:
      "A time manager built to effectively reduce stress in students and make their schedules more efficient. 1st place submission for Coding For Covid 2021",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/Kronos",
        size: 22,
      },
    ],
  },
  {
    title: "2020 Vision",
    url: "https://github.com/jamesvdinh/2020-Vision",
    subtitle: "COVID-19 Data Visualizer",
    tags: ["C++"],
    img: ["2020vision.png"],
    description:
      "A program that can provide informative and detailed information on the most recent COVID-19 statistics while providing assessment results on COVID safety. 2nd place submission for IvyMax Hackathon 2020",
    link: [
      {
        name: "Demo",
        url: "https://replit.com/@wellfedbison/2020-Vision",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/2020-Vision",
        size: 22,
      },
    ],
  },
  {
    title: "v1.jamesdinh.me",
    url: "http://v1.jamesdinh.me/",
    subtitle: "v1 of my personal website",
    tags: ["HTML/CSS", "JavaScript"],
    img: ["v1.png"],
    description: "The very first rendition of my personal website/portfolio.",
    link: [
      {
        name: "Website",
        url: "http://v1.jamesdinh.me/",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/v1.jamesdinh.me",
        size: 22,
      },
    ],
  },
  {
    title: "Artist Website - Nancy Pannikkat",
    url: "https://nancypannikkat.com/",
    subtitle: "Art Portfolio",
    tags: ["HTML/CSS", "JavaScript"],
    img: ["nkp.png"],
    description:
      "Artist portfolio website for photographer and artist Nancy Pannikkat. Built on commission as a freelance web developer.",
    link: [
      {
        name: "Website",
        url: "https://nancypannikkat.com/",
        size: 22,
      },
    ],
  },
  {
    title: "Glutamate",
    url: "https://github.com/jamesvdinh/Glutamate",
    subtitle: "Student-focused Flashcard Maker",
    tags: ["C#", ".NET"],
    img: ["glutamate.png"],
    description:
      "A flashcard creator and template app, useful for students wanting an easy and simple way of creating flashcards for studying.",
    link: [
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/Glutamate",
        size: 22,
      },
    ],
  },
]

export const distinctionData = [
  {
    date: "Jul 2023",
    title: "President's Volunteer Service Award - Silver",
    description:
      "Received the PVSA (Silver Award) for fulfilling 174+ hours of community service in 2022-2023",
  },
  {
    date: "May 2023",
    title: "Commended Scholar",
    description:
      "National Merit Scholarship Distinction for achieving a PSAT/NMSQT score of 1400 and selection index of 209",
  },
  {
    date: "May 2023",
    title: "CAASPP Highest Possible Score",
    description:
      "Achieved the highest possible score on the 2022 CAASPP in Mathematics & English Language Arts",
  },
  {
    date: "May 2023",
    title: "Chi Am Circle Scholarship Recipient",
    description: "Recipient of the Chi Am Circle Scholarship for $2,000",
  },
  {
    date: "May 2023",
    title: "Cougar Scholarship Recipient",
    description:
      "Recipient of the Rucker Elementary Cougar Scholarship for $1,000",
  },
  {
    date: "May 2021",
    title: "Outstanding Student Achievement - Math II+",
    description:
      "Awarded by GECA faculty for demonstrating outstanding performance in Math II",
  },
  {
    date: "May 2020",
    title: "Outstanding Student Achievement - Math I+",
    description:
      "Awarded by GECA faculty for demonstrating outstanding performance in Math I",
  },
]
