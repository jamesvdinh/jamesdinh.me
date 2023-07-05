export const menuData = [
    {title: "Education", link: "/#education"},
    {title: "Experience", link: "/#experience"},
    {title: "Projects", link: "/#projects"},
    {title: "Distinctions", link: "/#distinctions"},
    {title: "Skills", link: "/#skills"},
]

export const educationData = [
    {
        img: "gavilan.png",
        title: "Gavilan College",
        subtitle: [
            "A.S. in Computer Programming",
            "A.A. in Natural Science Emphasis",
            "A.A. in Multiple Subjects Emphasis"
        ],
        date: "Aug 2019 - May 2023",
        description: [
            "GPA - 3.95",
            "Dual Enrollment while in High School",
            "Coursework - Art, C#, C++, Calculus, Discrete Structures, General Chemistry, HTML, Human Anatomy & Physiology, Humanities, Java, Photoshop, Physics, Psychology, Public Speaking, Python, Spanish, UNIX/Linux",
            "Clubs - Computer Science Club, GEAR Club"
        ]
    },
    {
        img: "geca.jpg",
        title: "Dr. TJ Owens Gilroy Early College Academy",
        subtitle: [
            "High School Diploma"
        ],
        date: "Aug 2019 - May 2023",
        description: [
            "GPA - 3.95 (Unweighted), 4.72 (Weighted)",
            "5 AP-level courses, 7 Honors-level courses, 27 College-level courses",
            "National Blue Ribbon School (2022)",
            "Outstanding Student Achievement - Integrated Math 1+, Integrated Math 2+",
            "Clubs - STEM Club, Debate Club, Finance Club, Math Club"
        ]
    }
]

export const experienceData = [
    {
        img: "gilroy-hacks.png",
        title: "Gilroy Hacks",
        subtitle: "Co-Founder, Event Director",
        date: "Jan 2022 - Jun 2023",
        description: [
            "Managed event logistics and coordinated outreach for 2 community hackathons that served 50+ local students",
            "Led 25+ meetings and raised over $2,000 in funding to buy prizes, food, and swag",
            "Secured venue; facilitated tech resources, outreach, and marketing",
            "Designed website from scratch using HTML, CSS, and JS",
            "Totaled 150+ volunteer hours"
        ],
        link: [
            {
                name: "Website",
                url: "https://gilroyhacks.com/"
            },
            {
                name: "Bank Account",
                url: "https://bank.hackclub.com/gilroy-hacks"
            },
            {
                name: "Budget",
                url: "https://docs.google.com/spreadsheets/d/1y-clzD7EaTE_OGFx0K5pHwPU3JDCI2Ze8RC6oQMtVhU/edit#gid=1732160294"
            }
        ]
    },
    {
        img: "youth-commission.png",
        title: "Gilroy Youth Commission",
        subtitle: "Youth Commissioner",
        date: "Oct 2022 - Jun 2023",
        description: [
            "Actively planned and discussed 5+ youth community events serving 300+ total youth across Gilroy",
            "Created a work schedule for the commission, provided feedback and suggestions for future events",
            "Coordinated Gilroy Hacks Hackathon, Royal Red Carpet, Youth Commission Retreat Event, and Community PotLuck",
            "Attended 5+ community events",
            "Totaled 30+ volunteer hours"
        ],
        link: [
            {
                name: "Website",
                url: "https://www.cityofgilroy.org/310/Youth-Commission"
            },
        ]
    },
    {
        img: "tutor.png",
        title: "Private Tutoring",
        subtitle: "Commissioned Weekly Tutoring",
        date: "Sep - Dec 2022",
        description: [
            "Mentored 5+ tutees in all areas and subjects of school, including Math, English, Chemistry, Biology",
            "Planned 4-year college plans by providing insight on classes and degree programs",
            "Connected students to extracurricular activities for internships and community service",
            "Totaled 20+ volunteer hours"
        ],
        link: []
    },
    {
        img: "gavilan-summer-internship.png",
        title: "Gavilan College Summer Internship",
        subtitle: "Research Intern",
        date: "June - Aug 2022",
        description: [
            "Physical analysis of water-powered rockets, advised by Dr. Sewan Fan (Gavilan Physics Dept.)",
            "Constructed a water-powered rocket that saves custom Arduino accelerometer circuit data in order to analyze changes in temperature, height, and pressure",
            "Attended meetings every Friday for 3 hours to discuss findings and work on rocket launches, programming, and soldering"
        ],
        link: [
            {
                name: "Poster Summary",
                url: "https://nextcloud.andrewkdinh.com/s/3JKxDdw9NeM234r"
            }
        ]
    },
    {
        img: "gilroy-gardens.png",
        title: "Gilroy Gardens",
        subtitle: "Foods & Merch Associate",
        date: "Sep - Dec 2021",
        description: [
            "Worked as a Foods Associate at Castroville Corners (South Side)",
            "Worked as a Sales Associate at Halls (South Side), Green Barn (North Side), Rose Horse (South Side), Scooter Bug (South Side)",
            "Gained cashier and customer service experience as well as assisted in managing shifts and logistics"
        ],
        link: [
            {
                name: "Website",
                url: "https://www.gilroygardens.org/"
            },
        ]
    }
]

export const projectData = [
    {
        title: "ASL Hand Recognition App",
        url: "https://jamesvdinh.github.io/",
        date: "2023",
        tags: [
            "Jupyter Notebook",
            "MediaPipe",
            "OpenCV",
            "Python",
            "TensorFlow"
        ],
        img: [
            "asl-pic-1.png",
            "asl-pic-2.jpg",
        ],
        description: "A web application that assists Deaf/Hard of Hearing individuals in learning American Sign Language (or ASL). Utilized MediaPipe and TensorFlow to train a model using a dataset of 87,000 images from the NIDCD. Implemented a TensorFlow model to recognize ASL letters from a computer webcam",
        link: [
            {
                name: "Demo",
                url: "https://jamesvdinh.github.io/",
            },
            {
                name: "GitHub",
                url: "https://github.com/jamesvdinh/jamesvdinh.github.io",
            },
            {
                name: "Research Paper",
                url: "https://docs.google.com/document/d/1g73K_jQwfBhyOlLoQQG9i2JNmKlebSzt9dzH-WRfLMQ/edit?usp=sharing",
            },
            {
                name: "Slides Presentation",
                url: "https://docs.google.com/presentation/d/1s4tyiZyS0UuMa0Vl-X4qmB4Aot7Keay6WYfPSoVRJEA/edit?usp=sharing",
            }
        ]
    },
    {
        title: "Principal Component Analysis Research Project",
        url: "https://github.com/jamesvdinh/PCA",
        date: "2021",
        tags: [
            "MatPlotLib",
            "Python"  
        ],
        img: [
            "pca-2.png",
            "pca-1.png",
        ],
        description: "A mathematical concept explanation on Principal Component Analysis (PCA), advised by Professor El Ghaoui (UC Berkeley EECS Dept.). Authored a concise article that explains the concept of PCA and examples of real-world applications. Created a program that calculated and plotted vector projections by using Python and Matplotlib",
        link: [
            {
                name: "GitHub",
                url: "https://github.com/jamesvdinh/PCA",
            }
        ]
    },
    {
        title: "Custom Arduino Accelerometer",
        url: "https://nextcloud.andrewkdinh.com/s/3JKxDdw9NeM234r",
        date: "2022",
        tags: [
            "Arduino",
            "TinyDuino",
            "C++"
        ],
        img: [
            "internship-1.jpg",
            "internship-2.jpg",
        ],
        description: "Physics and Arduino Programming Internship, advised by Dr. Sewan Fan (Gavilan Physics Dept.). Constructed a water-powered rocket that saves custom Arduino accelerometer circuit data in order to analyze changes in temperature, height, and pressure",
        link: [
            {
                name: "Poster Summary",
                url: "https://nextcloud.andrewkdinh.com/s/3JKxDdw9NeM234r",
            }
        ]
    },
    {
        title: "2020 Vision",
        url: "https://github.com/jamesvdinh/2020-Vision",
        date: "2020",
        tags: [
            "C++"
        ],
        img: [
            "2020vision.png"
        ],
        description: "A program that can provide informative and detailed information on the most recent COVID-19 statistics while providing assessment results on COVID safety.",
        link: [
            {
                name: "GitHub",
                url: "https://github.com/jamesvdinh/2020-Vision",
            }
        ]
    },
    {
        title: "Glutamate",
        url: "https://github.com/jamesvdinh/Glutamate",
        date: "2021",
        tags: [
            "C#",
            ".NET"
        ],
        img: [
            "glutamate.png"
        ],
        description: "A flashcard creator and template app, useful for students wanting an easy and simple way of creating flashcards for studying.",
        link: [
            {
                name: "GitHub",
                url: "https://github.com/jamesvdinh/Glutamate",
            }
        ]
    }
]