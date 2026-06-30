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
      {/* Logo */}
      <div className="text-7xl">💪</div>

      {/* Title */}
      <h1 className="mt-10 text-5xl font-bold text-center text-gray-900">
        FitJourney AI
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-center text-gray-600 max-w-sm leading-7">
        Your personal AI fitness coach.
      </p>

      {/* Button */}
      <div className="mt-14 flex justify-center w-full">
        <div className="w-60">
          <PrimaryButton onClick={onContinue}>
            Let's Begin
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}