export type FontId = "default" | "avenir-next" | "lato" | "montserrat" | "dm-sans";

export interface FontOption {
  id: FontId;
  name: string;
  tagline: string;
  description: string;
  headingFamily: string;
  bodyFamily: string;
}

export const FONT_OPTIONS: FontOption[] = [
  {
    id: "default",
    name: "Classic Editorial (Default)",
    tagline: "SERIF · TIMELESS · EDITORIAL",
    description:
      "Playfair Display for headings paired with Plus Jakarta Sans for body text.",
    headingFamily: "var(--font-playfair), Georgia, serif",
    bodyFamily: "var(--font-jakarta), system-ui, sans-serif",
  },
  {
    id: "avenir-next",
    name: "Avenir Next",
    tagline: "CLEAN · WARM · REFINED",
    description:
      "Avenir Next has a beautiful balance of warmth and professionalism. Its rounded forms feel approachable without being overly soft.",
    headingFamily: '"Avenir Next", var(--font-nunito), system-ui, sans-serif',
    bodyFamily: '"Avenir Next", var(--font-nunito), system-ui, sans-serif',
  },
  {
    id: "lato",
    name: "Lato",
    tagline: "APPROACHABLE · NATURAL · CLEAR",
    description:
      "Slightly more relaxed. Very readable, with a human quality that works well for a psychotherapy practice.",
    headingFamily: "var(--font-lato), system-ui, sans-serif",
    bodyFamily: "var(--font-lato), system-ui, sans-serif",
  },
  {
    id: "montserrat",
    name: "Montserrat",
    tagline: "CONTEMPORARY · STRUCTURED · CRISP",
    description:
      "A little more architectural and bold. Works especially well for headings paired with a softer body font.",
    headingFamily: "var(--font-montserrat), system-ui, sans-serif",
    bodyFamily: "var(--font-montserrat), system-ui, sans-serif",
  },
  {
    id: "dm-sans",
    name: "DM Sans",
    tagline: "MINIMAL · ELEGANT · UNFUSSY",
    description:
      "A lovely contemporary option. Clean without feeling sterile.",
    headingFamily: "var(--font-dm-sans), system-ui, sans-serif",
    bodyFamily: "var(--font-dm-sans), system-ui, sans-serif",
  },
];

export function getFontOption(id?: string): FontOption {
  return FONT_OPTIONS.find((f) => f.id === id) ?? FONT_OPTIONS[0];
}
