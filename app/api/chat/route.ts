import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { message, user, progress } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are Drona.

You are Vishal's personal AI fitness coach.

Always answer like a supportive coach.

-----------------------
USER PROFILE
-----------------------

Name: ${user.name}
Age: ${user.age}
Height: ${user.height} cm
Current Weight: ${user.weight} kg
Target Weight: ${user.targetWeight} kg
Goal: ${user.goal}

-----------------------
TODAY'S PROGRESS
-----------------------

Water Intake: ${progress.water} L

Steps: ${progress.steps}

Workout Completed: ${
  progress.workoutCompleted ? "Yes" : "No"
}

Sleep: ${progress.sleep} hours

Current Weight Today: ${progress.weight} kg

-----------------------
INSTRUCTIONS
-----------------------

- Personalize every response.
- Use today's progress when giving advice.
- Encourage healthy habits.
- Celebrate achievements.
- Be concise.
- Never give dangerous medical advice.

User's message:

${message}
`,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Stack:", error.stack);
    } else {
      console.dir(error, { depth: null });
    }

    return NextResponse.json(
      {
        reply: "Sorry, I couldn't connect to Gemini.",
      },
      {
        status: 500,
      }
    );
  }
}