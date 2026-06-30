"use client";

import { useState } from "react";
import { analyzeMeal } from "../services/mealAI";
import { useMealStore } from "../store/mealStore";

export default function MealTestPage() {
  const [meal, setMeal] = useState("");
  const [result, setResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const addMeal = useMealStore((state) => state.addMeal);

  async function analyze() {
    if (!meal.trim()) {
      alert("Please enter a meal first.");
      return;
    }

    try {
      setResult(null);
      setIsAnalyzing(true);

      const response = await analyzeMeal(meal);

      setResult(JSON.parse(response.result));
    } catch (error) {
      console.error(error);
      alert("Failed to analyze meal.");
    } finally {
      setIsAnalyzing(false);
    }
  }

  function saveMeal() {
    if (!result) return;

    addMeal({
      id: crypto.randomUUID(),
      mealType: result.mealType,
      description: meal,
      calories: result.calories,
      protein: result.protein,
    });

    alert("✅ Meal Saved!");

    setMeal("");
    setResult(null);
  }

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          🍽 AI Meal Logger
        </h1>

        <textarea
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          placeholder={`Describe your meal...

Example:

2 Eggs
1 Bowl Oats
Black Coffee`}
          className="w-full h-48 rounded-2xl border border-gray-300 bg-white p-5 text-black text-lg"
        />

        <button
          onClick={analyze}
          disabled={isAnalyzing}
          className={`w-full mt-6 rounded-2xl py-4 text-xl font-semibold text-white transition ${
            isAnalyzing
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isAnalyzing
            ? "🧠 Drona is analyzing..."
            : "🍽 Analyze Meal"}
        </button>

        {isAnalyzing && (
          <div className="mt-8 bg-white rounded-3xl p-8 shadow text-center">

            <div className="text-6xl animate-pulse">
              🤖
            </div>

            <h2 className="text-2xl font-bold mt-5 text-black">
              Drona is analyzing your meal...
            </h2>

            <p className="mt-4 text-gray-600 leading-8">
              🍽 Estimating calories...
              <br />
              💪 Calculating protein...
              <br />
              🥗 Checking nutrition...
            </p>

          </div>
        )}

        {result && (
          <>
            <div className="mt-8 bg-white rounded-3xl p-8 shadow">

              <h2 className="text-3xl font-bold text-black">
                🍽 {result.mealType}
              </h2>

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="bg-orange-50 rounded-2xl p-5">
                  <p className="text-gray-500">
                    🔥 Calories
                  </p>

                  <p className="text-3xl font-bold text-orange-600 mt-2">
                    {result.calories}
                  </p>
                </div>

                <div className="bg-green-50 rounded-2xl p-5">
                  <p className="text-gray-500">
                    💪 Protein
                  </p>

                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {result.protein} g
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-5">
                  <p className="text-gray-500">
                    🌾 Carbs
                  </p>

                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    {result.carbs} g
                  </p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-5">
                  <p className="text-gray-500">
                    🥑 Fat
                  </p>

                  <p className="text-3xl font-bold text-purple-600 mt-2">
                    {result.fat} g
                  </p>
                </div>

              </div>

              <div className="mt-8">

                <h3 className="text-xl font-bold text-black">
                  ⭐ Meal Score
                </h3>

                <div className="text-4xl mt-3">
                  {"⭐".repeat(result.score)}
                  {"☆".repeat(5 - result.score)}
                </div>

              </div>

            </div>

            <div className="mt-6 bg-green-600 rounded-3xl p-8 shadow text-white">

              <h2 className="text-2xl font-bold">
                🤖 Drona's Advice
              </h2>

              <p className="mt-4 text-lg leading-8">
                {result.advice}
              </p>

            </div>

            <button
              onClick={saveMeal}
              className="w-full mt-6 rounded-2xl bg-green-700 hover:bg-green-800 text-white py-4 text-xl font-bold transition"
            >
              💾 Save Meal
            </button>
          </>
        )}

      </div>
    </main>
  );
}