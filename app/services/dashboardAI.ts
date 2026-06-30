export async function getDailyBrief(user: any, progress: any) {
  try {
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

    const data = await response.json();

    return (
      data.brief ??
      "Good morning! Let's make today count. 💪"
    );
  } catch (error) {
    console.error("Dashboard API Error:", error);

    return "Good morning! Let's make today count. 💪";
  }
}