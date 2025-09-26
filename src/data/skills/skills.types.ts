export interface Skill {
  id: string;
  title: string;
  type: "tech" | "non-tech";
  icon: string;
  level: number;
  color: string;
  def: string;
  crit: string[];
  evol: string;
  projectIds: number[];
}
