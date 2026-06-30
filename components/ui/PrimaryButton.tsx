import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        h-14
        w-full
        rounded-full
        bg-green-600
        hover:bg-green-700
        disabled:bg-gray-300
        disabled:cursor-not-allowed
        text-white
        font-semibold
        text-lg
        transition-all
        ${className}
      `}
    >
      {children}
    </button>
  );
}