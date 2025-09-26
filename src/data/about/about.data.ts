import { About, Hobbit } from "./about.types";
import { BookIcon, HeadphonesIcon, MouseIcon } from "../icons";

export const ABOUT: About[] = [
  {
    title: "Présentation",
    content:
      "",
  },
  {
    title: "Mes valeurs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et porta mauris, et faucibus neque.",
  },
  {
    title: "Mon projet professionnel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et porta mauris, et faucibus neque.",
  },
  {
    title: "Mes qualités humaines",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et porta mauris, et faucibus neque.",
  },
];

export const HOBBIT: Hobbit[] = [
  {
    icon: MouseIcon,
    title: "Jeux vidéo",
    subTitle: "J'aime les jeux vidéo pour le divertissement et leur dimension artistique complète (dessin, musique, scénario). Il offrent aussi un côté social, à travers le jeux en équipe et les rencontres humaines. ",
  },
  {
    icon: BookIcon,
    title: "Lecture",
    subTitle: "La lecture de romans, manga, bandes dessinées occupe une place importante dans ma vie. J'aime beaucoup les histoires fantastique pour l'évasion et la découverte. Je suis collectionneuse de beaux livre.",
  },
  {
    icon: HeadphonesIcon,
    title: "Musique",
    subTitle: "La musique accompagne tous mes moments : travail, détente, repos, amusement. J'écoute de tout, du lofi hip hop au métal, en passant par des OST de tout média confondu.",
  },
];
