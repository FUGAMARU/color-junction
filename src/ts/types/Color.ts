export type Color = "blank" | "purple" | "yellow" | "green" | "blue"

export const hex: { [key in Color]: string } = {
  "blank": "#e3e3e3",
  "purple": "#951350",
  "yellow": "#ff9400",
  "green": "#4c9000",
  "blue": "#0d1593"
}