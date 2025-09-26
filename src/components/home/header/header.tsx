import "./header.scss";

export default function Header() {
  return (
    <header class="headerContainer">
      <img src="public/images/home/4380744.png" alt="illu de présentation" />
      <div class="headerContent">
        <div class="headerTexts">
          <h2>Portfolio</h2>
          <span>
            Ce portfolio est le fruit de l'un de mes examen de mastère expert en ingénierie logiciel.
          </span>
        </div>
        <button>A propos</button>
      </div>
    </header>
  );
}
