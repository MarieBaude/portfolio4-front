import { Title } from "@solidjs/meta";
import "../styles/about.scss";
import { ABOUT, HOBBIT } from "~/data/about/about.data";

export default function About() {
  return (
    <div>
      <Title>A propos</Title>
      {/* <h1>A propos</h1> */}

      <section class="presentation">
        <div class="mainText">
          <h2>{ABOUT[0].title}</h2>
          <hr />
          <p>{ABOUT[0].content}</p>
        </div>
        <img
          src="public\images\Rectangle 14.png"
          class="photo"
          alt="ma photo"
        />
      </section>

      <section>
        <h3>{ABOUT[1].title}</h3>
        <p class="para">{ABOUT[1].content}</p>

        <h3>{ABOUT[2].title}</h3>
        <p class="para">{ABOUT[2].content}</p>

        <h3>{ABOUT[3].title}</h3>
        <p class="para">{ABOUT[3].content}</p>
      </section>

      <section>
        <h2>Mes centres d'intérêt</h2>

        <div class="hobbit">
          {HOBBIT.map((item) => (
            <div class="oneHobbit">
              <item.icon />
              <h3>{item.title}</h3>
              {item.subTitle && <span>{item.subTitle}</span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
