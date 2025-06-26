import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <div class="navText">
        <span>Marie Baude</span>
        <span>Experte en ingénierie logiciel</span>
      </div>
      <ul class="navLinks">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/about">A propos</a>
        </li>
        <li class="subMenu">
          <a href="/skills">Compétences</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
          </svg>
          <ul>
            <li>
              <a href="/skills/1">Angular</a>
            </li>
            <li>
              <a href="/skills/2">Spring Boot</a>
            </li>
            <li>
              <a href="/skills/3">Soon</a>
            </li>
            <li>
              <a href="/skills/4">Soon</a>
            </li>
            <li>
              <a href="/skills/5">Katalon</a>
            </li>
            <li>
              <a href="/skills/6">Soon</a>
            </li>
            <li>
              <a href="/skills/7">Agilité</a>
            </li>
            <li>
              <a href="/skills/8">Relation client</a>
            </li>
            <li>
              <a href="/skills/9">Soon</a>
            </li>
            <li>
              <a href="/skills/10">Soon</a>
            </li>
          </ul>
        </li>
        <li class="subMenu">
          <a href="/projects">Projets</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-caret-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
          </svg>
          <ul>
            <li>
              <a href="/projects/1">Wahis</a>
            </li>
            <li>
              <a href="/projects/2">T-Source</a>
            </li>
            <li>
              <a href="/projects/3">Soon</a>
            </li>
            <li>
              <a href="/projects/4">Soon</a>
            </li>
            <li>
              <a href="/projects/5">Soon</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/experience">Parcours</a>
        </li>
      </ul>
    </nav>
  );
}
