import z from "zod";

export const newsSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  published: z.boolean(),
});

export type NewsData = z.infer<typeof newsSchema>;
