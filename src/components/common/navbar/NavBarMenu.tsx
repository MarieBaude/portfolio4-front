/**
 * NavBarMenu Component
 * 
 * Main navigation menu containing all navigation links
 * Handles both simple links and submenu items
 */

import NavBarSubMenu from "./NavBarSubMenu";

interface NavItem {
  href: string;
  label: string;
}

interface SubMenuItem {
  href: string;
  label: string;
}

interface SubMenuData {
  mainLink: NavItem;
  subItems: SubMenuItem[];
  isOpen: () => boolean;
  onToggle: (event: MouseEvent) => void;
}

interface NavBarMenuProps {
  isMenuOpen: boolean;
  onLinkClick: (event: MouseEvent, href: string) => void;
  subMenus: SubMenuData[];
}

export default function NavBarMenu({ isMenuOpen, onLinkClick, subMenus }: NavBarMenuProps) {
  return (
    <ul class={`navLinks ${isMenuOpen ? "active" : ""}`}>
      {/* Accueil */}
      <li>
        <a href="/" onClick={(e) => onLinkClick(e, "/")}>Accueil</a>
      </li>
      
      {/* A propos */}
      <li>
        <a href="/about" onClick={(e) => onLinkClick(e, "/about")}>A propos</a>
      </li>
      
      {/* Submenu items */}
      {subMenus.map((subMenu) => (
        <NavBarSubMenu
          mainLink={subMenu.mainLink}
          subItems={subMenu.subItems}
          isOpen={subMenu.isOpen}
          onToggle={subMenu.onToggle}
          onLinkClick={onLinkClick}
        />
      ))}
      
      {/* Parcours - should be last */}
      <li>
        <a href="/experience" onClick={(e) => onLinkClick(e, "/experience")}>Parcours</a>
      </li>
    </ul>
  );
}
