"use client";

import DronaAvatar from "../ui/DronaAvatar";
import PrimaryButton from "../ui/PrimaryButton";
import FadeIn from "../animations/FadeIn";
import Typewriter from "../animations/Typewriter";

type CoachIntroScreenProps = {
  onContinue: () => void;
};

export default function CoachIntroScreen({
  onContinue,
}: CoachIntroScreenProps) {
  return (
    <section className="min-h-screen flex justify-center bg-white">
      <div className="w-full max-w-md px-6 py-10 flex flex-col items-center justify-center">

        <FadeIn>
          <DronaAvatar />
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-10 text-4xl font-bold text-center text-gray-900">
            Hi Vishal 👋
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="mt-4 text-2xl font-semibold text-center text-gray-800">
            <Typewriter text="I'm Drona, your AI fitness coach." />
          </h2>
        </FadeIn>

        <FadeIn delay={1.5}>
          <p className="mt-8 text-center text-gray-600 leading-7">
            I'm here to help you become healthier,
            stronger and more confident.

            <br /><br />

            No crash diets.

            <br />

            No impossible routines.

            <br /><br />

            Just one small step every day.

            <br /><br />

            We'll do this together.
          </p>
        </FadeIn>

        <FadeIn delay={2.5}>
          <div className="mt-14 w-full">
            <PrimaryButton onClick={onContinue}>
              Let's Begin
            </PrimaryButton>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}