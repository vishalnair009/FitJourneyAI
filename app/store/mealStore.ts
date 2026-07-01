import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Meal = {
  id: string;
  mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  healthScore: number;
  advice: string;
  createdAt: string;
};

type MealStore = {
  meals: Meal[];

  addMeal: (meal: Meal) => void;

  deleteMeal: (id: string) => void;

  clearMeals: () => void;

  totalCalories: () => number;

  totalProtein: () => number;

  totalCarbs: () => number;

  totalFat: () => number;
};

export const useMealStore = create<MealStore>()(
  persist(
    (set, get) => ({
      meals: [],

      addMeal: (meal) =>
        set((state) => ({
          meals: [...state.meals, meal],
        })),

      deleteMeal: (id) =>
        set((state) => ({
          meals: state.meals.filter((meal) => meal.id !== id),
        })),

      clearMeals: () =>
        set({
          meals: [],
        }),

      totalCalories: () =>
        get().meals.reduce(
          (sum, meal) => sum + meal.calories,
          0
        ),

      totalProtein: () =>
        get().meals.reduce(
          (sum, meal) => sum + meal.protein,
          0
        ),

      totalCarbs: () =>
        get().meals.reduce(
          (sum, meal) => sum + meal.carbs,
          0
        ),

      totalFat: () =>
        get().meals.reduce(
          (sum, meal) => sum + meal.fat,
          0
        ),
    }),
    {
      name: "fitjourney-meals",
    }
  )
);