"use client";

import Image from "next/image";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
};

export default function BrandLogo({
  size = "lg",
  showText = true,
}: BrandLogoProps) {
  const logoSize = {
    sm: 40,
    md: 70,
    lg: 130,
    xl: 180,
  };

  return (
    <div className="flex flex-col items-center">

      <Image
        src="/branding/logo.png"
        alt="FitJourney AI"
        width={logoSize[size]}
        height={logoSize[size]}
        priority
        className="drop-shadow-xl"
      />

      {showText && (
        <>
          <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-foreground">
            FitJourney AI
          </h1>

          <p className="mt-3 text-center text-muted leading-7">
            Build Better Habits.
            <br />
            One Day at a Time.
          </p>
        </>
      )}

    </div>
  );
}