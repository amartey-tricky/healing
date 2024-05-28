import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div>
          <h1 className={styles.heading}>Dr Ambrose Kofi Togobo</h1>
          <p className={styles.p}>Dr Togobo is a prolific author and medical doctor. He is a member of the Royal College of Anaesthetists, who has written over 3 books. He has a knack for delivering a great experience to the reader when they least expect it.</p>
          <Link href="/books" className={styles.link}>Discover Books</Link>
        </div>
        <div className={styles.image}>
          <Image src="" alt="image of Dr Togobo" width={350} height={400} />
        </div>
      </div>
    </section>
  )
}