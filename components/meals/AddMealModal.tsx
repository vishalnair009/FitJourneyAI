"use client";

import { useRef, useState } from "react";
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

  const resultRef = useRef<HTMLDivElement>(null);

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

      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-card p-6 shadow-2xl">

        <h2 className="text-2xl font-bold text-card-foreground">
          🍽 Add Meal
        </h2>

        <p className="mt-2 text-muted">
          Describe your meal and let Drona analyze it.
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
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Example: 2 eggs, oats and one banana..."
          className="mt-5 w-full rounded-2xl border border-border bg-background p-4 resize-none"
        />

        <button
          onClick={analyzeMeal}
          disabled={loading}
          className="mt-5 w-full rounded-2xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
        >
          {loading
            ? "🤖 Drona is analyzing..."
            : "Analyze with Drona"}
        </button>

        {result && (
          <div
            ref={resultRef}
            className="mt-6 rounded-2xl border border-border bg-background p-5"
          >

            <h3 className="text-xl font-bold text-card-foreground">
              📊 Nutrition Summary
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-4">

              <StatCard
                title="Calories"
                value={`${result.calories} kcal`}
              />

              <StatCard
                title="Protein"
                value={`${result.protein} g`}
              />

              <StatCard
                title="Carbs"
                value={`${result.carbs} g`}
              />

              <StatCard
                title="Fat"
                value={`${result.fat} g`}
              />

            </div>

            <div className="mt-6 rounded-2xl bg-green-100 dark:bg-green-900/30 p-5">

              <h4 className="font-bold">
                💚 Health Score
              </h4>

              <p className="mt-2 text-lg font-semibold">
                {result.healthScore}/10
              </p>

            </div>

            <div className="mt-5 rounded-2xl bg-blue-100 dark:bg-blue-900/30 p-5">

              <h4 className="font-bold">
                🤖 Drona's Advice
              </h4>

              <p className="mt-2 leading-7">
                {result.advice}
              </p>

            </div>

            <button
              onClick={saveMeal}
              className="mt-6 w-full rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Save Meal
            </button>

          </div>
        )}

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-2xl border border-border py-3"
        >
          Close
        </button>

      </div>

    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
};

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">

      <p className="text-sm text-muted">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-card-foreground">
        {value}
      </p>

    </div>
  );
}