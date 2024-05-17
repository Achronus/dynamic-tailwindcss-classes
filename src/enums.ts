enum Colours {
  "lime",
  "red",
  "cyan",
}

export const colours = Object.values(Colours);
export type ColourType = keyof typeof Colours;
