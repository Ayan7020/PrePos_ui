import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  businessType: z.enum(["RETAIL_STORE", "RESTAURANT"]),
  location: z.string().optional(),
});

export type CreateWorkspacePayload = z.infer<typeof createWorkspaceSchema>;
