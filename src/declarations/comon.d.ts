declare type SkillGroup = {
  name: string;
  skills: Skill[]
}

declare type Skill = {
  name: string;
  progress: number;
  leveling: boolean;
}

declare type Project = {
  logo: string;
  overview: string;
  company: string;
  companyUrl: string;
  platforms: string[]
  title: string;
  private: boolean;
  github: string;
  technologies: string[];
  role: string;
  url: string;
  active: boolean;
}