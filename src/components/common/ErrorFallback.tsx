/**
 * ErrorFallback Component
 * 
 * Default fallback UI displayed when an error occurs
 * Provides user-friendly error message and recovery options
 */

import "./ErrorFallback.scss";

interface ErrorFallbackProps {
  error: Error;
  reset: () => void;
}

export default function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  const isDevelopment = import.meta.env.DEV;

  return (
    <div class="error-fallback">
      <div class="error-container">
        <div class="error-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
        
        <h2 class="error-title">Oops! Quelque chose s'est mal passé</h2>
        
        <p class="error-message">
          Une erreur inattendue s'est produite. Veuillez réessayer ou revenir à la page d'accueil.
        </p>
        
        {isDevelopment && (
          <details class="error-details">
            <summary>Détails techniques (développement)</summary>
            <pre class="error-stack">{error.message}</pre>
            <pre class="error-stack">{error.stack}</pre>
          </details>
        )}
        
        <div class="error-actions">
          <button class="btn btn--primary" onClick={reset}>
            Réessayer
          </button>
          <a href="/" class="btn btn--secondary">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
