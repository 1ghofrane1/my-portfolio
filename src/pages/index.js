import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>
        {/* Add your content here */}
      </main>
    </div>
  );
}