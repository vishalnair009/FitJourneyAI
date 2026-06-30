"use client";

type CoachCardProps = {
  message: string;
};

export default function CoachCard({
  message,
}: CoachCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/40 text-3xl">
          🤖
        </div>

        <div>
          <h2 className="text-xl font-bold text-card-foreground">
            Drona's Daily Briefing
          </h2>

          <p className="mt-1 text-sm text-muted">
            Personalized insights for today
          </p>
        </div>

      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-border" />

      {/* Message */}

      <p className="whitespace-pre-wrap leading-8 text-card-foreground">
        {message}
      </p>

    </div>
  );
}