export const skillLevel = {
  level_1: "Beginer",
  level_2: "Intermediate",
  level_3: "Advanced",
}

type SkillLevelKeyType = keyof typeof skillLevel
export type SkillLevelValueType = (typeof skillLevel)[SkillLevelKeyType]

// experience in months
export const programingSkills = [
  {
    skill: "Javascript",
    level: skillLevel.level_3,
    experience: 16,
  },
  {
    skill: "Typescript",
    level: skillLevel.level_3,
    experience: 16,
  },
]

export const frontendSkills = [
  {
    skill: "React.js",
    level: skillLevel.level_3,
    experience: 16,
  },
  {
    skill: "Vue.js",
    level: skillLevel.level_1,
    experience: 1,
  },
  {
    skill: "Electron.js",
    level: skillLevel.level_1,
    experience: 1,
  },
  // {
  //   skill: "React Native",
  //   level: skillLevel.l1,
  //   experience: 2,
  // },
  // {
  //   skill: "Next.js",
  //   level: skillLevel.l1,
  //   experience: 2,
  // },
  {
    skill: "HTML5",
    level: skillLevel.level_3,
    experience: 16,
  },
  {
    skill: "CSS3",
    level: skillLevel.level_3,
    experience: 16,
  },
]

export const backendSkills = [
  {
    skill: "Node.Js",
    level: skillLevel.level_2,
    experience: 16,
  },
  {
    skill: "Express",
    level: skillLevel.level_2,
    experience: 16,
  },
]

export const libraryKnown = [
  {
    skill: "Redux",
    level: skillLevel.level_2,
  },
  {
    skill: "React Router",
    level: skillLevel.level_3,
  },
  {
    skill: "Axios",
    level: skillLevel.level_2,
  },
  {
    skill: "Lerna",
    level: skillLevel.level_2,
  },
  {
    skill: "Material UI",
    level: skillLevel.level_2,
  },
]

export const databaseSkills = [
  {
    skill: "Firebase",
    level: skillLevel.level_2,
    experience: 16,
  },
  // {
  //   skill: "MongoDb",
  //   level: skillLevel.l1,
  //   experience: 1,
  // },
]

export const testingFramework = [
  {
    skill: "Jest",
    level: skillLevel.level_2,
    experience: 4,
  },
  {
    skill: "Selenium using JS",
    level: skillLevel.level_1,
    experience: 1,
  },
]

export const devToolsSkills = [
  {
    skill: "VS Code",
  },
  {
    skill: "Jira",
  },
  {
    skill: "Postman",
  },
  {
    skill: "Redmine",
  },
  {
    skill: "Git & Github",
  },
  {
    skill: "Slack",
  },
]

export const notInTouch = [
  {
    skill: "Next.Js",
  },
  {
    skill: "MongoDB",
  },
  {
    skill: "Wordpress",
  },
  {
    skill: "postgres",
  },
]
