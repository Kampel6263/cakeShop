import React from "react";
import Header from "./components/header/header.component";
import styles from "./App.module.scss";
import Intro from "./components/intro/intro.component";
import Content from "./components/content/content.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.background}></div>
      <Header />
      <Intro />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
