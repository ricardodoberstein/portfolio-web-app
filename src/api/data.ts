export const SKILL_GROUP_LANGUAGES: SkillGroup = {
  name: "Languages",
  skills: [
    {
      name: "Typescript",
      progress: 0.9,
      leveling: true
    },
    {
      name: "NodeJS",
      progress: 0.7,
      leveling: true
    },
    {
      name: "C#",
      progress: 0.5,
      leveling: true
    },
    {
      name: "Java",
      progress: 0.4,
      leveling: true
    },
    {
      name: "C++",
      progress: 0.2,
      leveling: false
    },
    {
      name: "Python",
      progress: 0.1,
      leveling: false
    },
    {
      name: "C",
      progress: 0.1,
      leveling: false
    },
  ]
}

export const SKILL_GROUP_FRAMEWORKS: SkillGroup = {
  name: "Frameworks",
  skills: [
    {
      name: "ReactJS",
      progress: 0.9,
      leveling: true
    },
    {
      name: "Serverless",
      progress: 0.7,
      leveling: true
    },
    {
      name: "React Native",
      progress: 0.5,
      leveling: false
    },
    {
      name: "Unity",
      progress: 0.4,
      leveling: true
    },
    {
      name: "VueJS",
      progress: 0.2,
      leveling: false
    },
    {
      name: "QT",
      progress: 0.1,
      leveling: false
    },
  ]
}

export const SKILL_GROUP_ENGINEERING: SkillGroup = {
  name: "Engineering",
  skills: [
    {
      name: "Frontend",
      progress: 0.8,
      leveling: true
    },
    {
      name: "Backend",
      progress: 0.5,
      leveling: true
    },
    {
      name: "Game Development",
      progress: 0.3,
      leveling: true
    },
    {
      name: "Android Native",
      progress: 0.3,
      leveling: false
    },
    {
      name: "Desktop",
      progress: 0.3,
      leveling: false
    },
    {
      name: "DevOps",
      progress: 0.2,
      leveling: true
    }
  ]
}

export const SKILL_GROUP_DATABASES: SkillGroup = {
  name: "Databases",
  skills: [
    {
      name: "MySQL",
      progress: 0.7,
      leveling: false
    },
    {
      name: "DynamoDB",
      progress: 0.7,
      leveling: true
    },
    {
      name: "MongoDB",
      progress: 0.3,
      leveling: false
    },
  ]
}

export const SKILL_GROUP_CLOUD: SkillGroup = {
  name: "Cloud Providers",
  skills: [
    {
      name: "AWS",
      progress: 0.7,
      leveling: true
    },
    {
      name: "Google Cloud",
      progress: 0.1,
      leveling: false
    },
    {
      name: "Azure",
      progress: 0.1,
      leveling: false
    },
    {
      name: "Heroku",
      progress: 0.1,
      leveling: false
    }
  ]
}

export const SKILL_GROUP_OPERATING_SYSTEMS: SkillGroup = {
  name: "Operating Systems",
  skills: [
    {
      name: "Ubuntu",
      progress: 0.8,
      leveling: true
    },
    {
      name: "Windows",
      progress: 0.7,
      leveling: true
    },
    {
      name: "MacOS",
      progress: 0.3,
      leveling: false
    },
  ]
}

export const SKILL_GROUP_PERSONAL: SkillGroup = {
  name: "Personal",
  skills: [
    {
      name: "Solo Development",
      progress: 1,
      leveling: true
    },
    {
      name: "Fast Learner",
      progress: 0.9,
      leveling: true
    },
    {
      name: "Teamwork",
      progress: 0.7,
      leveling: true
    },
    {
      name: "Communication",
      progress: 0.6,
      leveling: true
    },
    {
      name: "Teaching",
      progress: 0.5,
      leveling: true
    },
  ]
}

export const ANGEL_APP_PROJECT: Project = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
  overview: "Angel App was a social project desgined to help female workers to setup voice call alarms to their phones. The user could sign up and sign into the platform, register a voice command to be the alarm trigger. The App would run in the background when recognized the voice trigger, it would sound a high volume alarm, start recording its suroundings and upload the audio files to the Cloud.",
  company: "OKL Group",
  companyUrl: "https://www.linkedin.com/company/oklgroup",
  platforms: [
    "Android"
  ],
  title: "Angel App",
  private: true,
  github: "-",
  technologies: [
    "Java",
    "Google Speech Recognition"
  ],
  role: "Fullstack Engineer",
  url: "-",
  active: false
}

export const APOCRITA_PROJECT: Project = {
  logo: "https://media-exp3.licdn.com/dms/image/C560BAQH6MC5SDeqUSQ/company-logo_200_200/0/1531512171204?e=1632960000&v=beta&t=tN-L55ct85UNLzZE6l4WnTQavLY_zQp2ORo8iTrggs0",
  overview: "Apocrita is a Blockchain based authentication system, it was used to reduce costs of file access management for companies. It used Blockchain to get a near free infrastructure. It was developed to be used as a browser plugin to have all users helping maintain the system online.",
  company: "Block Systems",
  companyUrl: "https://www.linkedin.com/company/blocksystems/",
  platforms: [
    "Android",
    "Web"
  ],
  title: "Apocrita",
  private: true,
  github: "-",
  technologies: [
    "Java",
    "Javascript",
    "HTML",
    "CSS"
  ],
  role: "I worked on Apocrita App for Native Android. I also worked on developing our Javascript Blockchain.",
  url: "-",
  active: false
}

export const GRABANGO_PROJECT: Project = {
  logo: "https://unity3d.com/profiles/unity3d/themes/unity/images/pages/branding_trademarks/unity-tab-square-black.png",
  overview: "This desktop application was used to prepare and plan instalation of many cameras using AI to evaluate certain behaviours of shoppers within stores, the user would load 3D models of the store and then place cameras from all angles to get the best coverage and also plan wiring of cables.",
  company: "NDA",
  companyUrl: "NDA",
  platforms: [
    "MacOS",
    "Windows",
    "Linux"
  ],
  title: "Shop Planner",
  private: true,
  github: "NDA",
  technologies: [
    "C#",
    "Unity",
    "C++"
  ],
  role: "Unity Engineer",
  url: "NDA",
  active: false
}

export const GAD_PROJECT: Project = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png",
  overview: "This was an social app designed to make users feed the system with information about disasters around the world, the app would help the users locate in real time disasters nearby that they could help with either labor or donations.",
  company: "NDA",
  companyUrl: "NDA",
  platforms: [
    "Android",
    "iOS"
  ],
  title: "Disaster Tracking App",
  private: true,
  github: "NDA",
  technologies: [
    "React Native",
    "Javascript",
    "Java",
    "Swift",
    "Google Maps API"
  ],
  role: "React Native Engineer",
  url: "NDA",
  active: false
}

export const VELO3D_PROJECT: Project = {
  logo: "https://image.freepik.com/vetores-gratis/desktop-logo-modern-workstation-icone-de-computador_48369-11297.jpg",
  overview: "Embeded UI Widget for an existing system that would transform very large and complex JSON files into human readable tables and allow manipulations and changes. To setup routines and commands to 3D printers.",
  company: "NDA",
  companyUrl: "NDA",
  platforms: [
    "Windows"
  ],
  title: "QT Widget",
  private: true,
  github: "NDA",
  technologies: [
    "C++",
    "QT"
  ],
  role: "C++ Engineer",
  url: "NDA",
  active: false
}

export const LIFEUP_PROJECT: Project = {
  logo: "https://checkup.lifeup.med.br/styles/assets/logo-principal.png",
  overview: "Building a Web App that help doctors create, manage and maintain medical records of patients, display the information on an elegant way and give Doctors advanced functionalities such as AI text detection of exams to quickly add them to the patient's records.",
  company: "Life Up",
  companyUrl: "https://www.facebook.com/lifeup.prevencao/",
  platforms: [
    "Web"
  ],
  title: "Life Up",
  private: true,
  github: "-",
  technologies: [
    "PHP",
    "VueJS",
    "Typescript",
    "Serverless",
    "AWS"
  ],
  role: "Backend Engineer",
  url: "NDA",
  active: true
}

export const FORSIGHT_PROJECT: Project = {
  logo: "https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png",
  overview: "Building a complex Dashboard to let users have control over remote devices, this dashboard contain complex structure of devices based on place and owners, allowing users to control these devices issue comands from the web app and reading Machine Learning output to user friendly presentation and feedback.",
  company: "NDA",
  companyUrl: "NDA",
  platforms: [
    "Web"
  ],
  title: "Camera Dashboard",
  private: true,
  github: "NDA",
  technologies: [
    "React",
    "Typescript",
    "NodeJS",
    "Serverless",
    "AWS"
  ],
  role: "Frontend Engineer",
  url: "NDA",
  active: true
}

export const PROJECTS_STRUCTURE: Project[] = [
  FORSIGHT_PROJECT,
  LIFEUP_PROJECT,
  VELO3D_PROJECT,
  GAD_PROJECT,
  GRABANGO_PROJECT,
  APOCRITA_PROJECT,
  ANGEL_APP_PROJECT
]

export const SKILL_GROUPS_STRUCTURE: SkillGroup[] = [
  SKILL_GROUP_ENGINEERING,
  SKILL_GROUP_LANGUAGES,
  SKILL_GROUP_FRAMEWORKS,
  SKILL_GROUP_DATABASES,
  SKILL_GROUP_CLOUD,
  SKILL_GROUP_OPERATING_SYSTEMS,
  SKILL_GROUP_PERSONAL
]