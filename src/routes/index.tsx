import { Title } from "@solidjs/meta";
import Header from "~/components/home/header/header";
import Contact from "../components/home/contact/contact";
import Bar from "../components/home/bar/bar";

export default function Home() {
  return (
    <div>
      <Title>Home</Title>
      <Header />
      <Bar />
      <Contact />
    </div>
  );
}
