export const menuData = [
  { title: "Education", link: "#education" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Distinctions", link: "#distinctions" },
  // {title: "Skills", link: "#skills"},
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

export const educationData = [
  {
    img: "deanza.png",
    title: "De Anza College",
    subtitle: ["Computer Science Transfer"],
    date: "Sep 2023 - present",
    description: [
      "GPA - 4.0",
      "Studying to transfer to the University of California for Data Science B.S.",
      "Coursework - Calculus, Statistics, Microeconomics, Data Abstraction & Structures, Discrete Mathematics, R Programming, Python Programming, Differential Equations, Linear Algebra",
      "Clubs - VSA, Badminton Club, Developer's Guild, DA Web Developers",
    ],
  },
  {
    img: "gavilan.png",
    title: "Gavilan College",
    subtitle: [
      "A.S. in Computer Programming",
      "A.A. in Natural Science",
      "A.A. in Liberal Arts",
    ],
    date: "Aug 2019 - May 2023",
    description: [
      "GPA - 3.95",
      "Dual Enrollment while in High School",
      "Coursework - Art, C#, C++, Calculus, Discrete Structures, General Chemistry, HTML, Human Anatomy & Physiology, Humanities, Java, Photoshop, Physics, Psychology, Public Speaking, Python, Spanish, UNIX/Linux",
      "Clubs - Computer Science Club (president), GEAR Club",
    ],
  },
  {
    img: "geca.jpg",
    title: "Dr. TJ Owens Gilroy Early College Academy",
    subtitle: ["High School Diploma"],
    date: "Aug 2019 - May 2023",
    description: [
      "GPA - 3.95 (Unweighted), 4.72 (Weighted)",
      "5 AP-level courses, 7 Honors-level courses, 27 College-level courses",
      "National Blue Ribbon School (2022)",
      "Outstanding Student Achievement - Integrated Math 1+, Integrated Math 2+",
      "Clubs - STEM Club, Debate Club, Finance Club, Math Club",
    ],
  },
]

export const experienceData = [
  {
    img: "digitalnest.png",
    title: "Digital NEST",
    subtitle: "Web Development Intern",
    date: "Aug 2023 - present",
    description: [
      "Worked directly with clients to produce, develop, and maintain websites using WordPress, JavaScript, and PHP",
      "Collaborated with frontend developers and UI designers to coordinate web design mockups in Figma and implement Github CI/CD pipelines",
      "Re-designed TedxSantaCruz website to dynamically display speakers and volunteers using WordPress ACF",
    ],
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
    date: "Jun - Sep 2023",
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
  {
    img: "gilroy-hacks.png",
    title: "Gilroy Hacks",
    subtitle: "Co-Founder, Event Director",
    date: "Jan 2022 - Jun 2023",
    description: [
      "Managed event logistics and coordinated outreach for 2 hackathons that served 50+ local students",
      "Registered organization as a 501(c)(3) nonprofit under Hack Club in order to collect tax-deductible donations and facilitate purchases",
      "Led 25+ meetings and raised over $2,000 in funding to buy prizes, food, and swag",
      "Designed website from scratch using HTML, CSS, and JS",
      "Totaled 150+ volunteer hours",
    ],
    link: [
      {
        name: "Website",
        url: "https://gilroyhacks.com/",
      },
      {
        name: "Bank Account",
        url: "https://bank.hackclub.com/gilroy-hacks",
      },
      {
        name: "Budget",
        url: "https://docs.google.com/spreadsheets/d/1y-clzD7EaTE_OGFx0K5pHwPU3JDCI2Ze8RC6oQMtVhU/edit#gid=1732160294",
      },
    ],
  },
  {
    img: "youth-commission.png",
    title: "Gilroy Youth Commission",
    subtitle: "Youth Commissioner",
    date: "Oct 2022 - Jun 2023",
    description: [
      "Actively planned and discussed 5+ youth community events serving 300+ total youth across Gilroy",
      "Created a work schedule for the commission, provided feedback and suggestions for future events",
      "Totaled 30+ volunteer hours",
    ],
    link: [
      {
        name: "Website",
        url: "https://www.cityofgilroy.org/310/Youth-Commission",
      },
    ],
  },
  {
    img: "gavilan-summer-internship.png",
    title: "Gavilan College Summer Internship",
    subtitle: "Summer Research Intern",
    date: "Jun - Aug 2022",
    description: [
      "Physical analysis of water-powered rockets, advised by Dr. Sewan Fan (Gavilan Physics Dept.)",
      "Constructed a water-powered rocket that saves custom Arduino accelerometer circuit data in order to analyze changes in temperature, height, and pressure",
      "Attended meetings every Friday for 3 hours to discuss findings and work on rocket launches, programming, and soldering",
    ],
    link: [
      {
        name: "Poster Summary",
        url: "https://nextcloud.andrewkdinh.com/s/3JKxDdw9NeM234r",
      },
    ],
  },
  {
    img: "gilroy-gardens.png",
    title: "Gilroy Gardens",
    subtitle: "Foods & Merch Associate",
    date: "Sep - Dec 2021",
    description: [
      "Worked as a Foods Associate at Castroville Corners (South Side)",
      "Worked as a Sales Associate at Halls (South Side), Green Barn (North Side), Rose Horse (South Side), Scooter Bug (South Side)",
      "Gained cashier and customer service experience as well as assisted in managing shifts and logistics",
    ],
    link: [
      {
        name: "Website",
        url: "https://www.gilroygardens.org/",
      },
    ],
  },
]

export const projectData = [
  {
    title: "ASL Hand Recognition App",
    url: "https://jamesvdinh.github.io/asl-app/",
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
      "A web application that assists Deaf/Hard of Hearing individuals in learning American Sign Language (ASL). Utilized MediaPipe and TensorFlow to train a model using a dataset of 87,000 images from the NIDCD. Implemented model in a JavaScript environment to recognize ASL letters from a computer webcam. Frontend- JavaScript, HTML/CSS. Backend- TensorFlow, MediaPipe, Python.",
    link: [
      {
        name: "Demo",
        url: "https://jamesvdinh.github.io/",
        size: 22,
      },
      {
        name: "GitHub",
        url: "https://github.com/jamesvdinh/jamesvdinh.github.io",
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
    title: "BlueParkRX Dynamic Map",
    url: "https://parkrxmontereycounty.org/#parks",
    subtitle: "Custom-coded Map with Proximity and Filter Functionality",
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
      "A custom map that displays park information and allows Monterey Park residents to search parks in a radius, by name, by hours, alphabetically, by park features, and give public transit routes. Frontend- JavaScript, HTML/CSS, WordPress. Backend- PHP, jQuery, Fetch API",
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
    title: "Project Development Search Tool",
    url: "https://www.shapesv.org/projects",
    subtitle: "Dynamic Search Menu using Fetch API and JS",
    tags: ["Wix", "Velo", "HTML/CSS", "JavaScript"],
    img: ["catalyzesv-1.png"],
    description:
      "A search tool designed for users to specify filters and display a list of queried projects for Shape SV. Used GET fetch to retrieve data from Google Sheets database to display list of dynamic projects using iframe. Frontend- JavaScript, HTML/CSS, Wix. Backend- Fetch API.",
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
    tags: ["Flask API", "Python", "React", "JavaScript"],
    img: ["roomie-finder.png"],
    description:
      "An app that takes user-input criteria and outputs potential roomates that closely matches that criteria using a scoring-based algorithm. Team submission for DA Hacks 2023. Frontend- React, Javascript. Backend- Flask API, Python, Fetch API.",
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
