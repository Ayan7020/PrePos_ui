import { Input } from "@/components/ui";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
    return <form className="space-y-4">
        <div className="">
            <Input placeholder="Email"  className="w-full"/> 
        </div>
        <div>
            <Input type="password" placeholder="Password" className="w-full"/>
        </div>
        <Button type="submit">Sign in</Button>
    </form>
}