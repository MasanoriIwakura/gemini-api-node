import dotenv from "dotenv";

dotenv.config();

async function callGemini(promptText: string) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(promptText);
  console.log(result.response.text());
}

callGemini("Explain how AI works");
