import "./header.scss";
import { ASSET_PATHS } from "~/config/assets";

export default function Header() {
  return (
    <header class="headerContainer">
      <img src={ASSET_PATHS.home.presentation} alt="illu de présentation" />
      <div class="headerContent">
        <div class="headerTexts">
          <h2>Portfolio</h2>
          <span>
            Ce portfolio est le fruit de l'un de mes examen de mastère expert en ingénierie logiciel.
          </span>
        </div>
        <button>
          <a href="/about">A propos</a>
        </button>
      </div>
    </header>
  );
}
