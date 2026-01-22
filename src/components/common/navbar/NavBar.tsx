/**
 * NavBar Component
 * 
 * Main navigation bar component that orchestrates all navigation functionality
 * Uses smaller sub-components for better maintainability and separation of concerns
 */

import "./NavBar.scss";
import NavBarBrand from "./NavBarBrand";
import NavBarHamburger from "./NavBarHamburger";
import NavBarMenu from "./NavBarMenu";
import { useNavBar } from "./useNavBar";

export default function NavBar() {
  const {
    isMenuOpen,
    isSkillsOpen,
    isProjectsOpen,
    toggleMenu,
    toggleSkills,
    toggleProjects,
    handleLinkClick,
    handleSubMenuClick
  } = useNavBar();

  // Submenu configuration
  const subMenus = [
    {
      mainLink: { href: "/skills", label: "Compétences" },
      subItems: [
        { href: "/skills/angular", label: "Angular" },
        { href: "/skills/spring", label: "Spring Boot" },
        { href: "/skills/react", label: "React" },
        { href: "/skills/nest", label: "Nest" },
        { href: "/skills/katalon", label: "Katalon" },
        { href: "/skills/docker", label: "Docker" },
        { href: "/skills/agile", label: "Agilité" },
        { href: "/skills/client", label: "Relation client" },
        { href: "/skills/qualite", label: "Qualité" },
        { href: "/skills/autonomie", label: "Autonomie" }
      ],
      isOpen: isSkillsOpen,
      onToggle: (e: MouseEvent) => handleSubMenuClick(e, toggleSkills)
    },
    {
      mainLink: { href: "/projects", label: "Projets" },
      subItems: [
        { href: "/projects/wahis", label: "Wahis" },
        { href: "/projects/tsource", label: "T-Source" },
        { href: "/projects/mpmt", label: "MPMT" },
        { href: "/projects/nowelia", label: "Nowelia" },
        { href: "/projects/gecko", label: "Gecko" }
      ],
      isOpen: isProjectsOpen,
      onToggle: (e: MouseEvent) => handleSubMenuClick(e, toggleProjects)
    }
  ];

  return (
    <nav class="navbar">
      <NavBarBrand 
        name="Marie Baude" 
        title="Experte en ingénierie logiciel" 
      />
      
      <NavBarHamburger 
        onClick={(e) => handleSubMenuClick(e, toggleMenu)} 
      />
      
      <NavBarMenu 
        isMenuOpen={isMenuOpen()}
        onLinkClick={handleLinkClick}
        subMenus={subMenus}
      />
    </nav>
  );
}