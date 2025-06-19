import "./bar.scss";

export default function Bar() {
  return (
    <section class="barContent">
      <a href="/skills">
        <div class="skillBar">
          <h2>Compétences</h2>
        </div>
      </a>
      <a href="/projects">
        <div class="skillBar">
          <h2>Réalisations</h2>
        </div>
      </a>
      <a href="/experience">
        <div class="skillBar">
          <h2>Parcours</h2>
        </div>
      </a>
    </section>
  );
}
