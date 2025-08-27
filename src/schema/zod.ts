import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be less than 32 characters"),
});

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
    .or(z.nan().transform(() => null)), // чтобы null/NaN пропускались
  description: z.string().optional(),
});
