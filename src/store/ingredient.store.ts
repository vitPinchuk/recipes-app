import {
  createIngredient,
  deleteIngredient,
  getIngredients,
} from "@/actions/ingredient";
import { IIngredient } from "@/types/ingredient";

import { create } from "zustand";

interface IngredientState {
  ingredients: IIngredient[];
  isLoading: boolean;
  error: string | null;
  loadIngredients: () => Promise<void>;
  addIngredient: (formData: FormData) => Promise<void>;
  removeIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IngredientState>((set) => ({
  ingredients: [],
  isLoading: false,
  error: null,
  loadIngredients: async () => {
    set({ isLoading: true, error: null });

    try {
      const result = await getIngredients();
      if (result.success) {
        set({ ingredients: result.ingredients, isLoading: false });
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.error("error", error);
      set({ error: "Failed to load ingredients", isLoading: false });
    }
  },
  addIngredient: async (formData: FormData) => {
    set({ error: null });

    try {
      const result = await createIngredient(formData);

      if (result.success) {
        set((state) => ({
          ingredients: [...state.ingredients, result.ingredient],
          isLoading: false,
        }));
      } else {
        const errorMessage =
          typeof result.error === "string"
            ? result.error
            : result.error instanceof Error
            ? result.error.message
            : "Unknown error";

        set({ error: errorMessage, isLoading: false });
      }
    } catch (error) {
      console.error("error", error);
      set({ error: "Failed to add ingredient", isLoading: false });
    }
  },
  removeIngredient: async (id: string) => {
    set({ error: null });

    try {
      const result = await deleteIngredient(id);

      if (result.success) {
        set((state) => ({
          ingredients: state.ingredients.filter(
            (ingredient) => ingredient.id !== id
          ),
          isLoading: false,
        }));
      } else {
        set({ error: result.error, isLoading: false });
      }
    } catch (error) {
      console.error("error", error);
      set({ error: "Failed to delete ingredient", isLoading: false });
    }
  },
}));
