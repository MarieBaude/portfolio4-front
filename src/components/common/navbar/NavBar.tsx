import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <header>
        <div>Marie Baude</div>
        <div>Experte en ingénierie logiciel</div>
      </header>
      <ul>
        <li><a href="/" title="Aller à la page d'accueil">Accueil</a></li>
        <li><a href="/about" title="Aller à la page à propos">A propos</a></li>
        <li><a href="/skills" title="Aller à la page toutes les compétences">Compétences</a></li>
        <li><a href="/projects" title="Aller à la page tous les projets">Projets</a></li>
        <li><a href="/experience" title="Aller à la page parcours">Parcours</a></li>
      </ul>
    </nav>
  );
}
