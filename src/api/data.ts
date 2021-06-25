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

export const SKILL_GROUPS_STRUCTURE: SkillGroup[] = [
  SKILL_GROUP_LANGUAGES,
  SKILL_GROUP_FRAMEWORKS,
  SKILL_GROUP_ENGINEERING,
  SKILL_GROUP_DATABASES,
  SKILL_GROUP_CLOUD
]