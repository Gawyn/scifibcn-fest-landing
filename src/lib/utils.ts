import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Global design token for header color
export const HEADER_COLOR = "#fbc313"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
