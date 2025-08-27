export const CATEGORY_OPTIONS = [
  { value: "VEGETABLES", label: "Vegetables" },
  { value: "FRUITS", label: "Fruits" },
  { value: "MEAT", label: "Meat" },
  { value: "DAIRY", label: "Dairy" },
  { value: "SPICES", label: "Spices" },
  { value: "OTHER", label: "Other" },
] as const;

export const UNIT_OPTIONS = [
  { value: "GRAMS", label: "Grams" },
  { value: "KILOGRAMS", label: "Kilograms" },
  { value: "LITERS", label: "Liters" },
  { value: "MILLILITERS", label: "Milliliters" },
  { value: "PIECES", label: "Pieces" },
] as const;

export const UNIT_ABBREVIATIONS = [
  { value: "GRAMS", label: "g" },
  { value: "KILOGRAMS", label: "kg" },
  { value: "LITERS", label: "L" },
  { value: "MILLILITERS", label: "ml" },
  { value: "PIECES", label: "pcs" },
] as const;
