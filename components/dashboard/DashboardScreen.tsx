"use client";

import CoachCard from "./CoachCard";
import { useUserStore } from "../../app/store/userStore";
import { useDailyStore } from "../../app/store/dailyStore";
import ProgressCard from "./ProgressCard";
import MissionCard from "./MissionCard";
import DronaCard from "./DronaCard";
import { useEffect, useState } from "react";
import { getDailyBrief } from "../../app/services/dashboardAI";

type DashboardScreenProps = {
  onOpenChat: () => void;
};

export default function DashboardScreen({
  onOpenChat,
}: DashboardScreenProps) {
  const user = useUserStore((state) => state.user);
  const progress = useDailyStore((state) => state.progress);
  const [dailyBrief, setDailyBrief] = useState(
    "🤖 Drona is preparing your daily briefing..."
  );
  useEffect(() => {
    console.log("Loading AI briefing...");
  
    async function loadBrief() {
      try {
        const brief = await getDailyBrief(user, progress);
  
        console.log("Brief received:", brief);
  
        setDailyBrief(brief);
      } catch (err) {
        console.error("Dashboard Error:", err);
  
        setDailyBrief(
          "Good morning! Let's have a fantastic day and stay consistent. 💪"
        );
      }
    }
  
    loadBrief();
  }, []);


  const setWater = useDailyStore((state) => state.setWater);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          Good Morning, {user.name} 👋
        </h1>

        <div className="mt-6">
          <DronaCard onOpenChat={onOpenChat} />
        </div>
        <div className="mt-6">
  <CoachCard message={dailyBrief} />
</div>

        <div className="mt-8">
          <MissionCard />
        </div>

        <div className="mt-6">
          <ProgressCard
            currentWeight={user.weight}
            targetWeight={user.targetWeight}
          />
        </div>

        <div className="mt-6 space-y-4">

          <DashboardCard
            title="🎯 Goal"
            value={user.goal}
          />

          <DashboardCard
            title="⚖️ Current Weight"
            value={`${user.weight} kg`}
          />

          <DashboardCard
            title="🎯 Target Weight"
            value={`${user.targetWeight} kg`}
          />

<div className="bg-white rounded-2xl p-5 shadow-sm border">

  <h3 className="text-gray-500 text-sm">
    💧 Water Intake
  </h3>

  <p className="text-2xl font-bold mt-2">
    {progress.water.toFixed(2)} L / 4 L
  </p>

  <button
    onClick={() =>
      setWater(
        Math.min(
          progress.water + 0.25,
          4
        )
      )
    }
    className="mt-4 w-full rounded-xl bg-blue-500 text-white py-3 hover:bg-blue-600 transition"
  >
    +250 ml
  </button>

</div>

<DashboardCard
  title="👣 Steps"
  value={`${progress.steps} / 8000`}
/>

<DashboardCard
  title="🏋 Workout"
  value={
    progress.workoutCompleted
      ? "Completed ✅"
      : "Not Started"
  }
/>

          <DashboardCard
            title="🔥 Current Streak"
            value="0 Days"
          />

        </div>

      </div>
    </section>
  );
}

type DashboardCardProps = {
  title: string;
  value: string;
};

function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}