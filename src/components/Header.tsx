import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme !== "dark";
  function changeTheme() {
    setTheme((prev) => {
      return prev === "dark" ? "light" : "dark";
    });
  }
  return (
    <header className=" mt-8">
      <div className=" p-3.5 shadow dark:shadow-none shadow-primary-Neutral-100 flex justify-between items-center bg-primary-Neutral-0 dark:bg-primary-Neutral-800 rounded-xl">
        <div>
          <img
            src={isLight ? "/logo.svg" : "/logo-dark.svg"}
            className=" w-[80%] md:w-auto"
            alt={isLight ? "logo" : "logo-dark"}
          />
        </div>
        <button
          aria-label="change theme"
          onClick={changeTheme}
          className=" w-10 h-10 cursor-pointer bg-primary-Neutral-100 dark:bg-primary-Neutral-700 hover:bg-primary-Neutral-300 dark:hover:bg-primary-Neutral-600 focus:outline-0 focus:border focus:border-primary-Red-500 rounded-xl flex justify-center items-center"
        >
          {isLight ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
