import styles from "./index.module.css";
import Image from "next/image";

const Books = [
  {
    id: 1,
    name: "Healing! Where Does The Credit Lie?",
    src: "https://utfs.io/f/3ddb5486-678f-49ed-aaff-fb52502be330-1xajvc.jpeg",
    genre: "Non-Fiction",
    excerpt: "",
  },
  {
    id: 2,
    name: "Relevance of Religion in shaping the lives of People and Society",
    src: "https://utfs.io/f/14e6e0c8-dbe3-478b-b2c6-c78e2448b8a4-1xajva.jpeg",
    genre: "Non-Fiction",
    excerpt: "",
  },
];

export default function Home() {
  return (
    <section className={styles.section}>
      {Books.map((book) => {
        return (
          <article key={book.id} className={styles.article}>
            <div className={styles.img}>
              <Image
                src={book.src}
                alt={book.name}
                loading="lazy"
                className={styles.image}
                objectFit="cover"
                width={200}
                height={350}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.head}>
                <h3 className={styles.heading}>{book.genre}</h3>
                <div className={styles.name}>{book.name}</div>
                <div className={styles.stock}>In stock</div>
              </div>
            </div>
            <hr />
            <p className={styles.excerpt}>{book.excerpt}</p>
          </article>
        );
      })}
    </section>
  );
}
