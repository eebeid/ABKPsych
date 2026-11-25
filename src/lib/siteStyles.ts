export type ElementStyleConfig = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  color: string;
};

export type SiteStyles = {
  h1: ElementStyleConfig;
  h2: ElementStyleConfig;
  h3: ElementStyleConfig;
  h4: ElementStyleConfig;
  p: ElementStyleConfig;
  customCss: string;
};

export const DEFAULT_SITE_STYLES: SiteStyles = {
  h1: { fontSize: "2.75rem", lineHeight: "1.2", fontWeight: "500", color: "#1C241E" },
  h2: { fontSize: "2rem", lineHeight: "1.25", fontWeight: "500", color: "#1C241E" },
  h3: { fontSize: "1.35rem", lineHeight: "1.35", fontWeight: "500", color: "#1C241E" },
  h4: { fontSize: "1.1rem", lineHeight: "1.4", fontWeight: "500", color: "#1C241E" },
  p: { fontSize: "1rem", lineHeight: "1.75", fontWeight: "300", color: "#4A544C" },
  customCss: "",
};
