"use client";

import DronaAvatar from "../ui/DronaAvatar";

type CoachCardProps = {
  message: string;
};

export default function CoachCard({
  message,
}: CoachCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      <div className="flex items-start gap-4">

        <DronaAvatar
          mood="coach"
          size="md"
        />

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <h2 className="text-xl font-bold text-card-foreground">
              Drona
            </h2>

            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
              AI Coach
            </span>

          </div>

          <p className="mt-4 whitespace-pre-line leading-8 text-muted">
            {message}
          </p>

        </div>

      </div>

    </div>
  );
}