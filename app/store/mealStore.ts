import { create } from "zustand";

export type Meal = {
  id: string;
  mealType: string;
  description: string;
  calories: number;
  protein: number;
};

type MealStore = {
  meals: Meal[];

  addMeal: (meal: Meal) => void;

  clearMeals: () => void;
};

export const useMealStore = create<MealStore>((set) => ({
  meals: [],

  addMeal: (meal) =>
    set((state) => ({
      meals: [...state.meals, meal],
    })),

  clearMeals: () =>
    set({
      meals: [],
    }),
}));