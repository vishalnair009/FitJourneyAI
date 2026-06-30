"use client";

export default function MissionCard() {
  const missions = [
    {
      title: "Drink 4 Litres of Water",
      completed: false,
      emoji: "💧",
    },
    {
      title: "Walk 8,000 Steps",
      completed: false,
      emoji: "👣",
    },
    {
      title: "Complete Today's Workout",
      completed: false,
      emoji: "🏋️",
    },
    {
      title: "Stay Within Calorie Goal",
      completed: false,
      emoji: "🥗",
    },
  ];

  const completedCount = missions.filter(
    (mission) => mission.completed
  ).length;

  const progress = (completedCount / missions.length) * 100;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-card-foreground">
          🎯 Today's Mission
        </h2>

        <p className="mt-1 text-sm text-muted">
          Complete all four missions to keep your streak alive.
        </p>
      </div>

      {/* Missions */}

      <div className="mt-8 space-y-4">

        {missions.map((mission) => (
          <div
            key={mission.title}
            className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/40 text-2xl">
                {mission.emoji}
              </div>

              <div>
                <p className="font-semibold text-card-foreground">
                  {mission.title}
                </p>

                <p className="text-sm text-muted">
                  {mission.completed
                    ? "Completed"
                    : "Pending"}
                </p>
              </div>

            </div>

            {mission.completed ? (
              <div className="text-2xl">✅</div>
            ) : (
              <div className="h-6 w-6 rounded-full border-2 border-border" />
            )}

          </div>
        ))}

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm font-medium text-muted">
            Today's Progress
          </span>

          <span className="font-bold text-card-foreground">
            {completedCount} / {missions.length}
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-muted/30">

          <div
            className="h-full rounded-full bg-green-600 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}