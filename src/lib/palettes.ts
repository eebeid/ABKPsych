export type PaletteId = "taupe" | "sage" | "slate" | "terracotta" | "plum";

export interface ThemePalette {
  id: PaletteId;
  name: string;
  description: string;
  primary: string;
  dark: string;
  muted: string;
  wash: string;
  border: string;
}

export const THEME_PALETTES: ThemePalette[] = [
  {
    id: "taupe",
    name: "Warm Taupe",
    description: "Earthy, calm neutral taupe accents",
    primary: "#8A7F6E",
    dark: "#6E6455",
    muted: "#A49989",
    wash: "#F3F1EC",
    border: "#DCD6CC",
  },
  {
    id: "sage",
    name: "Olive Sage",
    description: "Original soft botanical green accents",
    primary: "#4F6752",
    dark: "#3E5341",
    muted: "#6B826E",
    wash: "#EFF3EF",
    border: "#C8D4C9",
  },
  {
    id: "slate",
    name: "Soft Slate",
    description: "Quiet, grounded dusty blue-gray",
    primary: "#4A5D73",
    dark: "#38485A",
    muted: "#6D8096",
    wash: "#EDF1F5",
    border: "#C8D4E0",
  },
  {
    id: "terracotta",
    name: "Muted Terracotta",
    description: "Warm clay and soft sand tones",
    primary: "#9B6B56",
    dark: "#7D5341",
    muted: "#B58976",
    wash: "#F6EFEA",
    border: "#DFCFC6",
  },
  {
    id: "plum",
    name: "Dusty Plum",
    description: "Subtle, refined mauve-plum tones",
    primary: "#6E5A68",
    dark: "#554450",
    muted: "#8C7786",
    wash: "#F3EEF2",
    border: "#D8CBD4",
  },
];

export const DEFAULT_PALETTE_ID: PaletteId = "taupe";

export function getPalette(id?: string): ThemePalette {
  return (
    THEME_PALETTES.find((p) => p.id === id) ??
    THEME_PALETTES[0]
  );
}
