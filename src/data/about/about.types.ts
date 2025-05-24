import { JSX } from "solid-js";

export interface About {
  title: string;
  content: string;
}

export interface Hobbit {
  icon: () => JSX.Element;
  title: string;
  subTitle: string;
}
