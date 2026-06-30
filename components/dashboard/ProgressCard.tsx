type ProgressCardProps = {
    currentWeight: number;
    targetWeight: number;
  };
  
  export default function ProgressCard({
    currentWeight,
    targetWeight,
  }: ProgressCardProps) {
    const startingWeight = 98;
  
    const progress =
      ((startingWeight - currentWeight) /
        (startingWeight - targetWeight)) *
      100;
  
    const percentage = Math.max(
      0,
      Math.min(100, Math.round(progress))
    );
  
    return (
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold">
          🎯 Weight Progress
        </h2>
  
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>{currentWeight} kg</span>
            <span>{targetWeight} kg</span>
          </div>
  
          <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
  
          <p className="mt-3 text-center font-semibold text-green-700">
            {percentage}% Complete
          </p>
        </div>
      </div>
    );
  }