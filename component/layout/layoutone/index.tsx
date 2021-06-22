import { ReactNode } from "react";
import Head from "next/head";
import Header from "../../header";
import Footer from "../../footer";
import styles from "./layoutone.module.css";

interface LayoutProps{
    children: ReactNode;
    pageTitles:string;
}
function LayoutOne(props:LayoutProps) {
  const { children, pageTitles } = props;
  return (
    <>
      <Head>
        <title>
          dimasnurab |
          {" "}
          {pageTitles}
        </title>
        <meta name="description" content="Portofolio Dimasnurab" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
export default LayoutOne;
