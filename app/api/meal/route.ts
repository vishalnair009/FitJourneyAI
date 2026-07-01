import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { description, mealType } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are Drona, an expert AI nutrition coach.

Analyze the following meal.

Meal Type:
${mealType}

Description:
${description}

Estimate nutritional values realistically.

Return ONLY valid JSON.

{
  "mealType": "${mealType}",
  "description": "${description}",
  "calories": 450,
  "protein": 25,
  "carbs": 45,
  "fat": 16,
  "healthScore": 8,
  "advice": "Great protein intake. Try adding vegetables for more fibre."
}
`,
    });

    let text = response.text ?? "";

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const meal = JSON.parse(text);

    return NextResponse.json(meal);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        mealType: "Unknown",
        description: "",
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        healthScore: 0,
        advice: "Unable to analyze the meal right now.",
      },
      {
        status: 500,
      }
    );
  }
}