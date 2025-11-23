// import { Inngest }  from "inngest";

// export const inngest = new Inngest({
//   id:"skillsync",
//   name: "SkillSyncAI Inngest Client",
//   credentials: {
//     gemini: {
//       apiKey: process.env.GEMINI_API_KEY,
//     },
//   },
// });

import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "skillsync",
  name: "SkillSyncAI Inngest Client",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
 });