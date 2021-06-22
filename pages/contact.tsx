import LayoutOne from "../component/layout/layoutone";
import styles from "../styles/contact.module.css";

function contact() {
  return (
    <LayoutOne pageTitles="Contact">
      <div className={styles.container}>
        <h1>CONTACT PAGES</h1>
      </div>
    </LayoutOne>
  );
}
export default contact;
