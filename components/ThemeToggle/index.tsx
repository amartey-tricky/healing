import styles from "./index.module.css"

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button type="button" onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }} className={styles.themeToggle}>
      {theme === "dark" ? (
        <SunIcon className={styles.sun} />
      ) : (
        <MoonIcon className={styles.moon} />
      )}
    </button>
  )
}