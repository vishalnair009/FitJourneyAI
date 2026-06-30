import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  addWater: (amount: number) => void;

  setSteps: (steps: number) => void;
  addSteps: (steps: number) => void;

  setSleep: (sleep: number) => void;

  setWorkoutCompleted: (completed: boolean) => void;

  setWeight: (weight: number) => void;

  resetProgress: () => void;
};

export const useDailyStore = create<DailyStore>()(
  persist(
    (set) => ({
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

      addWater: (amount) =>
        set((state) => ({
          progress: {
            ...state.progress,
            water: Math.min(state.progress.water + amount, 10),
          },
        })),

      setSteps: (steps) =>
        set((state) => ({
          progress: {
            ...state.progress,
            steps,
          },
        })),

      addSteps: (steps) =>
        set((state) => ({
          progress: {
            ...state.progress,
            steps: state.progress.steps + steps,
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

      resetProgress: () =>
        set({
          progress: {
            water: 0,
            steps: 0,
            sleep: 0,
            workoutCompleted: false,
            weight: 0,
          },
        }),
    }),
    {
      name: "fitjourney-progress",
    }
  )
);