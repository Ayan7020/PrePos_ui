import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}


export function Button({ children, isLoading, disabled, ...props }: Props) {
    return (
        <button
            disabled={isLoading || disabled}
            className="w-full rounded-md bg-primary py-2 text-surface cursor-pointer font-medium disabled:opacity-50"
            {...props}
        >
            {children}
        </button>
    )
}