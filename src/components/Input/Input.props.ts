import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean,
    isValid?: boolean,
    classNames?: string,
    value?: string
}