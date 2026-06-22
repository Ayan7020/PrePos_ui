import { useState } from "react";
import { workspaceService, CreateWorkspaceResponseData } from "../services/workspace";
import { CreateWorkspacePayload } from "../types";
import { ApiResponse } from "@/lib/api/types";

export function useCreateWorkspace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CreateWorkspaceResponseData | null>(null);

  const createWorkspace = async (payload: CreateWorkspacePayload): Promise<ApiResponse<CreateWorkspaceResponseData> | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await workspaceService.createWorkspace(payload);
      setData(response.data);
      return response;
    } catch (err: any) {
      const errMsg = err.message || "Failed to create workspace.";
      setError(errMsg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createWorkspace, loading, error, data };
}
