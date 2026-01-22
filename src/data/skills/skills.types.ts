export interface ProjectProof {
  projectId: number;
  title: string;
  description: string;
  achievements: string[];
  conclusion: string;
}

export interface ProjectURL {
  title: string;
  url?: string; 
}

export interface Skill {
  id: string;
  title: string;
  type: "tech" | "non-tech";
  icon: string;
  level: number;
  color: string;
  def: string;
  proofs: ProjectProof[];
  crit: {
    paragraphs: string[];
    advice: string[];
  };
  evol: {
    text: string;
    roadmap: string[];
  };
  project: ProjectURL[];
}