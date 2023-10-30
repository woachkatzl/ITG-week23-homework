import React, { useState } from "react";

//Пакет classnames
import * as classnames from "classnames";

//Стили
import styles from "./planCard.module.scss";

function PlanCard(props) {
  //Состояния
  const [pressed, setPressed] = useState(false);

  //Функция изменения состояния
  const handleClick = () => {
    setPressed(!pressed);
  };

  //Составные классы
  const cardTitle = classnames(styles.card__title, props.theme.card__title);
  const cardPrice = classnames(styles.card__price, props.theme.card__price);
  const card = classnames(styles.card, {
    [styles.selected]: pressed,
  });

  return (
    <div className={card} onClick={handleClick}>
      <div className={styles.card__body}>
        <div className={cardTitle}>
          <h2>{props.name}</h2>
        </div>
        <div className={cardPrice}>
          <p>руб</p>
          <p className={styles.card__priceBig}>{props.price}</p>
          <p className={styles.card__priceBottom}>/мес</p>
        </div>
        <div className={styles.card__speed}>
          <p className={styles.card__text}>до {props.speed} Мбит/сек</p>
        </div>
      </div>
      <div className={styles.card__footer}>
        <p className={styles.card__text}>
          Объем включенного трафика не ограничен
        </p>
      </div>
    </div>
  );
}

export { PlanCard };
