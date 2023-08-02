import { AppRouter } from "app/providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar/Navbar";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";

export function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter />
        </div>
    );
}