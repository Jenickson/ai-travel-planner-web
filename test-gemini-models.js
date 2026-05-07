import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyC7HqdgH9Fpi_9Ahlyu5IiEg1moM4bDlvA"; // From .env.local
const genAI = new GoogleGenerativeAI(apiKey);

const modelsToTest = [
  "gemini-flash-lite-latest",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash-lite",
  "gemini-pro-latest"
];

async function testModels() {
  for (const modelName of modelsToTest) {
    console.log(`Testing model: ${modelName}...`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Hello, world!");
      console.log(`SUCCESS for ${modelName}:`, result.response.text());
      return; // Stop if we found a working one
    } catch (e) {
      console.log(`FAILED for ${modelName}: ${e.message}`);
    }
    // Small delay
    await new Promise(r => setTimeout(r, 2000));
  }
}

testModels();
