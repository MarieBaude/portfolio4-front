import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <div>
        <span>Marie Baude</span>
        <span>Experte en ingénierie logiciel</span>
      </div>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A propos</a></li>
        <li><a href="/skills">Compétences</a></li>
        <li><a href="/projects">Projets</a></li>
        <li><a href="/experience">Parcours</a></li>
      </ul>
    </nav>
  );
}
