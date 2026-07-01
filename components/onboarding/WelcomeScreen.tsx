"use client";

import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import PrimaryButton from "../ui/PrimaryButton";

type WelcomeScreenProps = {
  onContinue: () => void;
};

export default function WelcomeScreen({
  onContinue,
}: WelcomeScreenProps) {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center">

      <div className="w-full max-w-md px-8 flex flex-col items-center">

        <FadeIn>

          <Image
            src="/branding/logo.png"
            alt="FitJourney AI"
            width={170}
            height={170}
            priority
            className="drop-shadow-xl"
          />

        </FadeIn>

        <FadeIn delay={0.2}>

          <h1 className="mt-10 text-center text-5xl font-extrabold tracking-tight text-foreground">
            FitJourney AI
          </h1>

        </FadeIn>

        <FadeIn delay={0.4}>

          <p className="mt-6 max-w-sm text-center text-lg leading-8 text-muted">
            Build Better Habits.
            <br />
            One Day at a Time.
          </p>

        </FadeIn>

        <FadeIn delay={0.6}>

          <div className="mt-16 w-64">

            <PrimaryButton onClick={onContinue}>
              Let's Begin
            </PrimaryButton>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}