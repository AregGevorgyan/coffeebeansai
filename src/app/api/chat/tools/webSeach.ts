import { tool } from "ai";
import { z } from "zod";
import { xai } from "@ai-sdk/xai";
import { generateText } from "ai";

type Input = z.infer<typeof inputSchema>;
const inputSchema = z.object({
  query: z.string().describe("The query to search the web for"),
});

export const webSearch = tool<Input, any>({
  name: "webSearch",
  description: "Search the web for information",
  inputSchema,
  execute: async ({ query }) => {
    const result = await generateText({
      model: xai("grok-4-fast-non-reasoning"),
      prompt: query,
      providerOptions: {
        xai: {
          searchParameters: {
            mode: "on",
            maxSearchResults: 3,
          },
        },
      },
    });

    return result.text;
  },
});
