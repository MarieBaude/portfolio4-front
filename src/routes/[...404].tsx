import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import "./404.scss";

export default function NotFound() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div class="not-found-page">
      <Title>Page non trouvée - Marie Baude</Title>
      <HttpStatusCode code={404} />
      
      <div class="not-found-container">
        <div class="not-found-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        
        <h1 class="not-found-title">Page non trouvée</h1>
        
        <p class="not-found-message">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div class="not-found-actions">
          <button class="btn btn--primary" onClick={goBack}>
            Retour
          </button>
          <a href="/" class="btn btn--secondary">
            Accueil
          </a>
        </div>
        
        <div class="not-found-suggestions">
          <h3>Suggestions :</h3>
          <ul>
            <li><a href="/skills">Voir toutes les compétences</a></li>
            <li><a href="/projects">Découvrir mes projets</a></li>
            <li><a href="/about">En savoir plus sur moi</a></li>
            <li><a href="/experience">Mon parcours professionnel</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
