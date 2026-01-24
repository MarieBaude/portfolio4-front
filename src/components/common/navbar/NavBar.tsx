// ~/components/NavBar/NavBar.tsx
import { createSignal, Show, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import "./NavBar.scss";

export default function NavBar() {
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isSkillsOpen, setIsSkillsOpen] = createSignal(false);
  const [isProjectsOpen, setIsProjectsOpen] = createSignal(false);

  const skills = [
    { href: "/skills/angular", label: "Angular" },
    { href: "/skills/spring", label: "Spring Boot" },
    { href: "/skills/react", label: "React" },
    { href: "/skills/nest", label: "NestJS" },
    { href: "/skills/katalon", label: "Katalon" },
    { href: "/skills/docker", label: "Docker" },
    { href: "/skills/agile", label: "Agilité" },
    { href: "/skills/client", label: "Relation client" },
    { href: "/skills/qualite", label: "Sens de la qualité" },
    { href: "/skills/autonomie", label: "Autonomie" },
  ];

  const projects = [
    { href: "/projects/wahis", label: "Wahis" },
    { href: "/projects/tsource", label: "T-Source" },
    { href: "/projects/mpmt", label: "MPMT" },
    { href: "/projects/nowelia", label: "Nowelia" },
    { href: "/projects/gecko", label: "Gecko" },
  ];

  const goTo = (href: string) => {
    setIsMenuOpen(false);
    setIsSkillsOpen(false);
    setIsProjectsOpen(false);
    navigate(href);
  };

  return (
    <nav class="navbar">
      {/* Brand */}
      <a href="/" onClick={(e) => { e.preventDefault(); goTo("/"); }}>
        <div class="navText">
          <span>Marie Baude</span>
          <span>Experte en ingénierie logiciel</span>
        </div>
      </a>

      {/* Hamburger */}
      <button 
        class="hamburger" 
        onClick={() => setIsMenuOpen(!isMenuOpen())}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Menu */}
      <ul class={`navLinks ${isMenuOpen() ? "active" : ""}`}>
        <li>
          <a href="/" onClick={(e) => { e.preventDefault(); goTo("/"); }}>Accueil</a>
        </li>
        
        <li>
          <a href="/about" onClick={(e) => { e.preventDefault(); goTo("/about"); }}>A propos</a>
        </li>

        {/* Compétences */}
        <li class="subMenu">
          <div class="subMenu-header" onClick={() => setIsSkillsOpen(!isSkillsOpen())}>
            <span>Compétences</span>
            <svg class={`icon ${isSkillsOpen() ? "open" : ""}`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          <Show when={isSkillsOpen()}>
            <ul class="subMenu-list">
              <li>
                <a href="/skills" onClick={(e) => { e.preventDefault(); goTo("/skills"); }}>
                  Toutes les compétences
                </a>
              </li>
              <For each={skills}>
                {(item) => (
                  <li>
                    <a href={item.href} onClick={(e) => { e.preventDefault(); goTo(item.href); }}>
                      {item.label}
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </Show>
        </li>

        {/* Projets */}
        <li class="subMenu">
          <div class="subMenu-header" onClick={() => setIsProjectsOpen(!isProjectsOpen())}>
            <span>Projets</span>
            <svg class={`icon ${isProjectsOpen() ? "open" : ""}`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          <Show when={isProjectsOpen()}>
            <ul class="subMenu-list">
              <li>
                <a href="/projects" onClick={(e) => { e.preventDefault(); goTo("/projects"); }}>
                  Tous les projets
                </a>
              </li>
              <For each={projects}>
                {(item) => (
                  <li>
                    <a href={item.href} onClick={(e) => { e.preventDefault(); goTo(item.href); }}>
                      {item.label}
                    </a>
                  </li>
                )}
              </For>
            </ul>
          </Show>
        </li>

        <li>
          <a href="/contact" onClick={(e) => { e.preventDefault(); goTo("/contact"); }}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}