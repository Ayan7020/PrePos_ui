import { bffClient } from "@/lib/api/client";
import { ApiResponse } from "@/lib/api/types";
import { CreateWorkspacePayload } from "../types";

export interface CreateWorkspaceResponseData {
  workspace_id: string;
}

export const workspaceService = {
  createWorkspace: async (payload: CreateWorkspacePayload): Promise<ApiResponse<CreateWorkspaceResponseData>> => {
    return bffClient.post("/workspace/create-workspace", payload);
  },
};
