import { Title } from "@solidjs/meta";
import Header from "~/components/home/header";
import Contact from '../components/home/contact';
import Bar from '../components/home/bar';

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <Header />
      <Bar />
      <Contact />
    </main>
  );
}
