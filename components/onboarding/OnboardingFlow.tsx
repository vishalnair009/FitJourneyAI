"use client";

import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import CoachIntroScreen from "./CoachIntroScreen";
import GoalSelectionScreen from "./GoalSelectionScreen";
import ProfileSetupScreen from "./ProfileSetupScreen";
import DashboardScreen from "../dashboard/DashboardScreen";
import ChatScreen from "../chat/ChatScreen";

export default function OnboardingFlow() {
  const [screen, setScreen] = useState<
    "welcome" | "coach" | "goal" | "profile" | "dashboard" | "chat"
  >("welcome");

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
      return (
        <DashboardScreen
          onOpenChat={() => setScreen("chat")}
        />
      );

    case "chat":
      return (
        <ChatScreen
          onBack={() => setScreen("dashboard")}
        />
      );

    default:
      return null;
  }
}