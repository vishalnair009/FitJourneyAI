"use client";

import { useEffect, useState } from "react";

import CoachCard from "./CoachCard";
import DronaCard from "./DronaCard";
import MissionCard from "./MissionCard";
import ProgressCard from "./ProgressCard";
import DailyTrackerCard from "./DailyTrackerCard";
import MealSummaryCard from "./MealSummaryCard";

import AddMealModal from "../meals/AddMealModal";

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

  const [dailyBrief, setDailyBrief] = useState(
    "🤖 Drona is preparing your daily briefing..."
  );

  const [showMealModal, setShowMealModal] =
    useState(false);

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
  }, [user, progress]);

  return (
    <>
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

          {/* Meet Drona */}

          <div className="mb-6">
            <DronaCard onOpenChat={onOpenChat} />
          </div>

          {/* AI Daily Brief */}

          <div className="mb-8">
            <CoachCard message={dailyBrief} />
          </div>

          {/* Today's Mission */}

          <div className="mb-8">
            <MissionCard />
          </div>

          {/* Weight Progress */}

          <div className="mb-8">
            <ProgressCard
              currentWeight={user.weight}
              targetWeight={user.targetWeight}
            />
          </div>

          {/* Daily Tracker */}

          <div className="mb-8">
            <DailyTrackerCard />
          </div>

          {/* Meal Summary */}

          <div className="mb-8">
            <MealSummaryCard
              onAddMeal={() =>
                setShowMealModal(true)
              }
            />
          </div>

        </div>
      </section>

      {showMealModal && (
        <AddMealModal
          onClose={() =>
            setShowMealModal(false)
          }
        />
      )}
    </>
  );
}