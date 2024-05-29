import Hero from "@/components/Hero"
import styles from "./index.module.css"
import Books from "@/components/Books"

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Books />
    </main>
  );
}
