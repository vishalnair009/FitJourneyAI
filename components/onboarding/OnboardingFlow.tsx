"use client";

import { useEffect, useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import CoachIntroScreen from "./CoachIntroScreen";
import GoalSelectionScreen from "./GoalSelectionScreen";
import ProfileSetupScreen from "./ProfileSetupScreen";
import DashboardScreen from "../dashboard/DashboardScreen";
import AppShell from "../AppShell";


import { useUserStore } from "../../app/store/userStore";

type Screen =
  | "welcome"
  | "coach"
  | "goal"
  | "profile"
  | "dashboard";

export default function OnboardingFlow() {
  const hasCompletedOnboarding = useUserStore(
    (state) => state.hasCompletedOnboarding
  );

  const [hydrated, setHydrated] = useState(false);

  const [screen, setScreen] = useState<Screen>("welcome");

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    if (hasCompletedOnboarding) {
      setScreen("dashboard");
    } else {
      setScreen("welcome");
    }
  }, [hydrated, hasCompletedOnboarding]);

  if (!hydrated) {
    return null;
  }

  switch (screen) {
    case "welcome":
      return (
        <WelcomeScreen
          onContinue={() => setScreen("coach")}
        />
      );

    case "coach":
      return (
        <CoachIntroScreen
          onContinue={() => setScreen("goal")}
        />
      );

    case "goal":
      return (
        <GoalSelectionScreen
          onContinue={() => setScreen("profile")}
        />
      );

    case "profile":
      return (
        <ProfileSetupScreen
          onContinue={() => setScreen("dashboard")}
        />
      );

      case "dashboard":
        return <AppShell />;

    default:
      return null;
  }
}