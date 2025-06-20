/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lokesh Gaur",
  title: "Hi all, I'm Lokesh",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 having an hands on in Machine Learning"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ntPTJihqmaydjmpE15ihPRvdh5dyZpsz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gaur8126",
  linkedin: "https://www.linkedin.com/in/lokesh-178081277/",
  gmail: "gaurlokesh1211@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@gaurlokesh1211",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY DATA 'SCIENTIST AND AI ENTHUSIAST' WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Continuously learning and exploring the latest advancements in AI and Data Science"
    )
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as AWS"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      // fontAwesomeClassname: "fab fa-python"
      image: "https://icon.icepanel.io/Technology/svg/Python.svg"
    },
    // {
    //   skillName: "Java",
    //   // fontAwesomeClassname: "fab fa-python"
    //   image: "https://icon.icepanel.io/Technology/svg/Java.svg"
    // },
    // {
    //   skillName: "HTML-5",
    //   // fontAwesomeClassname: "fab fa-python"
    //   image: "https://icon.icepanel.io/Technology/svg/HTML5.svg"
    // },
    // {
    //   skillName: "CSS3",
    //   // fontAwesomeClassname: "fab fa-python"
    //   image: "https://icon.icepanel.io/Technology/svg/CSS3.svg"
    // },
    {
      skillName: "sklearn",
      // fontAwesomeClassname: "fab fa-scikit-learn"
      image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg"
    },
    {
      skillName: "Matplotlib",
      // fontAwesomeClassname: "fab fa-scikit-learn"
      image: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg"
    },
    {
      skillName: "Seaborn",
      // fontAwesomeClassname: "fab fa-scikit-learn"
      image:
        "https://vectorseek.com/wp-content/uploads/2023/12/seaborn-Logo-Vector.svg-.png"
    },
    {
      skillName: "pytorch",
      // fontAwesomeClassname: "fab fa-sass"
      image: "https://icon.icepanel.io/Technology/svg/PyTorch.svg"
    },
    {
      skillName: "Tensorflow",
      // fontAwesomeClassname: "fab fa-js"
      image: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg"
    },
    {
      skillName: "github actions",
      // fontAwesomeClassname: "fab fa-react"
      image: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg"
    },
    {
      skillName: "GitHub",
      // fontAwesomeClassname: "fab fa-node"
      image: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png"
    },
    {
      skillName: "MySQL",
      // fontAwesomeClassname: "fab fa-swift"
      image: "https://icon.icepanel.io/Technology/svg/MySQL.svg"
    },
    // {
    //   skillName: "Apache Airflow",
    //   // fontAwesomeClassname: "fab fa-npm"
    //   image: "https://icon.icepanel.io/Technology/svg/Apache-Airflow.svg"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "aws",
      // fontAwesomeClassname: "fab fa-aws"
      image: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png"
    },
    {
      skillName: "docker",
      // fontAwesomeClassname: "fab fa-docker"
      image: "https://icon.icepanel.io/Technology/svg/Docker.svg"
    },
    {
      skillName: "flask",
      // fontAwesomeClassname: "fas fa-"
      image: "https://icon.icepanel.io/Technology/png-shadow-512/Flask.png"
    },
    // {
    //   skillName: "FastAPI",
    //   // fontAwesomeClassname: "fab fa-git"
    //   image: "https://icon.icepanel.io/Technology/svg/FastAPI.svg"
    // },
    // {
    //   skillName: "Streamlit",
    //   // fontAwesomeClassname: "fab fa-git"
    //   image: "https://icon.icepanel.io/Technology/svg/Streamlit.svg"
    // },
    // {
    //   skillName: "Django",
    //   // fontAwesomeClassname: "fab fa-git"
    //   image: "https://icon.icepanel.io/Technology/png-shadow-512/Django.png"
    // },
    {
      skillName: "Power bi",
      // fontAwesomeClassname: "fab fa-git"
      image:
        "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dayalbagh Education Institute",
      logo: require("./assets/images/Dayalbagh_Educational-0a268d.jpg"),
      subHeader: "Bachelor's of Vocation in AI & ROBOTICS",
      duration: "September 2023 - April 2026",
      grade: "7.6/10 CGPA",
      location: "Agra, Uttar Pradesh, India"

      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Shri Ratan Singh Inter College",
      logo: require("./assets/images/2952255-1596418545753-f010c4f51246d.jpg"),
      subHeader: "Intermediate",
      duration: "April 2022 - April 2023",
      grade: "85.6 %",
      location: "Kiraoli, Agra"
      // desc: "Ranked 1 in the college",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer Intern",
      company: "igniis",
      companylogo: require("./assets/images/ignis.png"),
      date: "May 2025 – July 2025"
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Build A Thon (A Four Day Workshop On Arduino And Hackathon)",
      subtitle:
        "Selected as the top 3 out of 15 teams. Developed an AI-POWERED sign language detection system using Arduino and Teachable Machine as part of a team project",

      image: require("./assets/images/Dayalbagh_Educational-0a268d.jpg"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1FNvNRvIIcVnpQbVa5k2WcI4a4KuQwcqh/view?usp=sharing"
        }
      ]
    },
    {
      title: "DATA SCIENCE MASTERS 2.0",
      subtitle:
        "Exploratory Data Analysis, Statistics, Machine Learning basics using Python (Pandas, NumPy, scikit-learn), Deep Learning and NLP",
      image: require("./assets/images/pw.png"),
      imageAlt: "PW Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1B-M21Uks2XldRyVWn7uKApn5Yem00yma/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Mathematics-Basics to Advance for Data Science and GenAI",
      subtitle:
        "Learned about Linear Algebra, Calculus, Statisticsa and Probability",

      image: require("./assets/images/udemy.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cqjIm4UcVvERkPc9cGyCyU8Gkhks443O/view?usp=sharing"
        }
      ]
    },

    {
      title: "Ultimate Web Scraping for Data Science",
      subtitle:
        "Learned how to extract and process data from websites using Python libraries like BeautifulSoup, Selenium, and Scrapy. Focused on handling dynamic content, pagination, and storing data for data science workflows.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wCcAumCBOjb_HqqLz1oh3LHjv1WE0SXO/view?usp=sharing"
        }
        // {
        //   name: "Final Project",
        //   url: ""
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      // title: "Build Actions For Google Assistant",
      // subtitle: "Codelab at GDG DevFest Karachi 2019",
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "gaurlokesh1211@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
