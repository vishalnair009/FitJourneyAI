"use client";

import Image from "next/image";

type Mood =
  | "coach"
  | "thinking"
  | "happy"
  | "celebrate"
  | "thumbsup"
  | "wave"
  | "running"
  | "sleep";

type Size = "sm" | "md" | "lg" | "xl";

type DronaAvatarProps = {
  mood?: Mood;
  size?: Size;
  className?: string;
};

export default function DronaAvatar({
  mood = "coach",
  size = "md",
  className = "",
}: DronaAvatarProps) {
  const sizes = {
    sm: 48,
    md: 72,
    lg: 140,
    xl: 220,
  };

  const imageSize = sizes[size];

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
    >
      <div className="absolute h-[85%] w-[85%] rounded-full bg-green-500/20 blur-2xl" />

      <Image
        src={`/branding/drona/${mood}.png`}
        alt="Drona AI Coach"
        width={imageSize}
        height={imageSize}
        priority
        className="relative object-contain"
      />
    </div>
  );
}