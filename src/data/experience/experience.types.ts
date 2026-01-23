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
  responsabilities: string[];
  status?: string;
  missions: string[];
  achievements?: { title: string; url?: string }[];
  skills?: string[]; 
  websiteUrl?: string;
}

export interface EducationTimelineItem extends BaseTimelineItem {
  type: "education";
  diploma: string; 
  institutionDescription: string; 
  pedagogyVision: string; 
  websiteUrl?: string; 
}

export type TimelineItem = WorkTimelineItem | EducationTimelineItem;