import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client.js";
import { generateIndustryInsights } from "@/lib/inngest/function.js";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    generateIndustryInsights
  ],
});
// import { serve } from "inngest/next";

// import { inngest } from "@/lib/inngest/client.js";
// // import { generateIndustryInsights, helloWorld } from "@/lib/inngest/function.js";
// import { generateIndustryInsights } from "@/lib/inngest/function.js";

// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     // helloWorld,
//     generateIndustryInsights
//     /* your functions will be passed here later! */
//   ],
// });