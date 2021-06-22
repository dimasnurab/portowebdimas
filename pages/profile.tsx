// import Image from "next/image";
import { motion } from "framer-motion";
import LayoutOne from "../component/layout/layoutone";
import styles from "../styles/profile.module.css";

export default function profile() {
  return (
    <LayoutOne pageTitles="Profile">
      <div className={styles.container}>
        <motion.img src="/profile.jpg" width={240} height={360} alt="profile" className={styles.img} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} />
        <div className={styles.containerColumn}>
          <div className={styles.containertext}>
            <text className={styles.text1}>Dimas Nur Abdillah Hidayat</text>
          </div>
          <div className={styles.boxSpace} />
          <h3 className={styles.text2}>Mobile Apps Engineer</h3>
          <p className={styles.paragrafIntroduce}>
            Little story
            I'm currently working in one of the software houses, to be precise
            Bandung city, West Java. Indonesia
            my hobby is mostly watching anime playing my game
            I also like to do sports such as playing soccer or cycling
          </p>
          <h3 className={styles.text2}>Professional Ability</h3>
          <img src="/logo_flutter.png" height={60} width={140} alt="dart" className={styles.imgAbility} />
          <img src="/logo_android.png" height={60} width={120} alt="dart" className={styles.imgAbility} />
          <img src="/logo_ios.png" height={60} width={120} alt="dart" className={styles.imgAbility} />
          <h3 className={styles.text2}>Programming Language</h3>
          <p className={styles.text3}> Dart Java Swift</p>
        </div>
      </div>
    </LayoutOne>
  );
}
