"use client";

import { useDailyStore } from "../../app/store/dailyStore";

export default function MissionCard() {
  const progress = useDailyStore((state) => state.progress);

  const missions = [
    {
      title: "Drink 4 Litres of Water",
      emoji: "💧",
      completed: progress.water >= 4,
      subtitle: `${progress.water.toFixed(2)} / 4 L`,
    },
    {
      title: "Walk 8,000 Steps",
      emoji: "👣",
      completed: progress.steps >= 8000,
      subtitle: `${progress.steps} / 8000`,
    },
    {
      title: "Complete Today's Workout",
      emoji: "🏋️",
      completed: progress.workoutCompleted,
      subtitle: progress.workoutCompleted
        ? "Workout Completed"
        : "Not Started",
    },
    {
      title: "Stay Within Calorie Goal",
      emoji: "🥗",
      completed: false,
      subtitle: "Coming Soon",
    },
  ];

  const completedCount = missions.filter(
    (mission) => mission.completed
  ).length;

  const percentage = Math.round(
    (completedCount / missions.length) * 100
  );

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-card-foreground">
          🎯 Today's Mission
        </h2>

        <p className="mt-1 text-sm text-muted">
          Complete your daily goals to stay on track.
        </p>
      </div>

      {/* Mission List */}

      <div className="mt-8 space-y-4">

        {missions.map((mission) => (
          <div
            key={mission.title}
            className={`
              flex
              items-center
              justify-between
              rounded-2xl
              border
              p-4
              transition-all
              duration-300
              ${
                mission.completed
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-border bg-background"
              }
            `}
          >
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-2xl">
                {mission.emoji}
              </div>

              <div>
                <h3 className="font-semibold text-card-foreground">
                  {mission.title}
                </h3>

                <p className="text-sm text-muted">
                  {mission.subtitle}
                </p>
              </div>

            </div>

            {mission.completed ? (
              <div className="text-3xl">✅</div>
            ) : (
              <div className="h-7 w-7 rounded-full border-2 border-border" />
            )}

          </div>
        ))}

      </div>

      {/* Overall Progress */}

      <div className="mt-8">

        <div className="mb-3 flex justify-between">

          <span className="text-sm font-medium text-muted">
            Overall Progress
          </span>

          <span className="font-bold text-card-foreground">
            {completedCount} / {missions.length}
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-muted/30">

          <div
            className="h-full rounded-full bg-green-600 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}