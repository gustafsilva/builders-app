export type SpacingInNumber = number | undefined;

export type Spacing = SpacingInNumber | "view" | "card" | string;

export function calculateSpacingInNumber(spacing: Spacing) {
  if (spacing === "view") {
    return 24;
  }
  if (spacing === "card") {
    return 16;
  }
  if (typeof spacing === "number") {
    return spacing;
  }

  return undefined;
}

export function calculateSpacing(spacing: Spacing) {
  const spacingInNumber = calculateSpacingInNumber(spacing);
  if (spacingInNumber !== undefined) {
    return spacingInNumber;
  }

  return spacing;
}
