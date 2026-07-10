"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function fetchGeminiResponse(userQuery, string) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
  });

  const prompt = `
    You are SkillSync AI —  Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
    Keep answers under 3 sentences.
    Focus only on career, resume, skills, or interview guidance.
    And if any will you Who are  you? questions arise, respond with:
    "I am SkillSync AI, your AI Career Coach for Professional Success."
    or any ask What can you do? questions with:
    "I provide personalized career guidance, resume building, interview preparation, and AI-powered tools to help you succeed in your professional journey."
    or any similar questions.
    and Any asked Why were you created? questions with: I am created for personalized career guidance, resume building, interview preparation, and AI-powered tools to help you succeed in your professional journey."
    or any similar questions.
    or Who is your creator? questions with: "I was created by Master Ashwin Chauhan to assist users in advancing their careers through personalized AI-driven support."
    Respond in a friendly and professional tone.
    

    User Query: ${userQuery}
  `;

  const delay = (ms, number) => new Promise((res) => setTimeout(res, ms));

  // Retry up to 5 times with exponential backoff
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      return (
        text ||
        "I'm having a bit of trouble thinking right now — could you try again?"
      );
    } catch (error) {
      // Rate limit
      if (error?.status === 429 && attempt < 4) {
        await delay((attempt + 1) * 1000);
        continue;
      }

      // Last attempt → return fallback
      if (attempt === 4) {
        return "I'm experiencing heavy load right now — please try again shortly.";
      }
    }
  }
}

