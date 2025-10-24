/**
 * useNavBar Hook
 * 
 * Custom hook to manage navigation bar state and interactions
 * Handles menu toggles, outside clicks, and navigation logic
 */

import { createSignal, onCleanup, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";

export function useNavBar() {
  const navigate = useNavigate();
  
  // Menu state signals
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isSkillsOpen, setIsSkillsOpen] = createSignal(false);
  const [isProjectsOpen, setIsProjectsOpen] = createSignal(false);

  // Toggle functions
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
  const toggleSkills = () => setIsSkillsOpen(!isSkillsOpen());
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen());

  // Close all menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsSkillsOpen(false);
    setIsProjectsOpen(false);
  };

  // Handle navigation link clicks
  const handleLinkClick = (event: MouseEvent, href: string) => {
    event.preventDefault();
    closeAllMenus();
    
    if (href) {
      navigate(href);
    }
  };

  // Handle submenu toggle clicks
  const handleSubMenuClick = (event: MouseEvent, toggleFunction: () => void) => {
    event.stopPropagation();
    toggleFunction();
  };

  // Handle outside clicks to close menus
  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('.navbar');
      if (!navbar?.contains(event.target as Node)) {
        closeAllMenus();
        return;
      }

      const target = event.target as Element;
      const isSubMenuElement = target.closest('.subMenu');
      const isHamburger = target.closest('.hamburger');
      const isNavLink = target.closest('.navLinks > li > a');

      if (!isSubMenuElement && !isHamburger && !isNavLink) {
        closeAllMenus();
      }
    };

    document.addEventListener('click', handleClickOutside);

    onCleanup(() => {
      document.removeEventListener('click', handleClickOutside);
    });
  });

  return {
    // State
    isMenuOpen,
    isSkillsOpen,
    isProjectsOpen,
    
    // Actions
    toggleMenu,
    toggleSkills,
    toggleProjects,
    closeAllMenus,
    handleLinkClick,
    handleSubMenuClick
  };
}
