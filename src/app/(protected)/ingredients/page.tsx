import type { Metadata } from "next";

import IngredientsTable from "@/components/UI/Tables/IngredientsTable";
import IngredientForm from "@/app/forms/ingredient.form";

export const metadata: Metadata = {
  title: "Ingredients",
  description: "Ingredients Page",
};

export default function IngredientsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <IngredientForm />
      <IngredientsTable />
    </div>
  );
}
