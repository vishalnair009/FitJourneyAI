"use client";

import DronaAvatar from "../ui/DronaAvatar";
import PrimaryButton from "../ui/PrimaryButton";
import FadeIn from "../animations/FadeIn";
import Typewriter from "../animations/Typewriter";
import { useUserStore } from "../../app/store/userStore";

type CoachIntroScreenProps = {
  onContinue: () => void;
};

export default function CoachIntroScreen({
  onContinue,
}: CoachIntroScreenProps) {

  const user = useUserStore((state) => state.user);

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="w-full max-w-md text-center">

        <FadeIn>
          <div className="flex justify-center">
            <DronaAvatar />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-foreground">
            Hi {user.name || "there"} 👋
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="mt-5 text-2xl font-semibold text-foreground">
            <Typewriter text="I'm Drona, your AI fitness coach." />
          </h2>
        </FadeIn>

        <FadeIn delay={1.5}>
          <div className="mt-8 space-y-5 text-muted leading-8">

            <p>
              I'm here to help you become healthier,
              stronger and more confident.
            </p>

            <p>
              No crash diets.
              <br />
              No impossible routines.
            </p>

            <p>
              Just one small step every day.
            </p>

            <p className="font-semibold text-foreground">
              We'll do this together. 💪
            </p>

          </div>
        </FadeIn>

        <FadeIn delay={2.5}>
          <div className="mt-14 w-60 mx-auto">
            <PrimaryButton onClick={onContinue}>
              Let's Begin
            </PrimaryButton>
          </div>
        </FadeIn>

      </div>

    </section>
  );
}