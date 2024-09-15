import Head from "next/head";
import styles from "../styles/style.module.scss";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gs graduation work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.container}>
        <Timeline />
      </main>
    </>
  );
}