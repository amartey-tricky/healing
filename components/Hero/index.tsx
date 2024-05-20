import styles from "./index.module.css"

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1>Hero</h1>
      </div>
    </section>
  )
}