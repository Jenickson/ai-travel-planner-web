const BACKEND_URL = "https://ai-travel-planner-chatbot.onrender.com";

export async function sendMessage(message) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/chat/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.response || "⚠️ No reply from server";
  } catch (error) {
    console.error("Error sending message:", error);
    return "⚠️ Server not responding";
  }
}
