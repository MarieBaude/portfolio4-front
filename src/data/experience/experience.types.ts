import { JSX } from "solid-js";

export interface TimelineItem {
  id: number;
  title: string;
  content: string;
  position: "left" | "right";
  icon: () => JSX.Element;
}
