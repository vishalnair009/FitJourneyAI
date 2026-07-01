"use client";

import { useState } from "react";

import BottomNavigation, {
  Tab,
} from "./navigation/BottomNavigation";

import DashboardScreen from "./dashboard/DashboardScreen";
import ChatScreen from "./chat/ChatScreen";

export default function AppShell() {
  const [tab, setTab] = useState<Tab>("home");

  return (
    <div className="pb-24">

      {tab === "home" && (
        <DashboardScreen
          onOpenChat={() => setTab("drona")}
        />
      )}

      {tab === "journey" && (
        <div className="p-6">
          <h1 className="text-3xl font-bold">
            🏆 Journey
          </h1>

          <p className="mt-4 text-muted">
            Coming in the next commit...
          </p>
        </div>
      )}

      {tab === "drona" && (
        <ChatScreen
          onBack={() => setTab("home")}
        />
      )}

      {tab === "meals" && (
        <div className="p-6">
          <h1 className="text-3xl font-bold">
            🍽 Meals
          </h1>

          <p className="mt-4 text-muted">
            Coming in the next commit...
          </p>
        </div>
      )}

      {tab === "profile" && (
        <div className="p-6">
          <h1 className="text-3xl font-bold">
            👤 Profile
          </h1>

          <p className="mt-4 text-muted">
            Coming in the next commit...
          </p>
        </div>
      )}

      <BottomNavigation
        currentTab={tab}
        onChange={setTab}
      />

    </div>
  );
}