export async function getDailyBrief(user: any, progress: any) {
    const response = await fetch("/api/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        progress,
      }),
    });
  
    console.log("Dashboard API Status:", response.status);
  
    if (!response.ok) {
      const text = await response.text();
      console.error("Dashboard API Error:", text);
  
      throw new Error("Failed to generate briefing.");
    }
  
    const data = await response.json();
  
    console.log("Dashboard API Response:", data);
  
    return data.brief;
  }