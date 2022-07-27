// import Head from "next/head";
import styles from "../styles/Header.module.css";

const Header = () => {
  const x = 3;
  return (
    <div>
      <h1 className={styles.title}>
        <span>Soccer</span> Stars
      </h1>
      <p className={styles.description}>One stop, soccer news</p>
    </div>
  );
};

export default Header;
