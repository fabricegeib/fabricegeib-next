import { useTheme } from "next-themes";
// import styles from "../styles/Header.module.scss";
import Link from "next/link";

export const siteTitle = "fabricegeib.com";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="ThemeChanger">
      {/* The current theme is: {theme} */}
      {/* <button onClick={() => setTheme("light")}>☀️</button>
      <button onClick={() => setTheme("dark")}>🌙</button> */}
      <a onClick={() => setTheme("light")}>☀️</a>
      <a onClick={() => setTheme("dark")}>🌙</a>
    </div>
  );
};

export default function Header({ children }) {
  // return <div className={styles.container}>{children}</div>

  return (
    <header className="header">
      <h1>
        <Link href="/">{siteTitle}</Link>
      </h1>
      <ThemeChanger />
    </header>
  );
}
