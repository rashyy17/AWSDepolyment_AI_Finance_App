import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function testGeminiAPI() {
  console.log("Testing Gemini API...");
  console.log("API Key present?", !!process.env.GEMINI_API_KEY);
  console.log("API Key first 10 chars:", process.env.GEMINI_API_KEY?.substring(0, 10));

  if (!process.env.GEMINI_API_KEY) {
    console.error("No API key found!");
    return;
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  // Test different models individually
  const modelsToTest = [
    "gemini-pro",
    "gemini-pro-vision", 
    "gemini-1.5-flash",
    "gemini-1.5-pro",
    "gemini-1.5-flash-latest",
    "gemini-1.5-pro-latest"
  ];

  for (const modelName of modelsToTest) {
    try {
      console.log(`\nTesting ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Say hello");
      const response = await result.response;
      console.log(`✅ ${modelName} works:`, response.text());
    } catch (error) {
      console.log(`❌ ${modelName} failed:`, error.message);
    }
  }
}

testGeminiAPI();