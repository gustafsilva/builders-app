export type Spacing = number | "view" | "card";

export function calculateSpacing(spacing: Spacing | undefined) {
  if (spacing === "view") {
    return 24;
  }
  if (spacing === "card") {
    return 16;
  }

  return spacing;
}
