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
        w-full
        rounded-3xl
        p-5
        text-left
        transition-all
        duration-300
        border
        ${
          selected
            ? "border-green-600 bg-green-50 shadow-lg"
            : "border-gray-200 bg-white hover:border-green-500 hover:shadow-lg"
        }
      `}
      >
        <div className="flex items-center gap-4">
  
          <div className="text-4xl">
            {emoji}
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
  
            <p className="mt-1 text-gray-500">
              {description}
            </p>
          </div>
  
        </div>
      </button>
    );
  }