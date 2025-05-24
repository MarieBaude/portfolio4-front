import { About, Hobbit } from "./about.types";
import { BookIcon, HeadphonesIcon, MouseIcon } from "./icons";

export const ABOUT: About[] = [
  {
    title: "Présentation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et porta mauris, et faucibus neque. Vivamus nec condimentum nisl, dignissim ornare lorem. Donec lobortis odio quis arcu sollicitudin, id suscipit lectus rutrum. Cras ornare viverra mauris, in rutrum purus semper eget. Maecenas ac volutpat magna. Donec lectus tellus, dictum eu accumsan eget, pretium ac ipsum. Maecenas ornare egestas quam ut maximus. Nullam finibus diam in orci posuere dapibus.",
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
    subTitle: "RPG",
  },
  {
    icon: BookIcon,
    title: "Lecture",
    subTitle: "Fantaisie, Horreur",
  },
  {
    icon: HeadphonesIcon,
    title: "Musique",
    subTitle: "Métal",
  },
];
