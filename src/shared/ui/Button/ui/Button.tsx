import { ButtonHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAN = "clean",
    OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        type = "button",
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            {...otherProps}
            type={type}
            className={classNames(cls.Button, { [cls.disabled]: disabled }, [
                className,
                cls[theme],
            ])}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
