import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}


export function Button({ children, isLoading, disabled, className,...props }: Props) {
    return (
        <button
            disabled={isLoading || disabled}
            className={`w-full rounded-md bg-primary py-2 text-surface cursor-pointer font-medium disabled:opacity-50 flex justify-center items-center ${className}`}
            {...props}
        >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin " /> : children}
        </button>
    )
}