import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <motion.li className={styles.itemlist} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }}><Link href="/"><a>Home</a></Link></motion.li>
        <motion.li className={styles.itemlist} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }}><Link href="/profile"><a>profile</a></Link></motion.li>
        <motion.li className={styles.itemlist} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }}><Link href="/porto"><a>porto</a></Link></motion.li>
        <motion.li className={styles.itemlist} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.6 }}><Link href="/contact"><a>contact</a></Link></motion.li>
      </ul>
    </header>
  );
}
export default Header;
