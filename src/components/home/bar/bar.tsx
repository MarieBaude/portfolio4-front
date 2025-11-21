import "./bar.scss";

export default function Bar() {
  return (
    <section class="barContent">
      <a href="/skills">
        <div class="skillBar">
          <h2 class="titleBar">Compétences</h2>
        </div>
      </a>
      <a href="/projects">
        <div class="skillBar">
          <h2 class="titleBar">Réalisations</h2>
        </div>
      </a>
      <a href="/contact">
        <div class="skillBar">
          <h2 class="titleBar">Contact</h2>
        </div>
      </a>
    </section>
  );
}
