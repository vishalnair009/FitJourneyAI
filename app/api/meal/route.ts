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

Analyze the following meal.

Meal:
${description}

Return ONLY valid JSON in this format:

{
  "mealType": "Breakfast",
  "calories": 450,
  "protein": 28,
  "carbs": 42,
  "fat": 15,
  "score": 4,
  "advice": "Great protein intake. Add more vegetables."
}

Rules:
- Return ONLY JSON.
- No markdown.
- No explanation.
- Calories and macros should be realistic estimates.
`,
    });

    console.log("========== GEMINI RAW RESPONSE ==========");
    console.dir(response, { depth: null });

    let text = "";

    // Works with current SDK
    if (typeof response.text === "function") {
      text = response.text();
    } else if (typeof response.text === "string") {
      text = response.text;
    }

    // Remove markdown if Gemini still returns it
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== CLEANED RESPONSE ==========");
    console.log(text);

    return NextResponse.json({
      result: text,
    });
  } catch (error) {
    console.error("========== MEAL API ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error(error.stack);

      return NextResponse.json(
        {
          result: error.message,
        },
        {
          status: 500,
        }
      );
    }

    console.dir(error, { depth: null });

    return NextResponse.json(
      {
        result: "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}