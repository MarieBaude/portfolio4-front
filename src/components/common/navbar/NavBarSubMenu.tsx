/**
 * NavBarSubMenu Component
 * 
 * Handles dropdown submenu functionality for navigation items
 * Displays main link with dropdown arrow and submenu items
 */

import { Show } from "solid-js";

interface SubMenuItem {
  href: string;
  label: string;
}

interface NavBarSubMenuProps {
  mainLink: {
    href: string;
    label: string;
  };
  subItems: SubMenuItem[];
  isOpen: () => boolean;
  onToggle: (event: MouseEvent) => void;
  onLinkClick: (event: MouseEvent, href: string) => void;
}

export default function NavBarSubMenu({ 
  mainLink, 
  subItems, 
  isOpen, 
  onToggle, 
  onLinkClick 
}: NavBarSubMenuProps) {
  // Gérer le clic sur le lien principal
  const handleMainLinkClick = (e: MouseEvent) => {
    e.preventDefault();
    onToggle(e);
  };

  // Gérer le clic sur un élément du sous-menu
  const handleSubItemClick = (e: MouseEvent, href: string) => {
    e.stopPropagation();
    onLinkClick(e, href);
  };

  return (
    <li class="subMenu">
      <div class="subMenu-header" onClick={onToggle}>
        <a 
          href={mainLink.href} 
          onClick={handleMainLinkClick}
          class="main-link"
        >
          {mainLink.label}
        </a>
        <svg
          class={`icon ${isOpen() ? "open" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
        </svg>
      </div>
      <Show when={isOpen()}>
        <ul class="subMenu-list">
          {/* Lien vers la page mère */}
          <li>
            <a 
              href={mainLink.href} 
              onClick={(e) => handleSubItemClick(e, mainLink.href)}
              class="submenu-parent-link"
            >
              {mainLink.label === "Compétences" 
                ? "Toutes les compétences" 
                : "Tous les projets"
              }
            </a>
          </li>
          
          {/* Sous-éléments */}
          {subItems.map((item) => (
            <li>
              <a 
                href={item.href} 
                onClick={(e) => handleSubItemClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Show>
    </li>
  );
}