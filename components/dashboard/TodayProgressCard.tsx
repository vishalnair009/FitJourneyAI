"use client";

import { useDailyStore } from "../../app/store/dailyStore";
import { useMealStore } from "../../app/store/mealStore";

export default function TodayProgressCard() {
  const progress = useDailyStore((state) => state.progress);
  const meals = useMealStore((state) => state.meals);

  const waterCompleted = progress.water >= 4;
  const stepsCompleted = progress.steps >= 8000;
  const workoutCompleted = progress.workoutCompleted;
  const mealsCompleted = meals.length >= 3;

  const completed = [
    waterCompleted,
    stepsCompleted,
    workoutCompleted,
    mealsCompleted,
  ].filter(Boolean).length;

  const percentage = Math.round((completed / 4) * 100);

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-card-foreground">
            🚀 Today's Progress
          </h2>

          <p className="mt-1 text-sm text-muted">
            Keep completing today's goals.
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold text-green-600">
            {percentage}%
          </p>

          <p className="text-sm text-muted">
            Complete
          </p>
        </div>

      </div>

      <div className="mt-6 h-4 overflow-hidden rounded-full bg-muted/30">

        <div
          className="h-full rounded-full bg-green-600 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="mt-8 space-y-4">

        <ProgressItem
          title="Water Goal"
          completed={waterCompleted}
        />

        <ProgressItem
          title="Steps Goal"
          completed={stepsCompleted}
        />

        <ProgressItem
          title="Workout"
          completed={workoutCompleted}
        />

        <ProgressItem
          title="Meals Logged"
          completed={mealsCompleted}
        />

      </div>

    </div>
  );
}

type ProgressItemProps = {
  title: string;
  completed: boolean;
};

function ProgressItem({
  title,
  completed,
}: ProgressItemProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-4">

      <span className="font-medium text-card-foreground">
        {title}
      </span>

      <span className="text-2xl">
        {completed ? "✅" : "⭕"}
      </span>

    </div>
  );
}