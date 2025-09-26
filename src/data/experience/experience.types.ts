import { JSX } from "solid-js";

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  city: string;
  campany: string;
  logo: string;
  res?: string;
  status?: string;
  content: string;
  position: "left" | "right";
  icon: () => JSX.Element;
}
