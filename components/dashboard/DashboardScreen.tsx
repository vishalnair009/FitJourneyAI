"use client";

import { useEffect, useState } from "react";

import CoachCard from "./CoachCard";
import DronaCard from "./DronaCard";
import MissionCard from "./MissionCard";
import ProgressCard from "./ProgressCard";

import { useUserStore } from "../../app/store/userStore";
import { useDailyStore } from "../../app/store/dailyStore";
import { getDailyBrief } from "../../app/services/dashboardAI";

type DashboardScreenProps = {
  onOpenChat: () => void;
};

export default function DashboardScreen({
  onOpenChat,
}: DashboardScreenProps) {
  const user = useUserStore((state) => state.user);
  const progress = useDailyStore((state) => state.progress);

  const setWater = useDailyStore((state) => state.setWater);

  const [dailyBrief, setDailyBrief] = useState(
    "🤖 Drona is preparing your daily briefing..."
  );

  useEffect(() => {
    async function loadBrief() {
      try {
        const brief = await getDailyBrief(user, progress);
        setDailyBrief(brief);
      } catch {
        setDailyBrief(
          "Good morning! Let's have a fantastic day and stay consistent. 💪"
        );
      }
    }

    loadBrief();
  }, []);

  return (
    <section className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-6 py-10">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
            Good Morning, {user.name} 👋
          </h1>

          <p className="mt-2 text-muted">
            Every healthy choice today brings you closer to your goal.
          </p>
        </div>

        {/* Drona */}

        <div className="mb-6">
          <DronaCard onOpenChat={onOpenChat} />
        </div>

        {/* AI Brief */}

        <div className="mb-8">
          <CoachCard message={dailyBrief} />
        </div>

        {/* Mission */}

        <div className="mb-8">
          <MissionCard />
        </div>

        {/* Progress */}

        <div className="mb-8">
          <ProgressCard
            currentWeight={user.weight}
            targetWeight={user.targetWeight}
          />
        </div>

        <div className="space-y-5">

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

          {/* Water */}

          <div className="rounded-3xl bg-card border border-border shadow-lg p-6">

            <h3 className="text-sm font-medium text-muted">
              💧 Water Intake
            </h3>

            <p className="mt-2 text-3xl font-bold text-card-foreground">
              {progress.water.toFixed(2)} L / 4 L
            </p>

            <button
              onClick={() =>
                setWater(Math.min(progress.water + 0.25, 4))
              }
              className="mt-5 w-full rounded-2xl bg-blue-500 py-3 font-semibold text-white transition hover:bg-blue-600"
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
    <div className="rounded-3xl bg-card border border-border shadow-lg p-6">

      <h3 className="text-sm font-medium text-muted">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-card-foreground">
        {value}
      </p>

    </div>
  );
}