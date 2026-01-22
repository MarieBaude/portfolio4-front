import { Hobbit } from "./about.types";
import { BookIcon, HeadphonesIcon, MouseIcon } from "../icons";

export const HOBBIT: Hobbit[] = [
  {
    icon: MouseIcon,
    title: "Jeux vidéo",
    subTitle: "J'aime les jeux vidéo pour le divertissement qu'ils apportent mais aussi pour leur dimension artistique complète : graphisme, musique, narration, game design. Ils offrent aussi un côté social, à travers le jeu en équipe et les rencontres humaines.",
  },
  {
    icon: BookIcon,
    title: "Lecture",
    subTitle: "La lecture de romans, manga, bandes dessinées occupe une place importante dans ma vie. J'aime particulièrement les histoires fantastiques pour l'évasion et la découverte qu'elles procurent. Je suis collectionneuse de beaux livres.",
  },
  {
    icon: HeadphonesIcon,
    title: "Musique",
    subTitle: "La musique accompagne tous mes moments : travail, détente, repos. J'écoute de tout, du lofi hip-hop au métal, en passant par des OST de jeux vidéo et de films. Elle influence mon humeur et ma concentration.",
  },
];
