import "./header.scss";

export default function Header() {
  return (
    <header class="headerContainer">
      <img src="public/images/home/Group_44.png" alt="illu de présentation" />
      <div class="headerContent">
        <div class="headerTexts">
          <h2>Lorem Ipsum</h2>
          <span>
            Aenean sodales risus non dui consequat, ac lobortis diam venenatis.
          </span>
        </div>
        <button>Action</button>
      </div>
    </header>
  );
}
