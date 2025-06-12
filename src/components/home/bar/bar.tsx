import "./bar.scss";

export default function Bar() {
  return (
    <section class="bar_content">
      <div class="content">
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
      </div>
    </section>
  );
}
