import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { description } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert nutritionist.

Analyze this meal:

${description}

Return ONLY valid JSON.

{
  "mealType": "Breakfast",
  "calories": 450,
  "protein": 25,
  "carbs": 45,
  "fat": 16,
  "score": 4,
  "advice": "Great protein and complex carbs. Add fruit or vegetables for more fiber."
}
`,
    });

    let text = response.text ?? "";

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return NextResponse.json({
      result: text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        result: JSON.stringify({
          mealType: "Unknown",
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          score: 0,
          advice: "Unable to analyze meal right now.",
        }),
      },
      {
        status: 500,
      }
    );
  }
}