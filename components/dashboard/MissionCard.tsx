"use client";

export default function MissionCard() {
  const missions = [
    {
      title: "Drink 4 Litres of Water",
      completed: false,
    },
    {
      title: "Walk 8,000 Steps",
      completed: false,
    },
    {
      title: "Complete Today's Workout",
      completed: false,
    },
    {
      title: "Stay Within Calorie Goal",
      completed: false,
    },
  ];

  const completedCount = missions.filter(
    (mission) => mission.completed
  ).length;

  const progress = (completedCount / missions.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">

      <h2 className="text-xl font-bold">
        🎯 Today's Mission
      </h2>

      <p className="text-gray-500 mt-1">
        Complete all 4 missions today.
      </p>

      <div className="mt-6 space-y-4">
        {missions.map((mission) => (
          <div
            key={mission.title}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-300" />

            <span className="text-gray-700">
              {mission.title}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Today's Progress</span>
          <span>{completedCount}/4</span>
        </div>

        <div className="mt-2 h-3 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-green-600 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

    </div>
  );
}