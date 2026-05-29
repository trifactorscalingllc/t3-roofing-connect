import realRoof from "@/assets/t3-real-roof-two-rivers.jpg";
import fbWhiteHome from "@/assets/fb-reroof-white-home.jpg";
import fbHip from "@/assets/fb-hip-roof.jpg";
import fbValley from "@/assets/fb-valley-detail.jpg";
import fbLakeshore from "@/assets/fb-lakeshore-reroof.jpg";
import siding from "@/assets/siding.jpg";
import construction from "@/assets/new-construction.jpg";

export type Project = {
  src: string;
  label: string;
  tag: string;
  /** Tailwind grid-span classes for the masonry gallery layout. */
  span: string;
};

// Real completed T3 jobs (pulled from the company Facebook) lead the gallery.
// Siding and new-construction are representative until real photos come in.
export const PROJECTS: Project[] = [
  { src: realRoof, label: "Architectural shingle re-roof · Two Rivers", tag: "Re-roof", span: "md:col-span-2 md:row-span-2" },
  { src: fbWhiteHome, label: "Re-roof on a white-sided home", tag: "Re-roof", span: "" },
  { src: fbHip, label: "Hip-roof shingle install", tag: "Shingles", span: "" },
  { src: fbValley, label: "Valley & hip detailing", tag: "Shingles", span: "" },
  { src: fbLakeshore, label: "Lakeshore re-roof", tag: "Re-roof", span: "md:col-span-2" },
  { src: siding, label: "New vinyl siding", tag: "Siding", span: "" },
  { src: construction, label: "Framed new build", tag: "New build", span: "" },
];
