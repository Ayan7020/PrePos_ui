"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { UseLogin } from "../hooks/UseLogin";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
    const { login, loading, error, data } = UseLogin();
    const router = useRouter();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (values: LoginFormData) => {
        const res = await login(values);
        if (res?.success) {
            router.push("/dashboard");
        }
    };

    return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
        
        <div className="space-y-1">
            <Input 
                {...register("email")}
                placeholder="Email"  
                className="w-full"
            /> 
            {errors.email && (
                <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>
            )}
        </div>
        
        <div className="space-y-1">
            <Input 
                type="password" 
                {...register("password")}
                placeholder="Password" 
                className="w-full"
            />
            {errors.password && (
                <span className="text-red-500 text-xs font-medium">{errors.password.message}</span>
            )}
        </div>
        
        <Button type="submit" disabled={loading} isLoading={loading}> 
            Login
        </Button>
    </form>
}