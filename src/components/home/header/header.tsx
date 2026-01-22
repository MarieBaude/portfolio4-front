import "./header.scss";
import { ASSET_PATHS } from "~/config/assets";

export default function Header() {
  return (
    <header class="headerContainer">
      <img src={ASSET_PATHS.home.presentation} alt="illu de présentation" />
      <div class="headerContent">
        <div class="headerTexts">
          <h2 class="headerTitle">Portfolio</h2>
          <span>
            D’infographiste à développeuse full-stack, je conçois des logiciels avec une vision à la fois créative et rigoureuse.
          </span>
        </div>
        <button>
          <a href="/about">A propos</a>
        </button>
      </div>
    </header>
  );
}
