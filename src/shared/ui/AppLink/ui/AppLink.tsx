import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum ThemeAppLink {
    MAIN = "main",
    SECONDARY = "secondary",
    INVERTED_MAIN = "inverted-main",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: ThemeAppLink;
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = ThemeAppLink.INVERTED_MAIN,
        ...otherProps
    } = props;

    return (
        <Link
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            to={to}
        >
            {children}
        </Link>
    );
};
