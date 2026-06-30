"use client";


type CoachCardProps = {
  message: string;
};

export default function CoachCard({
  message,
}: CoachCardProps) {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-3xl p-6 shadow-lg">

      <div className="text-4xl">
        🤖
      </div>

      <h2 className="text-xl font-bold mt-3">
        Drona's Daily Briefing
      </h2>

      <p className="mt-4 whitespace-pre-wrap leading-7 text-green-50">
        {message}
      </p>

    </div>
  );
}