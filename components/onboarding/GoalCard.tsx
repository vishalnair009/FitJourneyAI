type GoalCardProps = {
  emoji: string;
  title: string;
  description: string;
  onClick: () => void;
  selected: boolean;
};

export default function GoalCard({
  emoji,
  title,
  description,
  onClick,
  selected,
}: GoalCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        w-full
        rounded-3xl
        border
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${
          selected
            ? "border-green-500 bg-green-50 dark:bg-green-900/20 shadow-xl"
            : "border-border bg-card"
        }
      `}
    >
      {/* Selected Badge */}

      {selected && (
        <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm text-white">
          ✓
        </div>
      )}

      <div className="flex items-center gap-5">

        {/* Emoji */}

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30 text-3xl">
          {emoji}
        </div>

        {/* Text */}

        <div className="flex-1">

          <h3 className="text-xl font-bold text-card-foreground">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted">
            {description}
          </p>

        </div>

      </div>
    </button>
  );
}