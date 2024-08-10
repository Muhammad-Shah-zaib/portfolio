export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
}

export interface ProjectData {
  name: string;
  description: string;
  techStack: TechStack;
  githubRepoLink: string;
  imagePath?: string;
}

export interface ProjectCollection {
  nfrw: ProjectData;
  noteboard: ProjectData;
}
