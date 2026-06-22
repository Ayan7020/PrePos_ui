"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (event: { target: { name: string; value: string } }) => void;
  onBlur?: (...args: any[]) => void;
  name?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
}

export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  ({ options, value, onChange, onBlur, name, placeholder = "Select an option", className = "", error = false }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleSelect = (optionValue: string) => {
      if (onChange) {
        onChange({
          target: {
            name: name || "",
            value: optionValue,
          },
        });
      }
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          // onBlur?.();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onBlur]);

    return (
      <div ref={containerRef} className="relative w-full">
        <button
          type="button"
          ref={ref}
          name={name}
          onClick={handleToggle}
          className={`w-full flex items-center justify-between rounded-md border bg-surface px-3 py-2 text-sm text-left focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer ${
            error ? "border-destructive focus:ring-destructive" : "border-border"
          } ${className}`}
        >
          <span className={selectedOption ? "text-foreground" : "text-text-secondary"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <ul className="absolute z-50 mt-1 w-full rounded-md border border-border bg-surface shadow-md py-1 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-200 focus:outline-none">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer select-none transition-colors hover:bg-background ${
                  option.value === value ? "text-primary font-medium" : "text-foreground"
                }`}
              >
                <span>{option.label}</span>
                {option.value === value && <Check className="w-4 h-4 text-primary" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
