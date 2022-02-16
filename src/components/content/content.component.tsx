import React from "react";
import styles from "./content.module.scss";

type cardInfoType = {
  title: any;
  img: string;
};

const Content = () => {
  const cardInfo: cardInfoType[] = [
    {
      title: "Тістечка",
      img: "fff",
    },
    {
      title: "Торти",
      img: "fff",
    },
    {
      title: "3",
      img: "fff",
    },
    {
      title: "4",
      img: "fff",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div>Text</div>
        {cardInfo.map((el, i) => (
          <div key={i}>{el.img}</div>
        ))}
      </div>
    </div>
  );
};

export default Content;
