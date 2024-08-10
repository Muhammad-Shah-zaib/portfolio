export interface Logo {
  id: string; // Unique identifier
  src: string;
  alt: string;
  bgClass: string;
}

export interface DescriptionText {
  id: string; // Unique identifier
  text?: string;
  code?: string;
}

export interface ServiceData {
  id: number; // Unique identifier for each service
  title: "Frontend Development" | "Backend Development" | "Fullstack Development" | "Authentication" | "Database Management";
  description: DescriptionText[];
  logos: Logo[];
}
