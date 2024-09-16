export const themeEffect = function () {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add(
            "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    } else {
        document.documentElement.classList.remove("dark");
    }
};
