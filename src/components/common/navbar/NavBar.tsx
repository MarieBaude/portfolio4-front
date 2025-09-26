import { createSignal, Show, onCleanup, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import "./NavBar.scss";

export default function NavBar() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isSkillsOpen, setIsSkillsOpen] = createSignal(false);
  const [isProjectsOpen, setIsProjectsOpen] = createSignal(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
  const toggleSkills = () => setIsSkillsOpen(!isSkillsOpen());
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen());

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsSkillsOpen(false);
    setIsProjectsOpen(false);
  };

  const handleLinkClick = (event: any, href: any) => {
    event.preventDefault();
    closeAllMenus();
    
    if (href) {
      navigate(href);
    }
  };

  const handleSubMenuClick = (event: any, toggleFunction: any) => {
    event.stopPropagation();
    toggleFunction();
  };


  onMount(() => {
    const handleClickOutside = (event: any) => {
      const navbar = document.querySelector('.navbar');
      if (!navbar?.contains(event.target)) {
        closeAllMenus();
        return;
      }

      const target = event.target;
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



  return (
    <nav class="navbar">
      <div class="navText">
        <span>Marie Baude</span>
        <span>Experte en ingénierie logiciel</span>
      </div>

      {/* Menu Hamburger pour mobile */}
      <button class="hamburger" onClick={(e) => handleSubMenuClick(e, toggleMenu)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Menu principal */}
      <ul class={`navLinks ${isMenuOpen() ? "active" : ""}`}>
        <li>
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>Accueil</a>
        </li>
        <li>
          <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>A propos</a>
        </li>
        <li class="subMenu">
          <div class="subMenu-header" onClick={(e) => handleSubMenuClick(e, toggleSkills)}>
            <a href="/skills">Compétences</a>
            <svg
              class={`icon ${isSkillsOpen() ? "open" : ""}`}
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
          <Show when={isSkillsOpen()}>
            <ul class="subMenu-list">
              <li>
                <a href="/skills/1" onClick={(e) => handleLinkClick(e, "/skills/angular")}>Angular</a>
              </li>
              <li>
                <a href="/skills/2" onClick={(e) => handleLinkClick(e, "/skills/spring")}>Spring Boot</a>
              </li>
              <li>
                <a href="/skills/react" onClick={(e) => handleLinkClick(e, "/skills/react")}>React</a>
              </li>
              <li>
                <a href="/skills/nest" onClick={(e) => handleLinkClick(e, "/skills/nest")}>Nest</a>
              </li>
              <li>
                <a href="/skills/katalon" onClick={(e) => handleLinkClick(e, "/skills/katalon")}>Katalon</a>
              </li>
              <li>
                <a href="/skills/docker" onClick={(e) => handleLinkClick(e, "/skills/docker")}>Docker</a>
              </li>
              <li>
                <a href="/skills/agile" onClick={(e) => handleLinkClick(e, "/skills/agile")}>Agilité</a>
              </li>
              <li>
                <a href="/skills/client" onClick={(e) => handleLinkClick(e, "/skills/client")}>Relation client</a>
              </li>
              <li>
                <a href="/skills/qualite" onClick={(e) => handleLinkClick(e, "/skills/qualite")}>Qualité</a>
              </li>
              <li>
                <a href="/skills/10" onClick={(e) => handleLinkClick(e, "/skills/10")}>Soon</a>
              </li>
            </ul>
          </Show>
        </li>
        <li class="subMenu">
          <div class="subMenu-header" onClick={(e) => handleSubMenuClick(e, toggleProjects)}>
            <a href="/projects">Projets</a>
            <svg
              class={`icon ${isProjectsOpen() ? "open" : ""}`}
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
          <Show when={isProjectsOpen()}>
            <ul class="subMenu-list">
              <li>
                <a href="/projects/1" onClick={(e) => handleLinkClick(e, "/projects/1")}>Wahis</a>
              </li>
              <li>
                <a href="/projects/2" onClick={(e) => handleLinkClick(e, "/projects/2")}>T-Source</a>
              </li>
              <li>
                <a href="/projects/3" onClick={(e) => handleLinkClick(e, "/projects/3")}>MPMT</a>
              </li>
              <li>
                <a href="/projects/4" onClick={(e) => handleLinkClick(e, "/projects/4")}>Nowelia</a>
              </li>
              <li>
                <a href="/projects/5" onClick={(e) => handleLinkClick(e, "/projects/5")}>Soon</a>
              </li>
            </ul>
          </Show>
        </li>
        <li>
          <a href="/experience" onClick={(e) => handleLinkClick(e, "/experience")}>Parcours</a>
        </li>
      </ul>
    </nav>
  );
}