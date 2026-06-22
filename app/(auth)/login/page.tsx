import { LoginForm } from "@/features/auth/components/LoginForm";

const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm rounded-lg bg-surface p-8 border border-border space-y-8">
                <div className="">
                    <p className="text-md text-text-secondary">Please enter your details</p>
                    <p className="text-2xl font-bold">Welcome Back</p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;