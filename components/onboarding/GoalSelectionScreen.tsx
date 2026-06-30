"use client";

import { useState } from "react";

import GoalCard from "./GoalCard";
import PrimaryButton from "../ui/PrimaryButton";

type GoalSelectionScreenProps = {
  onContinue: () => void;
};

export default function GoalSelectionScreen({
  onContinue,
}: GoalSelectionScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState("");

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Heading */}

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          What's your
          <br />
          main goal?
        </h1>

        <p className="mt-4 text-lg leading-7 text-muted">
          Choose the goal you want to focus on first.
          <br />
          You can always change it later.
        </p>

        {/* Goal Cards */}

        <div className="mt-10 space-y-4">

          <GoalCard
            emoji="🔥"
            title="Lose Weight"
            description="Burn fat and become healthier."
            selected={selectedGoal === "lose-weight"}
            onClick={() => setSelectedGoal("lose-weight")}
          />

          <GoalCard
            emoji="💪"
            title="Build Muscle"
            description="Gain lean muscle and strength."
            selected={selectedGoal === "build-muscle"}
            onClick={() => setSelectedGoal("build-muscle")}
          />

          <GoalCard
            emoji="🏃"
            title="Improve Fitness"
            description="Increase stamina and endurance."
            selected={selectedGoal === "improve-fitness"}
            onClick={() => setSelectedGoal("improve-fitness")}
          />

          <GoalCard
            emoji="❤️"
            title="Live a Healthier Life"
            description="Feel energetic every day."
            selected={selectedGoal === "healthy-life"}
            onClick={() => setSelectedGoal("healthy-life")}
          />

        </div>

        {/* Continue Button */}

        <div className="mt-12 w-60 mx-auto">
          <PrimaryButton
            onClick={onContinue}
            disabled={!selectedGoal}
          >
            Continue
          </PrimaryButton>
        </div>

      </div>

    </section>
  );
}