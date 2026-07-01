"use client";

import DronaAvatar from "../ui/DronaAvatar";
import PrimaryButton from "../ui/PrimaryButton";

import { useUserStore } from "../../app/store/userStore";

type DronaCardProps = {
  onOpenChat: () => void;
};

export default function DronaCard({
  onOpenChat,
}: DronaCardProps) {
  const user = useUserStore((state) => state.user);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-100 p-6 shadow-xl dark:border-green-800 dark:from-green-950 dark:to-emerald-900">

      {/* Background Glow */}

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-400/20 blur-3xl" />

      <div className="relative flex flex-col items-center">

        <DronaAvatar
          mood="coach"
          size="xl"
        />

        <h2 className="mt-5 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Hi {user.name} 👋
        </h2>

        <p className="mt-4 max-w-xs text-center leading-7 text-gray-700 dark:text-gray-300">
          Ready to build better habits today?

          <br /><br />

          I'll guide you one step at a time.
        </p>

        <div className="mt-8 w-60">

          <PrimaryButton
            onClick={onOpenChat}
          >
            Talk to Drona
          </PrimaryButton>

        </div>

      </div>

    </div>
  );
}