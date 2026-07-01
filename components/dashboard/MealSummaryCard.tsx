"use client";

import { useMealStore } from "../../app/store/mealStore";

type MealSummaryCardProps = {
  onAddMeal: () => void;
};

export default function MealSummaryCard({
  onAddMeal,
}: MealSummaryCardProps) {
  const meals = useMealStore((state) => state.meals);

  const totalCalories = useMealStore((state) =>
    state.totalCalories()
  );

  const totalProtein = useMealStore((state) =>
    state.totalProtein()
  );

  const totalCarbs = useMealStore((state) =>
    state.totalCarbs()
  );

  const totalFat = useMealStore((state) =>
    state.totalFat()
  );

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-card-foreground">
            🍽 Today's Meals
          </h2>

          <p className="mt-1 text-sm text-muted">
            {meals.length} meal{meals.length !== 1 ? "s" : ""} logged
          </p>

        </div>

        <button
          onClick={onAddMeal}
          className="rounded-xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
        >
          + Add Meal
        </button>

      </div>

      <div className="mt-6 space-y-3">

        {meals.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-6 text-center text-muted">
            No meals logged today.
          </div>
        )}

        {meals.map((meal) => (
          <div
            key={meal.id}
            className="rounded-2xl border border-border bg-background p-4"
          >
            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold text-card-foreground">
                  {meal.mealType}
                </h3>

                <p className="mt-1 text-sm text-muted">
                  {meal.description}
                </p>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  {meal.calories} kcal
                </p>

                <p className="text-xs text-muted">
                  ⭐ {meal.healthScore}/10
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <NutritionBox
          title="Calories"
          value={`${totalCalories}`}
          unit="kcal"
        />

        <NutritionBox
          title="Protein"
          value={`${totalProtein}`}
          unit="g"
        />

        <NutritionBox
          title="Carbs"
          value={`${totalCarbs}`}
          unit="g"
        />

        <NutritionBox
          title="Fat"
          value={`${totalFat}`}
          unit="g"
        />

      </div>

    </div>
  );
}

type NutritionBoxProps = {
  title: string;
  value: string;
  unit: string;
};

function NutritionBox({
  title,
  value,
  unit,
}: NutritionBoxProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">

      <p className="text-sm text-muted">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-card-foreground">
        {value} {unit}
      </p>

    </div>
  );
}