import {
  CARD_DEFAULT,
  VIEW_DEFAULT,
  SpacingInNumber,
  Spacing,
  calculateSpacingInNumber,
  calculateSpacing,
} from "core/helpers/spacing";

describe("🫀 Core | 👋 Helpers | 📐 Spacing", function () {
  describe("| calculateSpacingInNumber()", function () {
    it("should return undefined", () => {
      expect(calculateSpacingInNumber(undefined)).toBe(undefined);
    });

    it("should return to number", () => {
      const spacing: SpacingInNumber = 10;
      expect(calculateSpacingInNumber(spacing)).toBe(spacing);
    });

    it(`should return to the view number default (${VIEW_DEFAULT})`, () => {
      const spacing: SpacingInNumber = "view";
      expect(calculateSpacingInNumber(spacing)).toBe(VIEW_DEFAULT);
    });

    it(`should return to the card number default (${CARD_DEFAULT})`, () => {
      const spacing: SpacingInNumber = "card";
      expect(calculateSpacingInNumber(spacing)).toBe(CARD_DEFAULT);
    });
  });

  describe("| calculateSpacing()", function () {
    it("should return undefined", () => {
      expect(calculateSpacing(undefined)).toBe(undefined);
    });

    it("should return to number", () => {
      const spacing: Spacing = 10;
      expect(calculateSpacing(spacing)).toBe(spacing);
    });

    it(`should return to the view number default (${VIEW_DEFAULT})`, () => {
      const spacing: Spacing = "view";
      expect(calculateSpacing(spacing)).toBe(VIEW_DEFAULT);
    });

    it(`should return to the card number default (${CARD_DEFAULT})`, () => {
      const spacing: Spacing = "card";
      expect(calculateSpacing(spacing)).toBe(CARD_DEFAULT);
    });

    it("should return spacing of type string with value in percentage", () => {
      const spacing: Spacing = "100%";
      expect(calculateSpacing(spacing)).toBe(spacing);
    });

    it("should return invalid string error", () => {
      let spacing: Spacing = "100";
      expect(() => calculateSpacing(spacing)).toThrow();

      spacing = "";
      expect(() => calculateSpacing(spacing)).toThrow();
    });
  });
});
