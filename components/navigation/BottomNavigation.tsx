"use client";

export type Tab =
  | "home"
  | "journey"
  | "drona"
  | "meals"
  | "profile";

type BottomNavigationProps = {
  currentTab: Tab;
  onChange: (tab: Tab) => void;
};

const tabs: {
  id: Tab;
  label: string;
  icon: string;
}[] = [
  {
    id: "home",
    label: "Home",
    icon: "🏠",
  },
  {
    id: "journey",
    label: "Journey",
    icon: "🏆",
  },
  {
    id: "drona",
    label: "Drona",
    icon: "💬",
  },
  {
    id: "meals",
    label: "Meals",
    icon: "🍽",
  },
  {
    id: "profile",
    label: "Profile",
    icon: "👤",
  },
];

export default function BottomNavigation({
  currentTab,
  onChange,
}: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background shadow-xl">

      <div className="mx-auto flex max-w-md justify-around py-3">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition ${
              currentTab === tab.id
                ? "text-green-600"
                : "text-muted"
            }`}
          >
            <span className="text-xl">
              {tab.icon}
            </span>

            <span className="text-xs font-medium">
              {tab.label}
            </span>
          </button>
        ))}

      </div>

    </nav>
  );
}