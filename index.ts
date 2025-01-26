import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function callGemini(promptText: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey === undefined) {
    throw new Error("GEMINI_API_KEY is required.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(promptText);
  console.log(result.response.text());
}

callGemini("Explain how AI works");
