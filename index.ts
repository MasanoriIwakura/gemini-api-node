import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import readline from "node:readline";

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const userPrompt = rl.question("Enter your prompt: ", (prompt) => {
  callGemini(prompt);
  rl.close();
});
