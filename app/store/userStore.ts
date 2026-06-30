import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserProfile = {
  name: string;
  age: number;
  height: number;
  weight: number;
  targetWeight: number;
  goal: string;
};

type UserStore = {
  user: UserProfile;

  hasCompletedOnboarding: boolean;

  updateUser: (data: Partial<UserProfile>) => void;

  completeOnboarding: () => void;

  resetUser: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        name: "",
        age: 0,
        height: 0,
        weight: 0,
        targetWeight: 0,
        goal: "",
      },

      hasCompletedOnboarding: false,

      updateUser: (data) =>
        set((state) => ({
          user: {
            ...state.user,
            ...data,
          },
        })),

      completeOnboarding: () =>
        set({
          hasCompletedOnboarding: true,
        }),

      resetUser: () =>
        set({
          user: {
            name: "",
            age: 0,
            height: 0,
            weight: 0,
            targetWeight: 0,
            goal: "",
          },
          hasCompletedOnboarding: false,
        }),
    }),
    {
      name: "fitjourney-user",
    }
  )
);