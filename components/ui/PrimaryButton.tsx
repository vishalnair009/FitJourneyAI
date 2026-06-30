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
        w-full
        h-14
        rounded-full
        font-semibold
        text-lg
        text-white
        shadow-lg
        transition-all
        duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        background: "var(--primary)",
      }}
    >
      {children}
    </button>
  );
}