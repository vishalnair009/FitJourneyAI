"use client";

import PrimaryButton from "../ui/PrimaryButton";

type WelcomeScreenProps = {
  onContinue: () => void;
};

export default function WelcomeScreen({
  onContinue,
}: WelcomeScreenProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 bg-white">

      <div className="text-7xl">💪</div>

      <h1 className="mt-10 text-5xl font-bold text-center text-gray-900">
        FitJourney AI
      </h1>

      <p className="mt-6 text-center text-gray-600 max-w-sm leading-7">
        Your personal AI fitness coach.
      </p>

      <div className="mt-16 w-full max-w-sm">
        <PrimaryButton onClick={onContinue}>
          Meet Drona
        </PrimaryButton>
      </div>

    </section>
  );
}