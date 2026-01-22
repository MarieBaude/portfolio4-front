import { Title } from "@solidjs/meta";
import Header from "~/components/home/header/header";
import Synthesis from './../components/home/synthesis/synthesis';
import Advantages from "~/components/home/advantages/advantages";
import Works from "~/components/home/works/works";

export default function Home() {
  return (
    <div>
      <Title>Accueil - Portfolio</Title>
      <Header />
      <Synthesis />
      <Advantages />
      <Works />
    </div>
  );
}
