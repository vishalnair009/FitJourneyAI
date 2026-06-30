export async function analyzeMeal(description: string) {
    const response = await fetch("/api/meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    });
  
    console.log("Meal API Status:", response.status);
  
    if (!response.ok) {
      const error = await response.text();
      console.error("Meal API Error:", error);
  
      throw new Error("Failed to analyze meal.");
    }
  
    const data = await response.json();
  
    console.log("Meal API Response:", data);
  
    return data;
  }