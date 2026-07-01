"use client";

import { useState } from "react";
import { useMealStore } from "../../app/store/mealStore";

type AddMealModalProps = {
  onClose: () => void;
};

type MealResult = {
  mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  healthScore: number;
  advice: string;
};

export default function AddMealModal({
  onClose,
}: AddMealModalProps) {
  const addMeal = useMealStore((state) => state.addMeal);

  const [mealType, setMealType] = useState<
    "Breakfast" | "Lunch" | "Dinner" | "Snack"
  >("Breakfast");

  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<MealResult | null>(null);

  async function analyzeMeal() {
    if (!description.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/meal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mealType,
          description,
        }),
      });

      const data = await response.json();

      setResult(data);
    } catch {
      alert("Unable to analyze meal.");
    }

    setLoading(false);
  }

  function saveMeal() {
    if (!result) return;

    addMeal({
      ...result,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">

      <div className="w-full max-w-md rounded-3xl bg-card p-6 shadow-2xl">

        <h2 className="text-2xl font-bold text-card-foreground">
          🍽 Add Meal
        </h2>

        <p className="mt-2 text-muted">
          Let Drona analyze your meal.
        </p>

        <select
          value={mealType}
          onChange={(e) =>
            setMealType(
              e.target.value as MealResult["mealType"]
            )
          }
          className="mt-6 w-full rounded-2xl border border-border bg-background p-4"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Example: 2 eggs, oats and one banana..."
          rows={5}
          className="mt-5 w-full rounded-2xl border border-border bg-background p-4"
        />

        <button
          onClick={analyzeMeal}
          disabled={loading}
          className="mt-5 w-full rounded-2xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
        >
          {loading
            ? "Analyzing..."
            : "Analyze with Drona"}
        </button>

        {result && (
          <div className="mt-6 rounded-2xl border border-border bg-background p-5">

            <h3 className="font-bold text-lg">
              Nutrition Summary
            </h3>

            <div className="mt-4 space-y-2">

              <p>🔥 Calories: {result.calories}</p>

              <p>🥩 Protein: {result.protein} g</p>

              <p>🍚 Carbs: {result.carbs} g</p>

              <p>🥑 Fat: {result.fat} g</p>

              <p>
                💚 Health Score:
                {" "}
                {result.healthScore}/10
              </p>

            </div>

            <div className="mt-5 rounded-xl bg-green-100 dark:bg-green-900/30 p-4">

              <p className="font-semibold">
                🤖 Drona says
              </p>

              <p className="mt-2 text-sm">
                {result.advice}
              </p>

            </div>

            <button
              onClick={saveMeal}
              className="mt-6 w-full rounded-2xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Save Meal
            </button>

          </div>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-2xl border border-border py-3"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}