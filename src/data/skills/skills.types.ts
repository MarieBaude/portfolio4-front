export interface Skill {
  id: number;
  title: string;
  type: "tech" | "non-tech";
  icon: string;
  level: number;
  color: string;
  def: string;
  crit: string;
  evol: string;
  projectIds: number[];
}
