"use client";

import PrimaryButton from "../ui/PrimaryButton";

type WelcomeScreenProps = {
  onContinue: () => void;
};

export default function WelcomeScreen({
  onContinue,
}: WelcomeScreenProps) {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="w-full max-w-md text-center">

        {/* Logo */}

        <div className="flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 shadow-lg">
            <span className="text-6xl">💪</span>
          </div>
        </div>

        {/* App Name */}

        <h1 className="mt-10 text-5xl font-extrabold tracking-tight text-foreground">
          FitJourney AI
        </h1>

        {/* Tagline */}

        <p className="mt-6 text-lg leading-8 text-muted">
          Your personal AI fitness coach that helps you
          build healthy habits, lose weight and stay
          motivated every single day.
        </p>

        {/* Button */}

        <div className="mt-14 w-60 mx-auto">
          <PrimaryButton onClick={onContinue}>
            Let's Begin
          </PrimaryButton>
        </div>

        {/* Version */}

        <p className="mt-10 text-sm text-muted">
          Powered by Drona AI
        </p>

      </div>

    </section>
  );
}