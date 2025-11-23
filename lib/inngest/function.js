import { GoogleGenerativeAI } from "@google/generative-ai";
import { inngest } from "./client";
import { db } from "@/lib/prisma";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"   // ✔️ VALID MODEL
  });

/**
 * RUN EVERY SUNDAY — CRON
 */
export const generateIndustryInsights = inngest.createFunction(
  { id: "generateIndustryInsights", name: "Generate Industry Insights" },

  // Schedule trigger (cron)
  { cron: "0 0 * * 0" },

  // Function logic
  async ({ step }) => {
    const industries = await step.run("Fetch industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
      const prompt = `
        Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON:
        {
          "salaryRanges": [
            { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
          ],
          "growthRate": number,
          "demandLevel": "High" | "Medium" | "Low",
          "topSkills": ["skill1", "skill2"],
          "marketOutlook": "Positive" | "Neutral" | "Negative",
          "keyTrends": ["trend1", "trend2"],
          "recommendedSkills": ["skill1", "skill2"]
        }
      `;

      // Run AI
      const res = await step.ai.wrap(
        "gemini",
        async (promptText) => {
          return await model.generateContent(promptText);
        },
        prompt
      );

      const raw = res.response.candidates[0].content.parts[0].text || "";
      const cleaned = raw.replace(/```(?:json)?/g, "").trim();
      const insights = JSON.parse(cleaned);

      // Save to DB
      await step.run(`Update ${industry} insights`, async () => {
        await db.industryInsight.update({
          where: { industry },
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      });
    }
  }
);

/**
 * SIMPLE TEST FUNCTION
 */
// export const helloWorld = inngest.createFunction(
//   { id: "hello-world" },
//   { event: "test/hello.world" },
//   async ({ event, step }) => {
//     await step.sleep("wait-a-moment", "1s");
//     return { message: `Hello ${event.data.email}!` };
//   }
// );
