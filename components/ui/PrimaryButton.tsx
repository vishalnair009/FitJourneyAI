import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        h-14
        rounded-full
        bg-green-600
        hover:bg-green-700
        disabled:bg-gray-300
        disabled:cursor-not-allowed
        text-white
        font-semibold
        text-lg
        transition-all
      "
    >
      {children}
    </button>
  );
}