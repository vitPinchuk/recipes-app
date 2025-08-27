import { z } from "zod";

export const ingredientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DAIRY",
    "SPICES",
    "OTHER",
  ]),
  unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),
  pricePerUnit: z
    .number()
    .min(0, { message: "Price must be positive" })
    .nullable()
    .or(z.nan().transform(() => null)),
  description: z.string().optional(),
});
