import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "newblog-nextjs-tutorial",
  apiKey: process.env.API_KEY,
});
