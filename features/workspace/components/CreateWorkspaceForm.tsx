"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Dropdown } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { useCreateWorkspace } from "../hooks/useCreateWorkspace";
import { createWorkspaceSchema, CreateWorkspacePayload } from "../types";
import { useRouter } from "next/navigation";

export function CreateWorkspaceForm() {
  const { createWorkspace, loading, error, data } = useCreateWorkspace();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateWorkspacePayload>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
      description: "",
      businessType: "RETAIL_STORE",
      location: "",
    },
  });

  const onSubmit = async (values: CreateWorkspacePayload) => {
    const res = await createWorkspace(values);
    if (res?.success) {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md w-full mx-auto bg-surface p-8 border border-border rounded-2xl shadow-sm">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Create EPOS Workspace</h2>
        <p className="text-text-secondary text-sm">
          Fill in the details to spin up a new Point of Sale system.
        </p>
      </div>

      {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
      {data && <div className="text-green-500 text-sm font-medium">Workspace created successfully! ID: {data.workspace_id}</div>}

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
          Workspace Name
        </label>
        <Input
          {...register("name")}
          placeholder="e.g. My Cafe, Store #42"
          className="w-full"
        />
        {errors.name && (
          <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
          Description
        </label>
        <Input
          {...register("description")}
          placeholder="e.g. Fine dining restaurant in central district"
          className="w-full"
        />
        {errors.description && (
          <span className="text-red-500 text-xs font-medium">{errors.description.message}</span>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
          Business Type
        </label>
        <Dropdown
          options={[
            { value: "RETAIL_STORE", label: "Retail Store" },
            { value: "RESTAURANT", label: "Restaurant" },
          ]}
          value={watch("businessType")}
          error={!!errors.businessType}
          {...register("businessType")}
        />
        {errors.businessType && (
          <span className="text-red-500 text-xs font-medium">{errors.businessType.message}</span>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary block">
          Location (Optional)
        </label>
        <Input
          {...register("location")}
          placeholder="e.g. New York, NY"
          className="w-full"
        />
        {errors.location && (
          <span className="text-red-500 text-xs font-medium">{errors.location.message}</span>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={loading} isLoading={loading}> 
        Create Epos
      </Button>
    </form>
  );
}
