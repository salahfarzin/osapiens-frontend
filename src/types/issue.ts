import { ReactNode } from "react";

export type Issue = {
  id: string;
  icon: ReactNode; // Supports Emoji strings or MUI Icons
  title: string;
  description: string; // The translation key or raw string with HTML
};
