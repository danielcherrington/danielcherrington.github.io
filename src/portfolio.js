/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Daniel Cherrington",
  logo_name: "Daniel Cherrington",
  nickname: "DC",
  subTitle:
    "An experienced developer who loves to take on new projects that challenge my analytical and technological capacities.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/danielcherrington",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/danielcherrington",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Twitter",
    link: "https://twitter.com/dancherrington",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/daniel-cherrington-19a13226",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  /*
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/14167873/jongi95",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#FE7A16", // Reference https://simpleicons.org/?q=twitter
  },
  */
  {
    name: "Facebook",
    link: "https://www.facebook.com/daniel.cherrington",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dancherrington88/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    /*{
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },*/
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front ends using the latest technologies. ",
        "⚡ Designing and building database schema's to power business workflows",
        "⚡ Creating application backends in PHP and Node",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "zondicons:php-elephant",
          style: {
            color: "#5C2D91",
          },
        },
      ],
    },
    /*{
      title: "App Development",
      fileName: "AndroidImg",
      skills: [
        "⚡ Experience working on Android apps",
        "⚡ Knowledge on several SDKs & APIs",
        "⚡ Deploying Firebase based apps for secure accessing of information from anywhere",
        "⚡ Adapting new Material Design principles for a more refined look",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "mdi:android-studio",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "VS",
          fontAwesomeClassname: "mdi:microsoft-visual-studio",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#02303A",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "ADB",
          fontAwesomeClassname: "ic:outline-adb",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Eclipse",
          fontAwesomeClassname: "simple-icons:eclipseide",
          style: {
            color: "#2C2255",
          },
        },
      ],
    },*/
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Designing the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C/C++/C#",
      progressPercentage: "70%",
    },

    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "85%",
    },
    {
      Stack: "SQL/PLSQL",
      progressPercentage: "90%",
    },
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS",
      progressPercentage: "95%",
    },
    {
      Stack: "Bootstrap",
      progressPercentage: "90%",
    },
    {
      Stack: "PHP",
      progressPercentage: "90%",
    },
    {
      Stack: "Backbone",
      progressPercentage: "65%",
    },
    {
      Stack: "SugarCRM",
      progressPercentage: "100%",
    },
    {
      Stack: "Drupal",
      progressPercentage: "90%",
    },
    {
      Stack: "jQuery",
      progressPercentage: "75%",
    },
    {
      Stack: "React",
      progressPercentage: "65%",
    },
    {
      Stack: "NextJS",
      progressPercentage: "65%",
    },
    {
      Stack: "Twig",
      progressPercentage: "80%",
    },
    {
      Stack: "Symfony",
      progressPercentage: "65%",
    },
    {
      Stack: "Laravel",
      progressPercentage: "65%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Studio", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Microsoft Office",
      progressPercentage: "90%",
    },
    {
      Stack: "Google Docs",
      progressPercentage: "90%",
    },
    {
      Stack: "DBEAVER", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MS SQL Server", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Gitlab", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Github",
      progressPercentage: "70%",
    },
    {
      Stack: "Linux",
      progressPercentage: "90%",
    },
    {
      Stack: "Windows",
      progressPercentage: "90%",
    },
    {
      Stack: "MAC OS",
      progressPercentage: "70%",
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ]
};

const degrees = {
  degrees: [
    {
      title: "Kesgrave Highschool",
      subtitle: "GSCE",
      logo_path: "kesgrave.png",
      alt_name: "GSCe",
      duration: "March 2004 - December 2008",
      cgpa: "N/A",
      descriptions: [
        "⚡ GSCE English, Math & Science",
      ],
      website_link: "https://www.kesgrave.suffolk.sch.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SugarCRM Developer Expert",
      subtitle: "- SugarCRM",
      logo_path: "sugarcrm.jpg",
      certificate_link:
        "",
      alt_name: "Sugar University",
      color_code: "#2A73CC",
    }
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a senior engineer with 20 years experience in web development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        
		    {
          title: "Head of Development",
          company: "enable.services",
          company_url: "https://enable.services",
          logo_path: "legato_logo.png",
          duration: "June 2019 - PRESENT",
          location: "Ipswich, Suffolk",
          description:
            "I lead a small team of developers working on varying projects across the industry",
          color: "#0879bf",
        },
        {
          title: "Senior Developer",
          company: "enable.services",
          company_url: "https://enable.services",
          logo_path: "legato_logo.png",
          duration: "June 2010- June 2019",
          location: "Ipswich, Suffolk",
          description:
            "Senior Developer",
          color: 
          "#0879bf",
        },
        {
          title: "Developer",
          company: "enable.services",
          company_url: "https://enable.services",
          logo_path: "legato_logo.png",
          duration: "June 2004- June 2010",
          location: "Ipswich, Suffolk",
          description:
            "Developer",
          color: 
          "#0879bf",
        },
        
		
      ],
    },
    {
      title: "Internships",
      experiences: []
    },
    {
      title: "Volunteerships",
      experiences: [       
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Alot of my projects are privately owned and hosted on private infrastructure. Please contact me for more details.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Twitter",
    subtitle:
      "Im active on twitter, if you would like to get in contact please send me a DM",
    link: "https://twitter.com/dancherrington",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ipswich Suffolk",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/FoDzVbi1uYUq3fbN9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "On Request",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
