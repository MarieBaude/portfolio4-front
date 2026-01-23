import { Hobbit } from "./about.types";
import { BookIcon, HeadphonesIcon, MouseIcon } from "../icons";

export const HOBBIT: Hobbit[] = [
  {
    icon: MouseIcon,
    title: "Jeux vidéo",
    subTitle: "J'aime les jeux vidéo pour le divertissement qu'ils apportent mais aussi pour leur dimension artistique complète : graphisme, musique, narration, game design. Ils ont également une dimension sociale, que ce soit par le jeu en équipe ou les rencontres qu'ils permettent.",
  },
  {
    icon: BookIcon,
    title: "Lecture",
    subTitle: "La lecture de romans, manga, bandes dessinées occupe une place importante dans ma vie. J'aime particulièrement les histoires fantastiques pour l'évasion et la découverte qu'elles procurent. Je suis collectionneuse de beaux livres.",
  },
  {
    icon: HeadphonesIcon,
    title: "Musique",
    subTitle: "La musique rythme mon quotidien, qu'il s'agisse de me concentrer au travail, de me détendre ou de me reposer. J'écoute de tout, du lofi hip-hop au métal, en passant par des OST de jeux vidéo et de films. Elle influence mon humeur et ma concentration.",
  },
];
