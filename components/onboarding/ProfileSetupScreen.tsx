"use client";

import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import { useUserStore } from "../../app/store/userStore";

type ProfileSetupScreenProps = {
  onContinue: () => void;
};

export default function ProfileSetupScreen({
  onContinue,
}: ProfileSetupScreenProps) {
  const [name, setName] = useState("Vishal");
  const [age, setAge] = useState("33");
  const [height, setHeight] = useState("180");
  const [weight, setWeight] = useState("98");
  const [targetWeight, setTargetWeight] = useState("80");
  const updateUser = useUserStore((state) => state.updateUser);

  const isValid =
    name &&
    age &&
    height &&
    weight &&
    targetWeight;

  return (
    <section className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-md px-6 py-10">

        <h1 className="text-4xl font-bold text-center text-gray-900">
          Tell us about yourself
        </h1>

        <p className="text-center text-gray-500 mt-3">
          This helps Drona personalize your journey.
        </p>

        <div className="mt-10 space-y-5">

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Current Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Target Weight (kg)"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
          />

        </div>

        <div className="mt-10">
        <PrimaryButton
  disabled={!isValid}
  onClick={() => {
    updateUser({
      name,
      age: Number(age),
      height: Number(height),
      weight: Number(weight),
      targetWeight: Number(targetWeight),
    });

    onContinue();
  }}
>
  Continue
</PrimaryButton>
        </div>

      </div>
    </section>
  );
}