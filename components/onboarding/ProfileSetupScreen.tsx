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
    name.trim() !== "" &&
    age.trim() !== "" &&
    height.trim() !== "" &&
    weight.trim() !== "" &&
    targetWeight.trim() !== "";

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Heading */}

        <h1 className="text-4xl font-extrabold tracking-tight text-center text-foreground">
          Tell us about yourself
        </h1>

        <p className="mt-3 text-center text-lg text-muted">
          This helps Drona personalize your fitness journey.
        </p>

        {/* Form */}

        <div className="mt-10 space-y-5">

          <InputField
            placeholder="Your Name"
            value={name}
            onChange={setName}
          />

          <InputField
            placeholder="Age"
            value={age}
            onChange={setAge}
            type="number"
          />

          <InputField
            placeholder="Height (cm)"
            value={height}
            onChange={setHeight}
            type="number"
          />

          <InputField
            placeholder="Current Weight (kg)"
            value={weight}
            onChange={setWeight}
            type="number"
          />

          <InputField
            placeholder="Target Weight (kg)"
            value={targetWeight}
            onChange={setTargetWeight}
            type="number"
          />

        </div>

        {/* Continue */}

        <div className="mt-12">
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

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

function InputField({
  placeholder,
  value,
  onChange,
  type = "text",
}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-2xl
        border
        border-border
        bg-card
        px-5
        py-4
        text-card-foreground
        placeholder:text-muted
        outline-none
        transition-all
        focus:border-green-500
        focus:ring-4
        focus:ring-green-500/20
      "
    />
  );
}