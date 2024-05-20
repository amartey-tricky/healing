import styles from "./index.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <h2 className={styles.footerHeader}>
            Dr. Ambrose Togobo
          </h2>
          <p  className={styles.footerParagraph}>© Copyright 2024 <Link href="/">Dr. Ambrose Togobo</Link>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}