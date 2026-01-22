export interface ProjectContext {
  period: string;
  framework: string;
  mode: string;
  team: string[];
  organization: string[];
  stack: string[];
}

export interface ObjectiveSection {
  title?: string;
  items: string[];
}

export interface ProjectPhase {
  title: string;
  description: string;
  achievements: string[];
}

export interface ProjectActor {
  role: string;
  description: string;
}

export interface ProjectResults {
  personal: {
    technical: string[];
    organizational: string[];
    pride: string;
  };
  company: {
    achievements: string[];
    satisfaction: string[];
    impact: string;
  };
}

export interface ProjectFuture {
  immediate: string[];
  midTerm: string[];
  current: string[];
}

export interface Project {
  id: string;
  title: string;
  mainImage: string;
  summary: string;
  tags: string[];
  
  // Présentation
  presentation: string;
  
  // Objectifs & Contexte
  objectives: ObjectiveSection[];
  context: ProjectContext;
  stakes: string[];
  risks: string[];
  
  // Étapes & Réalisations
  phases: ProjectPhase[];
  
  // Acteurs
  actors: ProjectActor[];
  
  // Résultats
  results: ProjectResults;
  
  // Lendemains
  future: ProjectFuture;
  
  // Regard critique
  critique: string[];
  
  // Compétences liées
  skillIds: string[];
}