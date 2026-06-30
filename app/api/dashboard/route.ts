import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { user, progress } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are Drona, a world-class AI fitness coach.

Generate a short morning briefing for the user.

USER

Name: ${user.name}
Age: ${user.age}
Height: ${user.height} cm
Weight: ${user.weight} kg
Target Weight: ${user.targetWeight} kg
Goal: ${user.goal}

TODAY

Water: ${progress.water} L

Steps: ${progress.steps}

Workout Completed:
${progress.workoutCompleted ? "Yes" : "No"}

Sleep:
${progress.sleep} hours

Today's Weight:
${progress.weight} kg

Instructions:

- Keep it under 120 words.
- Be motivating.
- Mention today's progress.
- Give one practical tip.
- End with encouragement.
`,
    });

    return NextResponse.json({
      brief: response.text,
    });

  } catch (error) {
    console.error("Dashboard Error:", error);
  
    return NextResponse.json({
      brief:
        "Good morning! Let's make today count. 💪 Drona is temporarily unavailable, but your dashboard is ready.",
    });
  }
  }
