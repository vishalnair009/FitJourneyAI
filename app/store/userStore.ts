import { create } from "zustand";

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

  updateUser: (data: Partial<UserProfile>) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    name: "Vishal",
    age: 33,
    height: 180,
    weight: 98,
    targetWeight: 80,
    goal: "Lose Weight",
  },

  updateUser: (data) =>
    set((state) => ({
      user: {
        ...state.user,
        ...data,
      },
    })),
}));