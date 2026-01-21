import { JSX } from "solid-js";

export type TimelineItemType = "work" | "education";

export interface BaseTimelineItem {
  id: number;
  date: string;
  title: string;
  city: string;
  campany: string;
  logo: string;
  position: "left" | "right";
  icon: () => JSX.Element;
  type: TimelineItemType;
}

export interface WorkTimelineItem extends BaseTimelineItem {
  type: "work";
  res: string; // Responsabilité (chef de projet, directeur, etc.)
  status?: string; // Statut (Stagiaire, Alternance, CDI, etc.)
  missions: string[];
  achievements?: { title: string; url?: string }[];
  skills?: string[]; // Compétences rattachées
}

export interface EducationTimelineItem extends BaseTimelineItem {
  type: "education";
  diploma: string; // Le diplôme ou titre
  institutionDescription: string; // Présentation de l'établissement
  pedagogyVision: string; // Vision de la pédagogie pratiquée
  websiteUrl?: string; // Lien vers le site de l'établissement
}

export type TimelineItem = WorkTimelineItem | EducationTimelineItem;