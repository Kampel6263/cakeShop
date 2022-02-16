import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>Logo</div>
        <div className={styles.nav}>
          <div>Home</div>
          <div>Portfolio</div>
          <div>Contacts</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
