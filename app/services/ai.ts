import { User } from "../store/userStore";
import { DailyProgress } from "../store/dailyStore";

export async function askDrona(
  message: string,
  user: User,
  progress: DailyProgress
): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      user,
      progress,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact Drona.");
  }

  const data = await response.json();

  return data.reply;
}