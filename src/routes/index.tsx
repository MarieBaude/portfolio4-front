import { Title } from "@solidjs/meta";
import Header from "~/components/home/header/header";
import Bar from "../components/home/bar/bar";

export default function Home() {
  return (
    <div>
      <Title>Accueil</Title>
      <Header />
      <Bar />
    </div>
  );
}
