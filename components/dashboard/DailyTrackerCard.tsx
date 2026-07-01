"use client";

import { useDailyStore } from "../../app/store/dailyStore";

export default function DailyTrackerCard() {
  const progress = useDailyStore((state) => state.progress);

  const addWater = useDailyStore((state) => state.addWater);
  const addSteps = useDailyStore((state) => state.addSteps);
  const setWorkoutCompleted = useDailyStore(
    (state) => state.setWorkoutCompleted
  );

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-card-foreground">
        📊 Today's Tracker
      </h2>

      <p className="mt-1 text-sm text-muted">
        Update your daily progress.
      </p>

      <div className="mt-8 space-y-6">

        {/* Water */}

        <TrackerRow
          emoji="💧"
          title="Water"
          value={`${progress.water.toFixed(2)} L`}
          button="+250 ml"
          onClick={() => addWater(0.25)}
        />

        {/* Steps */}

        <TrackerRow
          emoji="👣"
          title="Steps"
          value={`${progress.steps}`}
          button="+500"
          onClick={() => addSteps(500)}
        />

        {/* Workout */}

        <TrackerRow
          emoji="🏋️"
          title="Workout"
          value={
            progress.workoutCompleted
              ? "Completed"
              : "Pending"
          }
          button={
            progress.workoutCompleted
              ? "Undo"
              : "Complete"
          }
          onClick={() =>
            setWorkoutCompleted(
              !progress.workoutCompleted
            )
          }
        />

      </div>

    </div>
  );
}

type TrackerRowProps = {
  emoji: string;
  title: string;
  value: string;
  button: string;
  onClick: () => void;
};

function TrackerRow({
  emoji,
  title,
  value,
  button,
  onClick,
}: TrackerRowProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-2xl">
          {emoji}
        </div>

        <div>

          <p className="font-semibold text-card-foreground">
            {title}
          </p>

          <p className="text-sm text-muted">
            {value}
          </p>

        </div>

      </div>

      <button
        onClick={onClick}
        className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
      >
        {button}
      </button>

    </div>
  );
}