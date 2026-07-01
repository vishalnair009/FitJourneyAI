"use client";

import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import Typewriter from "../animations/Typewriter";
import PrimaryButton from "../ui/PrimaryButton";

type CoachIntroScreenProps = {
  onContinue: () => void;
};

export default function CoachIntroScreen({
  onContinue,
}: CoachIntroScreenProps) {
  return (
    <section className="min-h-screen bg-background flex justify-center">

      <div className="w-full max-w-md px-6 py-10 flex flex-col items-center justify-center">

        <FadeIn>

          <Image
            src="/branding/drona/coach.png"
            alt="Drona AI Coach"
            width={240}
            height={240}
            priority
            className="drop-shadow-2xl"
          />

        </FadeIn>

        <FadeIn delay={0.2}>

          <h1 className="mt-8 text-center text-4xl font-bold text-foreground">
            Meet Drona 👋
          </h1>

        </FadeIn>

        <FadeIn delay={0.4}>

          <h2 className="mt-4 text-center text-2xl font-semibold text-foreground">
            <Typewriter text="Your Personal AI Fitness Coach" />
          </h2>

        </FadeIn>

        <FadeIn delay={1.4}>

          <p className="mt-8 text-center leading-8 text-muted">

            I'm here to guide you every day.

            <br /><br />

            We'll build healthier habits together.

            <br /><br />

            No crash diets.

            <br />

            No impossible routines.

            <br /><br />

            Just consistent progress.

            <br /><br />

            One day at a time.

          </p>

        </FadeIn>

        <FadeIn delay={2.2}>

          <div className="mt-14 w-64">

            <PrimaryButton
              onClick={onContinue}
            >
              Continue
            </PrimaryButton>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}