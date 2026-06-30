"use client";

import PrimaryButton from "../ui/PrimaryButton";
import { useUserStore } from "../../app/store/userStore";

type DronaCardProps = {
  onOpenChat: () => void;
};

export default function DronaCard({ onOpenChat }: DronaCardProps) {
  const user = useUserStore((state) => state.user);

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-3xl p-6 shadow-lg">
      <div className="text-5xl mb-4">🤖</div>

      <h2 className="text-2xl font-bold">
        Good Morning, {user.name}!
      </h2>

      <p className="mt-4 text-green-100">
        Today's goal: <strong>{user.goal}</strong>
      </p>

      <p className="mt-2 text-green-100">
        Current Weight: <strong>{user.weight} kg</strong>
      </p>

      <p className="text-green-100">
        Target Weight: <strong>{user.targetWeight} kg</strong>
      </p>

      <div className="mt-8">
        <PrimaryButton onClick={onOpenChat}>
          Talk to Drona
        </PrimaryButton>
      </div>
    </div>
  );
}