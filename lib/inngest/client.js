import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "nextwise", // Unique app ID
  name: "nextwise",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});