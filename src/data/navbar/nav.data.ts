import { Skill } from "../skills/skills.types";
import { SKILLS_DATA } from "../skills/skills.data";
import { SubMenuData } from "./nav.types";

const getUniqueCategories = (skills: Skill[]): string[] => {
  const categories = new Set<string>();
  skills.forEach((skill) => categories.add(skill.type));
  return Array.from(categories);
};

export const NAV_DATA: SubMenuData[] = [
  {
    mainLink: { path: "/", label: "Accueil" },
    subLinks: [],
  },
  {
    mainLink: { path: "/about", label: "A propos" },
    subLinks: [],
  },
  {
    mainLink: { path: "/skills", label: "Compétences" },
    subLinks: getUniqueCategories(SKILLS_DATA).map((type) => ({
      path: `/skills/${type}`,
      label: type === "tech" ? "Techniques" : "Non Techniques",
    })),
  },
  {
    mainLink: { path: "/projects", label: "Projets" },
    subLinks: [
      { path: "/projects/web", label: "Projets Web" },
      { path: "/projects/mobile", label: "Applications Mobile" },
      { path: "/projects/open-source", label: "Open Source" },
    ],
  },
  {
    mainLink: { path: "/experience", label: "Parcours" },
    subLinks: [],
  },
];
