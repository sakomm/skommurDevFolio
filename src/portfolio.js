/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2100 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saianurag Kommuri",
  // title: "Hi all, I'm Saad",
  title: emoji("Hello Everyone!, I'm Sai"),
  subTitle: emoji(
    "I am a Computer Science Student 💻 at George Mason University, I am also pursuing a minor in Computational Data Science. I am passionate about building cool applications and solving problems. I love robotics and creating web applications. I am also a big fan of the latest tech and I am always trying to learn new things. I hope you enjoy my portfolio! 😊"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18GqiuPe4Rg8P4LfktmlmIH9n07bm07hU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sakomm",
  linkedin: "https://www.linkedin.com/in/skommur/",
  gmail: "sakommuri@gmail.com",
  gitlab: "https://git.gmu.edu/skommur/",
  instagram: "https://www.instagram.com/skommur/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I would love to work and further my passion for robotics and software development. Secure a challenging and exciting internship to broaden my technical abilities and further develop my skills in the field of software development. I would love to make contributions that will create a positive impact on the world.",
  skills: [
    emoji(
      "Driven to learn and constantly improving my skills in the field of software development."
    ),
    emoji("Working with a team to create a product."),
    emoji(
      "Having a strong work ethic and a positive attitude towards the work I do."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Mason University",
      logo: require("./assets/images/GMU-Featured-Image.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "Graduated May 2023",
      desc: "Junior, Year 3",
      descBullets: [
        "GPA: 3.41/4.0",
        "Dean's List",
        "Pursuing a minor in Computational Data Science"
      ]
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
      Stack: "Java",
      progressPercentage: "88%"
    },
    {
      Stack: "C",
      progressPercentage: "82%"
    },
    {
      Stack: "JavaScript",
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
      role: "Summer Research Intern",
      company: "Office of Revenue Analysis",
      companylogo: require("./assets/images/ora.png"),
      date: "June 2018 – August 2018",
      desc: "Devoloped tools for the Office of Revenue Analysis to improve their efficiency and accuracy.",
      descBullets: [
        "Researched the effects of new construction and renovations on the existing market using market data and tax information.",
        "Assisted in web scraping and data gathering for other projects using Python and SQL Enterprise."
      ]
    },
    {

      role: "IT Analyst Intern",
      company: "American Association of Medical Colleges",
      companylogo: require("./assets/images/AAMC.png"),
      date: "May 2021 – September 2021",
      desc: "Completed a summer internship in the IT department of the AAMC.",
      descBullets: [
        "Wrote reports analyzing licensing costs of MFA applications to reduce budget expenditures.",
        "Assisted in the AWS migration and training. Was responsible for ensuring smooth migration for teams."
      ]
    },
    {
      
      role: "Tutor",
      company: "Coherence Learning",
      companylogo: require("./assets/images/Coherence.jpg"),
      date: "January 2019 – Present",
      desc: "Work part time as a tutor for students in the Coherence Learning program.",
      descBullets: [
        "Developed a Intro to Programming course for students as a tutor.",
        "Taught students mathetics from Algebra to Multivariable Calculus."
      ] 
    }
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
  title: "Projects",
  subtitle: "Some of my favorite projects I have worked on", 
  projects: [
    {
      image: require("./assets/images/pokemon.png"),
      projectName: "Pokemon Dashboard",
      projectDesc: "A website that allows you to compare the stats of Pokémon's by type allowing analysis by Attack VS Defense and HP. Built with HTML, CSS, JavaScript, and Bootstrap. It has interactive graph elements that support full user interaction. The page is responsive and works on mobile devices and tablets. I learned how to use the Bootstrap framework and how to create a responsive website. I also learned how to use the JavaScript framework to create interactive elements. ", 
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sakomm.github.io/pokemon_website/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fitness.png"),
      projectName: "Fitness Assistant -- Plank!",
      projectDesc: "Track human body movement using computer vision to determine and assist in exercises. This program can view and understand Human Body positoin with a strong degree of confidence even without a perfect head on view. It can also assist in the execution of exercises. Built with python and opencv and mediapipe. I learned how to use the opencv library to analyze images and use the mediapipe framework to assist in the execution of exercises. Implementing Heroku and AWS will allow the program to be deployed to the cloud.",
      footerLink: [
        {
          name: "Vist the repo",
          url: "https://github.com/sakomm/FitnessTrainer"
        }
      ]
    },
    {
      image: require("./assets/images/beach.jpg"),
      projectName: "Paradise Springs",
      projectDesc: "Are you tired of searching multiple sites and having hundreds of tabs open to find one vacation rental? Our website searches for you, compiling all the available rooms or houses for you to easily browse. We have tools for you to measure the safety of areas so you can feel secure in your choice, rank based on distance, number of rooms, closest attractions, and others. Built with React and using the MVC architecture to create a single page application. I learned valuble skills about working in a team and working using agile methodologies.",
      footerLink: [
        {
          name: "Visit the repo",
          url: "https://github.com/sakomm/Paradise_springs" // change when website is live
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you want to get in touch with me just send me an email or you can message me at the contact info below",
  number: "571-337-2769",
  email_address: "sakommuri@gmail.com"
};


//One of the largest considerations we need to be making while developing this site is load times which has been speed. This has been a decision we have kept in the foreground when designing the site. We have designed the systems scraping to reduce intial latency and also to reduce the number of requests we make to the server. To that measure 


// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
