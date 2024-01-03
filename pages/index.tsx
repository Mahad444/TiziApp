import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tizi App</title>
        <link rel="icon"  />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Tizi App Where its more than a GYM APP</h1>

        <p className={styles.description}>
          Get fit and stay healthy with our "TIZI" app!
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Workouts & Exercises &rarr;</h2>
            <p>View our collection of workouts and exercises.</p>
          </a>

          <a href="Nutrition" className={styles.card}>
            <h2>Nutrition &rarr;</h2>
            <p>Learn about healthy eating and nutrition.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Check Ur Progress &rarr;</h2>
            <p>Track your progress and see your results in Real Time</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Community &rarr;</h2>
            <p>Connect with other fitness enthusiasts.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}