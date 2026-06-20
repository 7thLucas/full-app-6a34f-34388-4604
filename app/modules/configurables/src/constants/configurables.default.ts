/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  playerXColor: string;
  playerOColor: string;
  gameTitle: string;
  gameSubtitle: string;
  playAgainLabel: string;
  showSubtitle: boolean;
  boardSize: number;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "TixTax",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#1A1A2E",
    secondary: "#3498DB",
    accent: "#E74C3C",
  },
  playerXColor: "#E74C3C",
  playerOColor: "#3498DB",
  gameTitle: "TixTax",
  gameSubtitle: "Two-player Tic-Tac-Toe",
  playAgainLabel: "Play Again",
  showSubtitle: true,
  boardSize: 10,
};
