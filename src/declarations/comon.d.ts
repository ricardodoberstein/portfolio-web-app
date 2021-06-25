declare type SkillGroup = {
  name: string;
  skills: Skill[]
}

declare type Skill = {
  name: string;
  progress: number;
  leveling: boolean;
}