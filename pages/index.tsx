import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import BarCustom from "../component/barcustom";
import Footer from "../component/footer";

export default function Home() {
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>dimasnurab | Home</title>
        <meta name="description" content="Portofolio Dimasnurab" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <motion.h1
            variants={item}
            className={styles.title}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4, repeat: Infinity }}

          >
            Hi friends , Wellcome to my portfolio
          </motion.h1>
          <BarCustom />
        </main>

        <Footer />
      </div>

    </>
  );
}
