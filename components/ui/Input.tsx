import { InputHTMLAttributes } from "react";


export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
        className={`rounded-md border  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        {...props} />
    )
}