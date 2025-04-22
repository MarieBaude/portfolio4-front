export interface Skill {
  id: number;
  title: string;
  type: "tech" | "non-tech";
  icon: string;
  level: number;
  color: string;
}