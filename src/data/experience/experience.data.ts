import { SchoolIcon, WorkIcon } from "../icons";
import { TimelineItem } from "./experience.types";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    date: "2017 - 2018",
    title: "Développeur d'application",
    city: "Valenciennes",
    campany: "POP School",
    logo: "public/images/experience/popschool.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
    position: "right",
    icon: SchoolIcon
  },
  {
    id: 2,
    date: "Novembre 2021 - Août 2022",
    title: "Bachelor conceptrice développpeusse d’application",
    city: "Valenciennes",
    campany: "Simplon",
    logo: "public/images/experience/Logo_simplon.co.svg.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
    position: "right",
    icon: SchoolIcon
  },
  {
    id: 3,
    date: "Mai 2022 - Juillet 2022",
    title: "Stagiaire conceptrice développpeusse d’application",
    city: "Valenciennes",
    campany: "Fadmarts",
    logo: "",
    res: "Développeuse full-stack",
    status: "Stagiaire",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
    position: "left",
    icon: WorkIcon,
  },
  {
    id: 4,
    date: "Décembre 2023 - Novembre 2025",
    title: "Mastère experte en ingénierie logiciel",
    city: "Distanciel",
    campany: "ISCOD",
    logo: "public/images/experience/iscod_logo.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
    position: "right",
    icon: SchoolIcon
  },
  {
    id: 5,
    date: "Décembre 2023 - Janvier 2026",
    title: "Apprentie ingénieure en étude et développement",
    city: "Lille",
    campany: "Kapela",
    logo: "public/images/experience/kapela.png",
    res: "Développeuse full-stack",
    status: "Alternance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
    position: "left",
    icon: WorkIcon
  },
];
