import realRoof from "@/assets/t3-real-roof-two-rivers.jpg";
import heroRoof from "@/assets/hero-roof.jpg";
import crew from "@/assets/crew-on-roof.jpg";
import home from "@/assets/home-exterior.jpg";
import before from "@/assets/before-roof.jpg";
import siding from "@/assets/siding.jpg";
import construction from "@/assets/new-construction.jpg";

export type Project = {
  src: string;
  label: string;
  tag: string;
  /** Tailwind grid-span classes for the masonry gallery layout. */
  span: string;
};

// Lead tile is a real completed T3 job in Two Rivers. Remaining tiles are
// representative placeholders, swap for real client photos as they come in.
export const PROJECTS: Project[] = [
  { src: realRoof, label: "Architectural shingle re-roof · Two Rivers", tag: "Real job", span: "md:col-span-2 md:row-span-2" },
  { src: heroRoof, label: "Architectural shingle install", tag: "Shingles", span: "" },
  { src: crew, label: "Crew working safe", tag: "On-site", span: "" },
  { src: before, label: "Storm damage repair", tag: "Before", span: "" },
  { src: siding, label: "New vinyl siding", tag: "Siding", span: "" },
  { src: construction, label: "Framed new build", tag: "New build", span: "md:col-span-2" },
];
