import { create } from "zustand";

export type DailyProgress = {
  water: number;
  steps: number;
  sleep: number;
  workoutCompleted: boolean;
  weight: number;
};

type DailyStore = {
  progress: DailyProgress;

  setWater: (water: number) => void;
  setSteps: (steps: number) => void;
  setSleep: (sleep: number) => void;
  setWorkoutCompleted: (completed: boolean) => void;
  setWeight: (weight: number) => void;
};

export const useDailyStore = create<DailyStore>((set) => ({
  progress: {
    water: 0,
    steps: 0,
    sleep: 0,
    workoutCompleted: false,
    weight: 0,
  },

  setWater: (water) =>
    set((state) => ({
      progress: {
        ...state.progress,
        water,
      },
    })),

  setSteps: (steps) =>
    set((state) => ({
      progress: {
        ...state.progress,
        steps,
      },
    })),

  setSleep: (sleep) =>
    set((state) => ({
      progress: {
        ...state.progress,
        sleep,
      },
    })),

  setWorkoutCompleted: (completed) =>
    set((state) => ({
      progress: {
        ...state.progress,
        workoutCompleted: completed,
      },
    })),

  setWeight: (weight) =>
    set((state) => ({
      progress: {
        ...state.progress,
        weight,
      },
    })),
}));